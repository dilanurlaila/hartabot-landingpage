import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { FeedbackForm } from "@/components/feedback-form";

export const metadata: Metadata = {
  title: "Kasih Masukan - HartaBot",
  description:
    "HartaBot masih tahap uji coba. Ceritakan pengalamanmu, laporkan bug, atau usulkan fitur untuk pengembangan selanjutnya.",
};

export default function FeedbackPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-sage-clear py-14 sm:py-20">
      <div className="absolute right-[-120px] top-[-120px] size-[360px] rounded-full bg-white/55 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] size-[320px] rounded-full bg-haro-gold/25 blur-3xl" />

      <Container className="relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-navy/70 transition hover:text-trust-navy"
        >
          <ArrowLeft className="size-4" />
          Kembali ke beranda
        </Link>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <Badge className="bg-white/70">
            <Sparkles className="size-4 text-haro-gold" />
            Tahap Uji Coba
          </Badge>
          <h1 className="mt-5 text-3xl font-bold leading-[1.15] text-trust-navy sm:text-5xl">
            Kasih Masukan untuk HartaBot
          </h1>
          <p className="mt-5 text-base leading-[1.7] text-ink-navy/75 sm:text-lg">
            HartaBot masih dalam tahap uji coba. Ceritakan pengalamanmu, laporkan bug, atau
            usulkan fitur yang kamu harapkan untuk pengembangan selanjutnya.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/70 bg-white p-6 shadow-[0_20px_48px_rgba(26,54,93,0.07)] sm:p-10">
          <FeedbackForm />
        </div>
      </Container>
    </main>
  );
}
