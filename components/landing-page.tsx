"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart3,
  BellRing,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Instagram,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareHeart,
  Phone,
  Quote,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Youtube,
  X,
} from "lucide-react";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { FeedbackForm } from "@/components/feedback-form";
import { cn } from "@/lib/utils";

const navItems = ["Beranda", "Fitur", "Cara Kerja", "Testimoni", "Feedback", "Tentang"];

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
  logoLight: "/assets/hartabot-logo-light.svg",
  heroMascot: "/assets/maskot-haro.avif",
  phoneMockup: "/assets/mockup-screen2.avif",
  financialCard: "/assets/financial-card.avif",
  wallet: "/assets/dompet.avif",
};

const telegramBotUrl = "/telegram";
const whatsappComingSoonUrl = "/whatsapp";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Feedback", href: "#feedback" },
  { label: "Tentang", href: "#tentang" },
];

// CONTOH/PLACEHOLDER — ganti dengan kutipan asli dari feedback pengguna beta
// yang sudah memberi izin ditampilkan (lihat kolom izin di form feedback).
const testimonials = [
  {
    name: "Peserta Uji Coba #1",
    context: "Pengguna WhatsApp",
    quote:
      "Enak banget, tinggal chat langsung kecatat rapi. Gak perlu buka aplikasi lain buat nyatet pengeluaran.",
    rating: 5,
  },
  {
    name: "Peserta Uji Coba #2",
    context: "Pengguna Telegram",
    quote:
      "Fitur laporannya ngebantu aku lihat pengeluaran bulanan tanpa ribet bikin spreadsheet sendiri.",
    rating: 5,
  },
  {
    name: "Peserta Uji Coba #3",
    context: "Pengguna WhatsApp",
    quote:
      "Awalnya coba iseng pas masih tahap uji coba, ternyata beneran kepake buat ngerem jajan kopi tiap hari.",
    rating: 4,
  },
];

const footerContact = [
  { icon: Phone, label: "WhatsApp: +62 898-4332-174" },
  { icon: Send, label: "Telegram: @Hartabot_bot" },
  { icon: Mail, label: "admin@hartabot.id" },
  { icon: MapPin, label: "Jambi, Indonesia" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram" },
  { icon: X, label: "X" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const workflowSteps = [
  {
    icon: MessageCircle,
    title: "Sapa Haro & Mulai Transaksi",
    description: "Ketik pengeluaran secara natural di WhatsApp atau Telegram.",
    example: "sarapan pagi 15rb",
    action: "Catat transaksi",
  },
  {
    icon: ClipboardCheck,
    title: "Pencatatan Otomatis & Cerdas",
    description: "AI membaca nominal, kategori, dan waktu transaksi, lalu memberi konfirmasi.",
    example: "beli bensin pertamax 50rb",
    action: "Analisis otomatis",
  },
  {
    icon: BarChart3,
    title: "Akses Dashboard Privat Aman",
    description: "Minta laporan untuk membuka visualisasi keuangan yang hanya bisa kamu akses.",
    example: "minta laporan",
    action: "Minta laporan",
  },
  {
    icon: BellRing,
    title: "Notifikasi Batas Pengeluaran",
    description: "Haro memberi pengingat ketika pola belanja mulai melewati batas harian.",
    example: "beli kopi es kelima hari ini 25k",
    action: "Cek peringatan",
  },
];

const workflowReplies = [
  {
    title: "Berhasil dicatat",
    body: "Kategori: Makanan & Minuman. Nominal: Rp15.000. Dimasukkan ke neraca keuanganmu hari ini.",
  },
  {
    title: "Analisis AI otomatis",
    body: "Transaksi bensin diproses sebagai Transportasi senilai Rp50.000. Penggunaan bensin bulan ini masih dalam batas wajar.",
  },
  {
    title: "Dashboard privat siap",
    body: "Link aman laporan real-time sudah dibuat. Akses dilindungi identitas chat dan token unik HartaBot.",
  },
  {
    title: "Peringatan limit harian",
    body: "Kategori Kopi & Jajan sudah 5 kali hari ini. Sisa ruang belanja harianmu tinggal Rp20.000.",
    warning: true,
  },
];

type ChatMessage = {
  id: number;
  from: "user" | "bot";
  title?: string;
  body: string;
  warning?: boolean;
};

function Logo({
  size = "nav",
}: {
  size?: "nav" | "footer";
}) {
  return (
    <div
      className={cn(
        "relative shrink-0",
        size === "footer"
          ? "h-[64px] w-[min(78vw,320px)]"
          : "h-[52px] w-[min(54vw,260px)]",
      )}
    >
      <Image
        src={assetPaths.logoLight}
        alt="HartaBot"
        width={1615}
        height={323}
        className="h-full w-full object-contain object-left"
        priority={size === "nav"}
      />
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
            <Button href={whatsappComingSoonUrl} className="min-w-40">
              <MessageCircle className="size-5" />
              WhatsApp
            </Button>
            <Button href={telegramBotUrl} variant="secondary" className="min-w-40 bg-white/35">
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
              className="h-auto w-full -scale-x-100 drop-shadow-[0_24px_34px_rgba(26,54,93,0.18)]"
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
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
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
        </motion.div>
      </Container>
    </section>
  );
}

function CaraKerja() {
  const [activeStep, setActiveStep] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messageId = useRef(0);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const runSimulation = (index: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const step = workflowSteps[index];
    const reply = workflowReplies[index];

    setActiveStep(index);
    setIsTyping(true);
    setMessages((current) => [
      ...current,
      {
        id: ++messageId.current,
        from: "user",
        body: step.example,
      },
    ]);

    timerRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: ++messageId.current,
          from: "bot",
          title: reply.title,
          body: reply.body,
          warning: reply.warning,
        },
      ]);
      setIsTyping(false);
    }, 850);
  };

  const resetChat = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setMessages([]);
    setIsTyping(false);
    setActiveStep(0);
  };

  return (
    <section id="cara-kerja" className="bg-sage-clear/55 py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge className="bg-white/70">
            <Sparkles className="size-4 text-haro-gold" />
            Alur Interaksi HartaBot
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold text-trust-navy sm:text-4xl lg:text-[2.75rem]">
            Semudah kirim pesan ke teman.
          </h2>
          <p className="mt-4 text-sm leading-[1.7] text-ink-navy/72 sm:text-base">
            Pilih salah satu langkah untuk melihat bagaimana Haro mencatat transaksi,
            memberi insight, dan menjaga kebiasaan finansialmu tetap terkendali.
          </p>
        </motion.div>

        <div className="mt-11 grid items-center gap-8 lg:grid-cols-[1fr_0.86fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative space-y-3 before:absolute before:bottom-5 before:left-6 before:top-5 before:w-px before:bg-sage-active/30"
          >
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => runSimulation(index)}
                  className={cn(
                    "group relative w-full rounded-2xl border p-4 pl-14 text-left transition",
                    isActive
                      ? "border-sage-active/45 bg-white shadow-[0_18px_42px_rgba(26,54,93,0.08)]"
                      : "border-white/70 bg-white/58 hover:border-sage-active/30 hover:bg-white hover:shadow-[0_12px_28px_rgba(26,54,93,0.06)]",
                  )}
                >
                  <div
                    className={cn(
                      "absolute left-3 top-4 flex size-8 items-center justify-center rounded-xl border-2 text-xs font-bold transition",
                      isActive
                        ? "border-sage-active bg-sage-active text-white"
                        : "border-sage-clear bg-white text-trust-navy group-hover:border-sage-active",
                    )}
                  >
                    {index + 1}
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon className={cn("mt-1 size-4 shrink-0", isActive ? "text-sage-active" : "text-trust-navy/70")} />
                    <div>
                      <h3 className="text-base font-semibold text-trust-navy">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-[1.6] text-ink-navy/68 sm:text-sm">
                        {step.description} Contoh:{" "}
                        <span className="rounded-md bg-sage-clear/75 px-1.5 py-0.5 font-medium text-trust-navy">
                          {step.example}
                        </span>
                      </p>
                      <span className="mt-2 inline-flex text-xs font-semibold text-sage-active opacity-70 transition group-hover:opacity-100">
                        Simulasikan langkah ini
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="mx-auto w-full max-w-[345px]"
          >
            <div className="rounded-[2.15rem] bg-trust-navy p-2.5 shadow-[0_28px_64px_rgba(26,54,93,0.18)]">
              <div className="relative flex h-[485px] flex-col overflow-hidden rounded-[1.75rem] border border-trust-navy/15 bg-[#f8faf9]">
                <div className="absolute left-1/2 top-3 z-10 h-4 w-28 -translate-x-1/2 rounded-full bg-trust-navy" />
                <div className="flex items-center gap-3 border-b border-sage-clear bg-white px-4 pb-3 pt-8">
                  <div className="relative flex size-9 items-center justify-center rounded-full bg-sage-clear text-trust-navy">
                    <Image
                      src={assetPaths.logoLight}
                      alt=""
                      width={80}
                      height={80}
                      className="h-6 w-6 object-contain"
                    />
                    <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-sage-active ring-2 ring-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-trust-navy">
                      Haro
                      <span className="rounded-full bg-haro-gold/15 px-2 py-0.5 text-[10px] font-bold text-trust-navy">
                        AI
                      </span>
                    </h3>
                    <p className="text-xs text-ink-navy/50">Sedang aktif menjaga dompetmu</p>
                  </div>
                  <button
                    type="button"
                    onClick={resetChat}
                    aria-label="Reset simulasi chat"
                    className="rounded-lg p-2 text-ink-navy/45 transition hover:bg-sage-clear hover:text-trust-navy"
                  >
                    <RefreshCw className="size-4" />
                  </button>
                </div>

                <div ref={chatRef} className="flex-1 space-y-2.5 overflow-y-auto p-3.5">
                  <div className="max-w-[86%] rounded-2xl rounded-tl-none border border-sage-clear bg-white p-3 text-xs leading-relaxed text-ink-navy shadow-sm">
                    <p className="mb-1 text-[10px] font-bold text-sage-active">Haro</p>
                    Halo! Pilih simulasi di bawah atau klik langkah di sebelah kiri untuk melihat cara
                    HartaBot bekerja.
                  </div>

                  {messages.map((message) =>
                    message.from === "user" ? (
                      <div key={message.id} className="ml-auto max-w-[84%] rounded-2xl rounded-tr-none bg-trust-navy px-3.5 py-2.5 text-xs font-medium text-white shadow-sm">
                        {message.body}
                      </div>
                    ) : (
                      <div
                        key={message.id}
                        className={cn(
                          "max-w-[88%] rounded-2xl rounded-tl-none border p-3 text-xs leading-relaxed shadow-sm",
                          message.warning
                            ? "border-red-200 bg-red-50 text-ink-navy"
                            : "border-sage-clear bg-white text-ink-navy",
                        )}
                      >
                        <p className={cn("mb-1 text-[10px] font-bold", message.warning ? "text-red-500" : "text-sage-active")}>
                          {message.title}
                        </p>
                        {message.body}
                      </div>
                    ),
                  )}

                  {isTyping && (
                    <div className="flex max-w-[84%] items-center gap-1 rounded-2xl rounded-tl-none border border-sage-clear bg-white px-4 py-3 shadow-sm">
                      <span className="size-1.5 animate-bounce rounded-full bg-sage-active" />
                      <span className="size-1.5 animate-bounce rounded-full bg-sage-active [animation-delay:120ms]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-sage-active [animation-delay:240ms]" />
                    </div>
                  )}
                </div>

                <div className="border-t border-sage-clear bg-white p-3">
                  <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-ink-navy/45">
                    Pilih simulasi chat
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {workflowSteps.map((step, index) => (
                      <button
                        key={step.action}
                        type="button"
                        onClick={() => runSimulation(index)}
                        className="truncate rounded-xl border border-sage-clear bg-sage-clear/35 px-3 py-2 text-left text-[11px] font-semibold text-trust-navy transition hover:border-sage-active/40 hover:bg-sage-clear"
                      >
                        {step.action}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-sage-clear pt-3 text-[11px] text-ink-navy/48">
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="size-3.5 text-sage-active" />
                      WhatsApp & Telegram
                    </span>
                    <span className="font-semibold text-sage-active">Aktif</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimoni" className="bg-white py-20 sm:py-28">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="bg-sage-clear/55">
            <MessageSquareHeart className="size-4 text-haro-gold" />
            Kata Peserta Uji Coba
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold text-trust-navy sm:text-5xl">
            Testimoni dari yang sudah mencoba HartaBot.
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-navy/72">
            HartaBot masih tahap uji coba. Testimoni di bawah dipilih dari feedback pengguna
            beta yang mengizinkan tanggapannya ditampilkan.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-ink-navy/45">
            Contoh tampilan — akan diperbarui dengan feedback asli dari form di bawah
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex flex-col rounded-2xl border border-sage-clear/70 bg-sage-clear/20 p-6 shadow-[0_4px_20px_rgba(26,54,93,0.05)]"
            >
              <Quote className="size-7 text-haro-gold" />
              <p className="mt-4 flex-1 text-sm leading-[1.75] text-ink-navy/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={cn(
                      "size-4",
                      starIndex < testimonial.rating
                        ? "fill-haro-gold text-haro-gold"
                        : "text-sage-active/30",
                    )}
                  />
                ))}
              </div>
              <div className="mt-4 border-t border-sage-clear pt-4">
                <p className="text-sm font-semibold text-trust-navy">{testimonial.name}</p>
                <p className="text-xs text-ink-navy/60">{testimonial.context}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function Feedback() {
  return (
    <section id="feedback" className="bg-sage-clear/55 py-20 sm:py-28">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="bg-white/70">
            <Sparkles className="size-4 text-haro-gold" />
            Tahap Uji Coba
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold text-trust-navy sm:text-5xl">
            Bantu HartaBot Jadi Lebih Baik
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-navy/72">
            HartaBot masih dalam tahap uji coba. Ceritakan pengalamanmu, laporkan bug, atau
            usulkan fitur yang kamu harapkan untuk pengembangan selanjutnya.
          </p>
          <p className="mt-4 text-sm text-ink-navy/60">
            Mau share link form-nya langsung ke pengguna? Buka{" "}
            <a
              href="/feedback"
              className="font-semibold text-sage-active underline underline-offset-4 hover:text-trust-navy"
            >
              halaman feedback terpisah
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-12 max-w-2xl rounded-3xl border border-white/70 bg-white p-6 shadow-[0_20px_48px_rgba(26,54,93,0.07)] sm:p-10"
        >
          <FeedbackForm formAction="/#feedback" />
        </motion.div>
      </Container>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="coba" className="bg-white pt-14 pb-20 sm:pt-16 sm:pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-[1040px] overflow-hidden rounded-[1.75rem] bg-sage-clear px-6 py-8 shadow-[0_20px_48px_rgba(26,54,93,0.07)] sm:px-9 lg:px-12 lg:py-10"
        >
          <div className="absolute right-[-70px] top-[-110px] size-72 rounded-full bg-white/50 blur-2xl" />
          <div className="relative z-10 grid items-center gap-7 lg:grid-cols-[1fr_340px]">
            <div>
              <Badge className="bg-white/70">Siap mulai?</Badge>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-trust-navy sm:text-4xl lg:text-[2.65rem]">
                Siap kelola keuangan dengan cara yang lebih mudah?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-[1.7] text-ink-navy/75 sm:text-base">
                Pilih kanal yang paling nyaman. Haro akan membantu merapikan catatan dan memberi
                insight tanpa proses panjang.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappComingSoonUrl} className="min-w-36 px-5 text-sm">
                  <MessageCircle className="size-5" />
                  WhatsApp
                </Button>
                <Button
                  href={telegramBotUrl}
                  variant="secondary"
                  className="min-w-36 bg-white/30 px-5 text-sm"
                >
                  <Send className="size-5" />
                  Telegram
                </Button>
              </div>
            </div>
            <div className="relative mx-auto min-h-[205px] w-full max-w-[340px] sm:min-h-[230px]">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-4 w-[76%]"
              >
                <Image
                  src={assetPaths.financialCard}
                  alt="Kartu laporan finansial HartaBot"
                  width={1536}
                  height={1024}
                  className="h-auto w-full drop-shadow-[0_22px_38px_rgba(26,54,93,0.12)]"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [4, 1, 4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-[48%]"
              >
                <Image
                  src={assetPaths.wallet}
                  alt="Dompet digital HartaBot"
                  width={1536}
                  height={1024}
                  className="h-auto w-full drop-shadow-[0_22px_34px_rgba(26,54,93,0.12)]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer id="tentang" className="bg-sage-clear text-trust-navy">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-[1.35fr_0.8fr_1.1fr_1.35fr] lg:gap-14">
          <div>
            <Logo size="footer" />
            <p className="mt-7 max-w-sm text-base leading-[1.8] text-ink-navy/72">
              Asisten keuangan pribadi berbasis AI yang membantu kamu mencatat, memahami, dan
              mengendalikan keuangan cukup lewat chat sehari-hari.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    aria-label={item.label}
                    className="flex size-11 items-center justify-center rounded-xl bg-white/45 text-trust-navy transition hover:bg-white/75"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-trust-navy">
              Navigasi
            </h2>
            <nav className="mt-6 flex flex-col gap-4" aria-label="Navigasi footer">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-ink-navy/68 transition hover:text-trust-navy"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-trust-navy">
              Kontak
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {footerContact.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 text-base text-ink-navy/68">
                    <Icon className="size-5 shrink-0 text-sage-active" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-trust-navy">
              Dapatkan Update
            </h2>
            <p className="mt-6 max-w-sm text-base leading-[1.7] text-ink-navy/68">
              Tips keuangan & fitur baru langsung ke emailmu.
            </p>
            <form className="mt-7 flex overflow-hidden rounded-xl border border-white/55 bg-white/45 p-1 shadow-[0_16px_34px_rgba(26,54,93,0.06)]">
              <input
                type="email"
                aria-label="Email kamu"
                placeholder="Email kamu"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-trust-navy outline-none placeholder:text-ink-navy/45"
              />
              <button
                type="submit"
                className="rounded-lg bg-haro-gold px-5 py-3 text-sm font-bold text-trust-navy transition hover:bg-haro-gold-hover hover:text-white"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-trust-navy/10 py-7 text-sm text-ink-navy/62 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 HartaBot. Seluruh hak cipta dilindungi.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#" className="transition hover:text-trust-navy">
              Syarat & Ketentuan
            </a>
            <a href="#" className="transition hover:text-trust-navy">
              Kebijakan Privasi
            </a>
            <a href="#" className="transition hover:text-trust-navy">
              Keamanan Data
            </a>
          </div>
        </div>

        <div className="-mx-6 flex items-center justify-center gap-3 bg-white/35 px-6 py-5 text-center text-sm text-ink-navy/62 sm:-mx-8 lg:-mx-10">
          <ShieldCheck className="size-5 shrink-0 text-haro-gold" />
          <p>Dirancang untuk mendukung literasi dan ketahanan keuangan masyarakat Indonesia.</p>
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
      <CaraKerja />
      <Testimonials />
      <Feedback />
      <CtaBanner />
      <Footer />
    </main>
  );
}
