# Zepret - Photobox Online 📸

**Website App Photobox Online untuk Gen Z**

Zepret adalah website photobox interaktif berbasis web yang memungkinkan pengguna mengambil foto secara real-time melalui browser, menghiasinya dengan frame, efek, dan aksesoris sticker, lalu mengunduh hasilnya.

## 🎨 Fitur Utama

- **📷 Kamera Real-time**: WebRTC API dengan mirror mode, resolusi 720p/1080p
- **⏱️ Manajemen Sesi & Timer**: Countdown sesuai paket (5/10 menit), auto-end
- **🖼️ Katalog Kustomisasi**: Frame (Gratis/Berbayar), filter, stiker 2D, aksesoris 3D
- **💳 Payment Integration**: QRIS, e-wallet, VA (simulasi)
- **📸 Preview & Capture**: Live canvas, multi-capture, grid/strip layout generator
- **⬇️ Download & Share**: Export JPG/PNG, watermark removal post-pay

## 🎯 Target Market

- **Demografi**: Gen Z, pelajar/mahasiswa/pekerja muda (15–25 tahun)
- **Perilaku Digital**: Mobile-first, aktif di TikTok/IG, suka konten visual instan & estetik

## 💰 Paket Harga

| Paket | Harga | Durasi | Aksesoris Gratis |
|-------|-------|--------|------------------|
| 5 Menit | Rp6.000 | 5 menit | 0 |
| 10 Menit | Rp12.000 | 10 menit | 3 ⭐ |

### Add-ons
- Frame Premium: Rp1.000 – Rp3.000
- Aksesoris Stiker Tambahan: Mulai Rp1.000/item
- Efek/Filter: Gratis / Rp500–1.000

## 🛠️ Tech Stack

### Frontend
- **Framework**: React + Vite
- **Styling**: Tailwind CSS + Custom Neobrutalism
- **Animations**: Framer Motion
- **Camera**: react-webcam
- **3D**: Three.js + React Three Fiber (opsional)
- **Icons**: Lucide React

### Backend (Rekomendasi)
- **Runtime**: Node.js (Express/NestJS) atau Python (FastAPI)
- **Database**: PostgreSQL
- **Storage**: AWS S3 / Cloudinary
- **Payment**: Midtrans / Xendit API

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Warna
- **Primary Pink**: `#FF5A8F`
- **Primary Black**: `#111111`
- **Pure White**: `#FFFFFF`
- **Accent Yellow**: `#FFD93D`
- **Accent Purple**: `#B388FF`

### Gaya Visual
- **Neobrutalism**: Border tebal (3-4px), box shadow keras, tipografi bold
- **3D Elements**: Aset interaktif menggunakan WebGL/Three.js
- **Typography**: 
  - Heading: Archivo Black (Bold, uppercase)
  - Body: Inter (Clean, high legibility)

## 📱 User Flow

1. **Landing Page** → CTA "Gaya dikit Zepret!!!"
2. **Permission Request** → Izin akses kamera
3. **Terms & Conditions** → Centang persetujuan
4. **Pilih Paket** → 5 atau 10 menit
5. **Kustomisasi** → Frame, efek, stiker
6. **Bayar** → Integrasi payment gateway
7. **Sesi Foto** → Timer countdown, capture
8. **Selesai** → Download & share

## 🔒 Security & Privacy

- HTTPS required
- Session tokenization
- Auto-delete setelah 24 jam
- Rate limiting
- PDP/UU ITE compliance

## 📊 Performance Targets

- Bundle size < 2MB
- 3D assets < 500KB/model
- Load time < 3s
- Lazy loading enabled
- CDN global

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ for Gen Z**
