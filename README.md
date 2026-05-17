# 🌸 Portfolio Website — Pastel React

Portfolio pribadi dengan tema pastel, animasi halus, dan dual focus: App/Web Development & Graphic Design.

## 🎨 Warna Palette

| Nama       | Kode     | Digunakan untuk          |
|------------|----------|--------------------------|
| Rose       | #f9d5e5  | Background utama         |
| Peach      | #fde8d8  | Gradient & accent        |
| Mint       | #d4f0e8  | Dev skills & cards       |
| Lavender   | #e8dff5  | Design skills & cards    |
| Sky        | #d5eaf9  | Tools & highlights       |
| Butter     | #fdf3d4  | Badges & float elements  |
| Rose Deep  | #e8739a  | CTA button & accent      |
| Mint Deep  | #5bbfa0  | Design accent            |
| Lav Deep   | #9b7ecb  | Lavender accent          |

## 🚀 Cara Jalankan Lokal

```bash
# Install dependencies
npm install

# Jalankan dev server
npm start

# Build untuk production
npm run build
```

## ☁️ Deploy ke Vercel (GRATIS)

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → Sign up/Login dengan GitHub
3. Klik **New Project** → Import repo kamu
4. Vercel otomatis deteksi React → klik **Deploy**
5. Selesai! Dapat URL gratis `.vercel.app`

## ✏️ Cara Customize

### Ganti Nama & Info
- Buka `src/components/Hero.jsx` → ubah `"Your Name"` 
- Buka `src/components/About.jsx` → edit teks & stats
- Buka `src/components/Footer.jsx` → ubah nama di copyright

### Tambah/Edit Project
- Buka `src/components/Projects.jsx`
- Edit array `devProjects` untuk project App/Web
- Edit array `designProjects` untuk project Design

### Ganti Kontak
- Buka `src/components/Contact.jsx`
- Edit array `contacts` dengan link sosmed kamu

### Ganti Foto
- Tambah gambar ke `public/` folder
- Di `About.jsx`, ganti emoji 🌸 dengan `<img src="/foto.jpg" ... />`

## 📦 Struktur File

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      ← Navigasi + hamburger mobile
│   │   ├── Hero.jsx        ← Landing section + animasi teks
│   │   ├── Marquee.jsx     ← Ticker skills berjalan
│   │   ├── About.jsx       ← Tentang + stats
│   │   ├── Projects.jsx    ← Tab Dev & Design projects
│   │   ├── Skills.jsx      ← Progress bar + tools
│   │   ├── Contact.jsx     ← Form + social links
│   │   └── Footer.jsx      ← Footer
│   ├── App.jsx             ← Root + cursor + scroll-to-top
│   ├── index.css           ← Global styles + animasi
│   └── index.js            ← Entry point
├── vercel.json             ← Konfigurasi Vercel
└── package.json
```

## ✨ Fitur

- ✅ Responsive (mobile-friendly)
- ✅ Animasi scroll reveal di setiap section
- ✅ Custom cursor follower
- ✅ Animated role text di Hero
- ✅ Marquee ticker berjalan
- ✅ Tab Dev vs Design di Projects
- ✅ Skill progress bar animasi
- ✅ Hover effects di semua card
- ✅ Scroll-to-top button
- ✅ Blob background animasi
- ✅ Pastel color scheme konsisten
- ✅ Siap deploy ke Vercel gratis
