"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  LockKeyhole,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

const navItems = ["Beranda", "Fitur", "Cara Kerja", "Manfaat", "Tentang"];

const features = [
  {
    icon: MessageCircle,
    title: "Catat Lewat Chat",
    description:
      "Tulis pemasukan atau pengeluaran seperti ngobrol biasa. HartaBot merapikan catatanmu otomatis.",
  },
  {
    icon: Brain,
    title: "Insight Keuangan",
    description:
      "Dapatkan ringkasan pola belanja, kategori terbesar, dan sinyal keputusan yang mudah dipahami.",
  },
  {
    icon: LockKeyhole,
    title: "Aman & Privat",
    description:
      "Data finansial ditata dengan prinsip privasi, akses jelas, dan pengalaman yang terasa tenang.",
  },
  {
    icon: TrendingUp,
    title: "Bangun Kebiasaan Baik",
    description:
      "Pantau progres harian agar kebiasaan mencatat uang terasa ringan, konsisten, dan tidak menghakimi.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const assetPaths = {
  logo: "/assets/maskot-haro4.avif",
  heroMascot: "/assets/maskot-haro.avif",
  ctaMascot: "/assets/maskot-haro2.avif",
  phoneMockup: "/assets/mockup-screen.png",
  financialCard: "/assets/financial-card.avif",
  wallet: "/assets/dompet.avif",
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "relative flex size-11 items-center justify-center overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(26,54,93,0.08)]",
          light ? "bg-white/10" : "bg-white",
        )}
      >
        <Image
          src={assetPaths.logo}
          alt="Logo HartaBot"
          width={44}
          height={44}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="leading-tight">
        <p className={cn("text-lg font-bold", light ? "text-white" : "text-trust-navy")}>
          HartaBot
        </p>
        <p className={cn("text-xs font-medium", light ? "text-sage-clear/80" : "text-ink-navy/65")}>
          Financial companion
        </p>
      </div>
    </div>
  );
}

function Navbar() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(212,233,226,0)", "rgba(255,255,255,0.86)"],
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(26,54,93,0)", "0 18px 50px rgba(26,54,93,0.08)"],
  );

  return (
    <motion.header
      style={{ background, boxShadow: shadow }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/30 backdrop-blur-xl"
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Beranda" ? "#beranda" : `#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-semibold text-ink-navy/75 transition hover:text-trust-navy"
            >
              {item}
            </a>
          ))}
        </nav>
        <Button href="#coba" className="hidden px-5 sm:inline-flex">
          Coba HartaBot
        </Button>
      </Container>
    </motion.header>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
      className="relative mx-auto w-[min(78vw,340px)]"
    >
      <Image
        src={assetPaths.phoneMockup}
        alt="Mockup layar chat HartaBot di ponsel"
        width={1308}
        height={2645}
        priority
        className="h-auto w-full drop-shadow-[0_34px_80px_rgba(26,54,93,0.25)]"
      />
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-sage-clear pt-32">
      <div className="absolute right-[-120px] top-24 size-[360px] rounded-full bg-white/40 blur-3xl" />
      <div className="absolute bottom-6 left-[-90px] size-[260px] rounded-full bg-haro-gold/20 blur-3xl" />
      <Container className="grid min-h-[760px] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10"
        >
          <Badge>
            <Sparkles className="size-4 text-haro-gold" />
            Asisten Keuangan Pribadi Berbasis AI
          </Badge>
          <h1 className="mt-7 max-w-3xl text-[2.55rem] font-bold leading-[1.08] text-trust-navy sm:text-6xl lg:text-[4rem]">
            Catat. Pahami. Kendalikan Keuanganmu dengan HartaBot
          </h1>
          <p className="mt-6 max-w-xl text-base leading-[1.75] text-ink-navy/82 sm:text-lg">
            HartaBot membantu kamu mencatat transaksi, membaca pola pengeluaran, dan membangun
            keputusan finansial yang lebih tenang lewat chat sehari-hari.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#coba" className="min-w-40">
              <MessageCircle className="size-5" />
              WhatsApp
            </Button>
            <Button href="#coba" variant="secondary" className="min-w-40 bg-white/35">
              <Send className="size-5" />
              Telegram
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium text-ink-navy/70">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-5 text-sage-active" />
              Aman untuk catatan pribadi
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-5 text-sage-active" />
              Tanpa spreadsheet rumit
            </span>
          </div>
        </motion.div>
        <div className="relative min-h-[520px]">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-6 h-[430px] w-[430px] -translate-x-1/2 rounded-[38%_62%_55%_45%/50%_45%_55%_50%] bg-white/55 shadow-[inset_0_0_80px_rgba(136,181,165,0.28)]"
          />
          <PhoneMockup />
          <motion.div
            initial={{ opacity: 0, x: -28, y: 18, rotate: -8 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0], rotate: -5 }}
            transition={{ duration: 5.8, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-10 hidden w-36 overflow-hidden rounded-3xl shadow-[0_24px_52px_rgba(26,54,93,0.16)] sm:block lg:-left-4"
          >
            <Image
              src={assetPaths.financialCard}
              alt="Kartu ringkasan finansial HartaBot"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 22, y: 20, rotate: 8 }}
            animate={{ opacity: 1, x: 0, y: [0, 12, 0], rotate: 6 }}
            transition={{ duration: 6.4, delay: 0.55, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 left-2 hidden w-32 overflow-hidden rounded-3xl shadow-[0_24px_52px_rgba(26,54,93,0.14)] sm:block"
          >
            <Image
              src={assetPaths.wallet}
              alt="Ilustrasi dompet digital HartaBot"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 28, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="absolute bottom-2 right-0 w-36 sm:right-10 sm:w-44 lg:right-0"
          >
            <Image
              src={assetPaths.heroMascot}
              alt="Maskot Haro"
              width={1024}
              height={1536}
              priority
              className="h-auto w-full drop-shadow-[0_24px_34px_rgba(26,54,93,0.18)]"
            />
          </motion.div>
          <div className="absolute left-2 top-24 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-trust-navy shadow-[0_16px_36px_rgba(26,54,93,0.08)] sm:left-8 sm:top-36">
            +18% lebih sadar belanja
          </div>
        </div>
      </Container>
    </section>
  );
}

function Features() {
  return (
    <section id="fitur" className="bg-white py-20 sm:py-28">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="bg-sage-clear/55">Kenapa HartaBot?</Badge>
          <h2 className="mt-5 text-3xl font-semibold text-trust-navy sm:text-5xl">Keuangan terasa ringan saat sistemnya paham kamu.</h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-navy/72">
            Empat kemampuan inti yang dirancang untuk membuat pencatatan uang lebih natural,
            privat, dan konsisten.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-14 grid items-center gap-6 rounded-[2rem] bg-sage-clear/45 p-5 ring-1 ring-sage-clear/70 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_46px_rgba(26,54,93,0.08)]">
            <Image
              src={assetPaths.financialCard}
              alt="Financial card HartaBot"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </div>
          <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_46px_rgba(26,54,93,0.08)]">
            <Image
              src={assetPaths.wallet}
              alt="Wallet HartaBot"
              width={1536}
              height={1024}
              className="h-auto w-full"
            />
          </div>
        </motion.div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(26,54,93,0.05)] ring-1 ring-sage-clear/65 transition"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-sage-clear text-trust-navy">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-trust-navy">{feature.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-ink-navy/72">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="coba" className="bg-white pb-20 sm:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-sage-clear px-6 py-10 shadow-[0_24px_60px_rgba(26,54,93,0.08)] sm:px-10 lg:px-14 lg:py-14"
        >
          <div className="absolute right-[-80px] top-[-120px] size-80 rounded-full bg-white/50 blur-2xl" />
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_270px]">
            <div>
              <Badge className="bg-white/70">Siap mulai?</Badge>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-trust-navy sm:text-5xl">
                Mulai catat uangmu dari chat pertama hari ini.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-[1.7] text-ink-navy/75">
                Pilih kanal yang paling nyaman. Haro akan membantu merapikan catatan dan memberi
                insight tanpa proses panjang.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#" className="min-w-40">
                  <MessageCircle className="size-5" />
                  WhatsApp
                </Button>
                <Button href="#" variant="secondary" className="min-w-40 bg-white/30">
                  <Send className="size-5" />
                  Telegram
                </Button>
              </div>
            </div>
            <div className="relative mx-auto hidden w-56 lg:block">
              <Image
                src={assetPaths.ctaMascot}
                alt="Haro mengajak mulai"
                width={1024}
                height={1536}
                className="h-auto w-full drop-shadow-[0_24px_36px_rgba(26,54,93,0.14)]"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer id="tentang" className="bg-trust-navy py-10 text-center">
      <Container>
        <div className="flex flex-col items-center gap-5">
          <Logo light />
          <p className="max-w-xl text-sm leading-relaxed text-sage-clear/78">
            HartaBot membantu kamu mencatat dan memahami uang dengan pengalaman yang tenang,
            privat, dan zero-friction.
          </p>
          <p className="text-xs text-sage-clear/60">© 2026 HartaBot. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <CtaBanner />
      <Footer />
    </main>
  );
}
