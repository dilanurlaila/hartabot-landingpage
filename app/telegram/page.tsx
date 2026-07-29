"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

const telegramDeepLink = "tg://resolve?domain=hartabot_bot";
const telegramWebFallback = "https://t.me/hartabot_bot";
const telegramMirrorFallback = "https://telegram.dog/hartabot_bot";

export default function TelegramRedirectPage() {
  useEffect(() => {
    window.location.replace(telegramDeepLink);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-sage-clear text-trust-navy">
      <section className="relative flex min-h-screen items-center py-10 sm:py-14">
        <div className="absolute right-[-120px] top-[-120px] size-[360px] rounded-full bg-white/55 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-120px] size-[320px] rounded-full bg-haro-gold/25 blur-3xl" />

        <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="order-2 lg:order-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-navy/70 transition hover:text-trust-navy"
            >
              <ArrowLeft className="size-4" />
              Kembali ke beranda
            </Link>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-ink-navy/72 shadow-[0_14px_32px_rgba(26,54,93,0.06)]">
              <Send className="size-4 text-haro-gold" />
              Membuka Telegram...
            </div>

            <h1 className="mt-7 max-w-2xl text-[2.15rem] font-bold leading-[1.12] text-trust-navy sm:text-5xl">
              Lanjut ke @hartabot_bot di Telegram.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.8] text-ink-navy/76 sm:text-lg">
              Kalau aplikasi Telegram tidak terbuka otomatis, coba salah satu opsi di bawah ini.
              Beberapa provider internet di Indonesia sempat memblokir akses langsung ke domain{" "}
              <span className="font-semibold">t.me</span>, jadi kami sediakan beberapa jalur.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={telegramDeepLink} className="min-w-52">
                <Send className="size-5" />
                Buka Aplikasi Telegram
              </Button>
              <Button href={telegramWebFallback} variant="secondary" className="min-w-52 bg-white/35">
                <ExternalLink className="size-5" />
                Buka lewat t.me
              </Button>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={telegramMirrorFallback}
                className="text-sm font-semibold text-trust-navy underline decoration-haro-gold/60 underline-offset-4 transition hover:text-haro-gold"
              >
                Domain alternatif tidak terbuka? Coba telegram.dog/hartabot_bot
              </a>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white/55 p-4 text-sm leading-[1.7] text-ink-navy/72 shadow-[0_14px_32px_rgba(26,54,93,0.05)]">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-sage-active" />
              <p>
                Masih diblokir? Buka aplikasi Telegram secara manual lalu cari{" "}
                <span className="font-semibold text-trust-navy">@hartabot_bot</span>. Kami
                menjaga link ini di domain kami sendiri supaya bisa diperbarui kapan saja tanpa
                mengubah tombol yang kamu klik.
              </p>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-[min(70vw,380px)]">
              <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-trust-navy/12 blur-2xl" />
              <Image
                src="/assets/haro-comingsoon.png"
                alt="Maskot Haro mengarahkan ke Telegram"
                width={1024}
                height={1536}
                priority
                className="relative h-auto w-full drop-shadow-[0_34px_80px_rgba(26,54,93,0.22)]"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
