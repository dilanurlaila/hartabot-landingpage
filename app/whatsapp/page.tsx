import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BellRing, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

const telegramBotUrl = "https://t.me/hartabot_bot";

export default function WhatsAppComingSoonPage() {
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
              <BellRing className="size-4 text-haro-gold" />
              WhatsApp sedang disiapkan
            </div>

            <h1 className="mt-7 max-w-2xl text-[2.45rem] font-bold leading-[1.08] text-trust-navy sm:text-6xl lg:text-[4.15rem]">
              Bot WhatsApp HartaBot lagi tahap pengembangan.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.8] text-ink-navy/76 sm:text-lg">
              Tim HartaBot sedang menyiapkan pengalaman WhatsApp supaya pencatatan transaksi tetap
              rapi, cepat, dan nyaman dipakai setiap hari. Untuk sekarang, kamu bisa coba bot
              Telegram yang sudah tersedia.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={telegramBotUrl} className="min-w-44">
                <Send className="size-5" />
                Coba Telegram
              </Button>
              <Button href="/" variant="secondary" className="min-w-44 bg-white/35">
                <MessageCircle className="size-5" />
                Lihat HartaBot
              </Button>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-[min(78vw,430px)]">
              <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-trust-navy/12 blur-2xl" />
              <Image
                src="/assets/haro-comingsoon.png"
                alt="Maskot Haro membawa pemberitahuan WhatsApp segera hadir"
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
