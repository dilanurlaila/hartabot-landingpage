"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, Star } from "lucide-react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm font-semibold text-trust-navy">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-sage-clear bg-white px-4 py-3 text-sm font-normal text-ink-navy outline-none transition placeholder:text-ink-navy/40 focus:border-sage-active"
      />
    </label>
  );
}

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          aria-label={`Beri rating ${star} dari 5`}
          className="p-0.5"
        >
          <Star
            className={cn(
              "size-7 transition",
              star <= value ? "fill-haro-gold text-haro-gold" : "text-sage-active/40",
            )}
          />
        </button>
      ))}
    </div>
  );
}

function FeedbackSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-sage-active/15 text-sage-active">
        <CheckCircle2 className="size-8" />
      </div>
      <h3 className="text-xl font-semibold text-trust-navy">Terima kasih atas masukanmu!</h3>
      <p className="max-w-sm text-sm leading-[1.7] text-ink-navy/70">
        Feedback kamu sangat berarti untuk pengembangan HartaBot ke depannya.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="text-sm font-semibold text-sage-active underline underline-offset-4 transition hover:text-trust-navy"
      >
        Kirim masukan lain
      </button>
    </div>
  );
}

export function FeedbackForm({ formAction = "/" }: { formAction?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [rating, setRating] = useState(5);
  const [consent, setConsent] = useState(true);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams();
    formData.forEach((value, key) => payload.append(key, String(value)));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim feedback");
      }

      setStatus("success");
      form.reset();
      setRating(5);
      setConsent(true);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <FeedbackSuccess onReset={() => setStatus("idle")} />;
  }

  return (
    <form
      name="feedback-hartabot"
      method="POST"
      action={formAction}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="feedback-hartabot" />
      <p className="hidden">
        <label>
          Jangan isi kolom ini <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nama" name="nama" required placeholder="Nama kamu" />
        <Field
          label="WhatsApp / Email (opsional)"
          name="kontak"
          placeholder="08xx-xxxx-xxxx atau email"
        />
      </div>

      <div>
        <p className="text-sm font-semibold text-trust-navy">
          Seberapa puas kamu dengan HartaBot sejauh ini?
        </p>
        <div className="mt-2">
          <StarPicker value={rating} onChange={setRating} />
        </div>
        <input type="hidden" name="rating" value={rating} />
      </div>

      <label className="block text-sm font-semibold text-trust-navy">
        Masukan atau saran
        <textarea
          name="pesan"
          required
          rows={4}
          placeholder="Ceritakan pengalaman, bug yang ditemui, atau fitur yang kamu harapkan..."
          className="mt-2 w-full resize-none rounded-xl border border-sage-clear bg-white px-4 py-3 text-sm font-normal text-ink-navy outline-none transition placeholder:text-ink-navy/40 focus:border-sage-active"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-ink-navy/72">
        <input
          type="checkbox"
          name="izinTestimoni"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          value={consent ? "ya" : "tidak"}
          className="mt-0.5 size-4 shrink-0 rounded border-sage-active text-sage-active focus:ring-sage-active"
        />
        Boleh menampilkan sebagian feedback ini sebagai testimoni di website (nama bisa
        disamarkan atas permintaan).
      </label>

      {status === "error" && (
        <p className="text-sm font-medium text-red-500">
          Gagal mengirim feedback. Coba lagi sebentar lagi, ya.
        </p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        <Send className="size-5" />
        {status === "loading" ? "Mengirim..." : "Kirim Masukan"}
      </Button>
    </form>
  );
}
