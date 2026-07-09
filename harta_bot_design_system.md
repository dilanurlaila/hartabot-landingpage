# Harta Bot — Design System & Landing Page Blueprint

Dokumen ini berisi rancangan **Design System (Foundation)** dan **Struktur Landing Page** untuk **Harta Bot** berdasarkan kombinasi warna psikologis *zero-friction*: *Sage Green*, *Trust Navy*, dan *Haro Gold*. Dokumen ini ditujukan sebagai panduan utama bagi tim pengembang (*developer*) dan desainer UI/UX untuk membangun landing page Harta Bot.

---

## Bagian 1: Design System Foundation

### 1. Palet Warna (Color Palette)

| Kategori | Nama Warna | Kode HEX | Representasi Psikologis | Penggunaan Utama |
| :--- | :--- | :--- | :--- | :--- |
| **Primary (Base)** | Sage Clear | `#D4E9E2` | Ketenangan, anti-stres, *weightless* | Latar belakang hero section, banner sekunder, container card. |
| **Primary Accent** | Sage Active | `#88B5A5` | Pertumbuhan finansial, kemudahan | Status aktif, borders, hiasan grafis, ikon kategori. |
| **Secondary (Trust)**| Trust Navy | `#1A365D` | Keamanan tingkat tinggi, stabilitas, cerdas | Teks utama, judul (Headings), Navbar, Footer, tombol sekunder. |
| **Accent (Action)** | Haro Gold   | `#F6AD55` | Keramahan, energi sahabat, optimisme | Tombol Call-to-Action (CTA) utama, elemen visual maskot **Haro**. |
| **Neutral Light** | Pure White  | `#FFFFFF` | Kebersihan, kejelasan (*zero-friction*) | Latar belakang section konten, isi card, input fields. |
| **Neutral Dark** | Ink Navy    | `#2D3748` | Keterbacaan yang nyaman, profesional | Paragraf, sub-judul kecil, teks body di latar terang. |

### 2. Tipografi (Typography)
* **Font Family:** `Inter` atau `Poppins` (Google Fonts). Karakter font harus bersih, tanpa serif, dan memiliki keterbacaan tinggi pada perangkat mobile maupun web.
* **Heading 1 (Hero Title):** `Font-size: 40px` (Web) / `28px` (Mobile) | `Font-weight: 700 (Bold)` | Color: `Trust Navy (#1A365D)`.
* **Heading 2 (Section Title):** `Font-size: 32px` (Web) / `24px` (Mobile) | `Font-weight: 600 (Semi-Bold)` | Color: `Trust Navy (#1A365D)`.
* **Heading 3 (Card Title):** `Font-size: 20px` (Web) / `18px` (Mobile) | `Font-weight: 600 (Semi-Bold)` | Color: `Trust Navy (#1A365D)`.
* **Body Text (Paragraph):** `Font-size: 16px` | `Font-weight: 400 (Regular)` | `Line-height: 1.6` | Color: `Ink Navy (#2D3748)`.
* **Button Text:** `Font-size: 16px` | `Font-weight: 500 (Medium)` | Color: `White (#FFFFFF)`.

### 3. Komponen Dasar (Base Components)
* **Primary CTA Button:**
    * Style: Tepi tumpul sempurna (`border-radius: 9999px` atau `rounded-full`).
    * Warna: Background `Haro Gold (#F6AD55)`, Teks `White (#FFFFFF)`.
    * Efek Hover: Transisi halus ke warna agak gelap (`#E2953B`) dengan bayangan lembut (*soft drop shadow*).
* **Secondary Button:**
    * Style: Tepi tumpul, outline tipis 1.5px.
    * Warna: Border & Teks `Trust Navy (#1A365D)`, Background `Transparent`.
    * Efek Hover: Background berubah menjadi `Sage Clear (#D4E9E2)` dengan transisi cepat.
* **Content Card:**
    * Style: `Border-radius: 16px`, background `Pure White (#FFFFFF)`.
    * Shadow: `box-shadow: 0 4px 20px rgba(26, 54, 93, 0.05);` (Bayangan Navy yang sangat tipis agar melayang elegan).

---

## Bagian 2: Arsitektur & Mockup Landing Page

Sesuai dengan struktur menu pada Navbar, berikut adalah cetak biru susunan section landing page dari atas ke bawah:

### 1. Navigation Bar (Navbar)
* **Latar Belakang:** Transparan dengan efek *blur* (`backdrop-filter: blur(8px)`) di atas background Sage Clear.
* **Sisi Kiri:** Logo **Harta Bot** (Gabungan ikon robot minimalis berwarna Sage Active + teks "Harta Bot" menggunakan Trust Navy Bold).
* **Sisi Tengah (Menu Links):**
    * Fitur
    * Cara Kerja
* **Sisi Kanan:**
    * Tombol "Log In" (Teks Trust Navy, tanpa background).
    * Tombol "Mulai Gratis" (Primary CTA Button - Haro Gold).

### 2. Hero Section
* **Latar Belakang:** `Sage Clear (#D4E9E2)` penuh untuk memberikan efek psikologis pertama yang menenangkan dan bebas stres.
* **Tata Letak (Layout):** 2 Kolom (Web) / 1 Kolom Vertikal (Mobile).
* **Kolom Kiri (Pesan Utama):**
    * *Tagline Atas (Kecil):* "Your financial companion in every decision" (Warna Sage Active, Bold).
    * *Judul Utama (H1):* "Pencatatan Keuangan Otomatis. Tanpa Friction, Tanpa Pusing."
    * *Deskripsi:* "Harta Bot membantu Anda mengelola, mencatat, dan menganalisis uang Anda secara instan tanpa perlu input manual yang melelahkan. Ditemani oleh Haro, sahabat finansial cerdas Anda."
    * *Grup Tombol:* Tombol Utama "Coba Haro Gratis" (`Haro Gold`) bersandingan dengan Tombol Sekunder "Pelajari Selengkapnya" (`Trust Navy Outline`).
* **Kolom Kanan (Visual Utama):**
    * Ilustrasi digital 3D/vektor halus dari maskot **Haro** (robot bulat, dominan putih bersih, mengenakan aksesoris syal atau antena berwarna `Haro Gold`). Haro digambarkan sedang tersenyum ramah ke arah pengguna sambil menunjuk ke sebuah dashboard grafik keuangan interaktif vertikal yang tumbuh ke atas dengan warna `Sage Active`.

### 3. Fitur Section (Features)
* **Latar Belakang:** `Pure White (#FFFFFF)`.
* **Judul Section (H2):** "Fitur Pintar yang Bergerak di Balik Layar" (Diposisikan di tengah / *Center Aligned*).
* **Sub-judul:** "Didesain dengan pendekatan zero-friction agar Anda tidak merasa terbebani saat mengelola uang."
* **Susunan Konten (Grid 3 Kolom):**
    * **Card 1 — Auto-Sync Ledger:**
        * Ikon: Sinkronisasi bank/e-wallet minimalis (Warna `Trust Navy`).
        * Judul (H3): Koneksi Bank Otomatis
        * Teks: Pengeluaran dan pemasukan tercatat secara real-time tanpa ketikan manual. Benar-benar zero friction.
    * **Card 2 — AI Categorization:**
        * Ikon: Grafik kategori pintar / tag otomatis (Warna `Sage Active`).
        * Judul (H3): Kategorisasi Cerdas
        * Teks: Haro secara cerdas mempelajari pola transaksi Anda dan mengelompokkannya secara akurat tanpa salah kamar.
    * **Card 3 — Companion Advice:**
        * Ikon: Balon obrolan interaktif dengan ikon Haro kecil (Warna `Haro Gold`).
        * Judul (H3): Rekomendasi Finansial Nyata
        * Teks: Dapatkan insight keputusan keuangan langsung dari Haro kapan pun Anda membutuhkannya. Sahabat sejati di setiap keputusan keuangan.

### 4. Cara Kerja Section (How It Works)
* **Latar Belakang:** `Sage Clear (#D4E9E2)` dengan pola halus (*subtle pattern*).
* **Judul Section (H2):** "Mulai dalam 3 Langkah Mudah"
* **Alur Penggunaan (Timeline Layout / 3 Langkah Berurutan):**
    * **Langkah 1: Hubungkan Akun Aman Anda**
        * Deskripsi: Integrasikan Harta Bot dengan bank atau e-wallet pilihan Anda melalui enkripsi setingkat bank militer.
    * **Langkah 2: Biarkan Haro Bekerja**
        * Deskripsi: Maskot Haro akan mulai memantau, merapikan, dan menyusun laporan keuangan harian Anda secara otomatis tanpa intervensi manual.
    * **Langkah 3: Ambil Keputusan Terbaik**
        * Deskripsi: Terima notifikasi cerdas dan saran finansial berkala sebelum Anda mengeksekusi pengeluaran besar berikutnya.

### 5. Tombol CTA Mulai Section (Final Call to Action)
* **Latar Belakang:** `Trust Navy (#1A365D)`. Perubahan warna yang kontras dan gelap di bagian bawah ini berfungsi memberikan penegasan psikologis yang kuat bahwa sistem ini aman, kokoh, dan serius dalam melindungi data keuangan pengguna.
* **Konten (Center Aligned):**
    * *Judul (H2 - Warna Putih):* "Mulai Perjalanan Finansial Anda Tanpa Beban Sekarang."
    * *Deskripsi (Warna Sage Clear):* "Bergabunglah bersama ribuan pengguna yang telah menghemat waktu dan mengoptimalkan uang mereka bersama Haro. Gratis untuk 14 hari pertama."
    * *Tombol:* **Mulai Gratis Bersama Haro** (Ukuran besar / *Large Button*, Warna `Haro Gold`, teks `White`, dengan efek *pulse animation* halus).

### 6. Footer Section
* **Latar Belakang:** `Trust Navy (#1A365D)` dengan batas garis tipis berwarna `Sage Active` di bagian atas.
* **Struktur Kolom:**
    * **Kolom 1:** Logo Harta Bot (Versi putih), Tagline: *"Your financial companion in every decision."*, serta ikon media sosial resmi.
    * **Kolom 2 (Navigasi):** Judul kecil "Aplikasi" -> Fitur, Cara Kerja, Unduh App (iOS & Android).
    * **Kolom 3 (Edukasi & Legal):** Judul kecil "Keamanan" -> Kebijakan Privasi, Enkripsi Data, Pusat Bantuan.
* **Baris Paling Bawah (Copyright):** Teks tengah kecil: `© 2026 Harta Bot. All rights reserved. Dibuat dengan cinta untuk finansial tanpa gesekan.` (Warna teks abu-abu terang / `Sage Clear` dengan opasitas 0.7).

---
*Catatan Akhir untuk Developer: Pastikan transisi antar section memiliki padding vertikal yang cukup (`padding: 80px 0` pada desktop) agar konsep "Zero Friction" terpancar dari layout yang lega, bernapas, dan tidak padat.*
