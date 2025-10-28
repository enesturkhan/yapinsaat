# 🧱 Hanyapı - İnşaat Firması Tanıtım Sitesi

Modern, profesyonel ve güven veren bir inşaat firması tanıtım web sitesi.

## 🚀 Özellikler

- ✅ Modern ve responsive tasarım
- ✅ Next.js 16 App Router
- ✅ Tailwind CSS ile şık tasarım
- ✅ Poppins font ailesi
- ✅ Lucide React ikonları
- ✅ SEO dostu yapı
- ✅ Tamamen Türkçe içerik

## 🎨 Renk Paleti

| Renk | Kullanım | Tailwind | HEX |
|------|-----------|----------|------|
| Lacivert | Ana renk | `slate-800` | `#1E293B` |
| Altın Sarısı | Vurgu rengi | `yellow-400` | `#FACC15` |
| Açık Gri | Arka plan | `slate-50` | `#F8FAFC` |
| Beyaz | Kart alanı | `white` | `#FFFFFF` |

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── page.tsx           # Anasayfa
│   ├── services/          # Hizmetler sayfası
│   ├── projects/          # Projeler sayfası
│   ├── about/             # Hakkımızda sayfası
│   ├── contact/           # İletişim sayfası
│   ├── layout.tsx         # Ana layout
│   └── globals.css        # Global stiller
└── components/
    ├── Navbar.tsx         # Navigasyon menüsü
    ├── Hero.tsx           # Hero bölümü
    ├── Services.tsx       # Hizmetler kartları
    ├── Projects.tsx       # Projeler grid
    ├── Testimonials.tsx   # Müşteri yorumları
    ├── AboutSection.tsx   # Hakkımızda özet
    ├── ContactForm.tsx    # İletişim formu
    └── Footer.tsx         # Footer
```

## 🛠️ Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Development sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

## 📄 Sayfalar

### Anasayfa (/)
- Hero bölümü
- Hizmetler önizleme
- Son 3 proje
- Müşteri yorumları
- Hakkımızda özet
- İletişim CTA

### Hizmetler (/services)
- Mühendislik Hizmetleri
- Mimarlık ve Tasarım
- Taahhüt ve İnşaat
- Danışmanlık
- Neden bizi seçmelisiniz bölümü

### Projeler (/projects)
- Tüm projeler grid
- Filtre (Tümü / Devam Ediyor / Tamamlandı)
- Proje detayları
- İstatistikler

### Hakkımızda (/about)
- Firma hikayesi
- Sayılarla başarılar
- Misyon, Vizyon, Değerler
- Ekip üyeleri

### İletişim (/contact)
- İletişim formu
- İletişim bilgileri kartları
- Google Maps entegrasyonu
- Sıkça sorulan sorular

## 🎯 Teknolojiler

- **Framework:** Next.js 16.0.0
- **React:** 19.2.0
- **CSS:** Tailwind CSS 4
- **Font:** Poppins (Google Fonts)
- **İkonlar:** Lucide React
- **Görseller:** Unsplash API
- **Dil:** TypeScript

## 📱 Responsive Tasarım

- **Mobil (sm):** Tek sütun layout
- **Tablet (md):** 2 sütun layout
- **Desktop (lg):** 3-4 sütun layout
- Hamburger menü (mobil)
- Sticky navbar
- Touch-friendly butonlar

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📝 Özelleştirme

### Renkleri Değiştirme
Tailwind CSS renk sınıflarını değiştirerek özelleştirebilirsiniz:
- `slate-800` → Ana renk
- `yellow-400` → Vurgu rengi
- `slate-50` → Arka plan

### İçerik Güncelleme
- Component'lerdeki data array'lerini düzenleyin
- Görselleri `public/` klasörüne ekleyin
- Meta bilgilerini her sayfada güncelleyin

## 📦 Paketler

```json
{
  "dependencies": {
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "next": "16.0.0",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4"
  }
}
```

## 🎨 Tasarım Özellikleri

- Smooth scroll
- Hover animasyonları
- Transform efektleri
- Shadow gradientleri
- Özel scrollbar
- Responsive grid system

## 📞 İletişim

- **Telefon:** +90 (212) 555 0 123
- **E-posta:** info@hanyapi.com
- **Adres:** Maslak Mahallesi, Büyükdere Caddesi No:123, Sarıyer/İstanbul

## 📄 Lisans

Bu proje öğrenme ve portfolyo amaçlı oluşturulmuştur.

---

**Geliştiren:** İbrahim Enes Türkhan  
**Tarih:** 2025  
**Versiyon:** 1.0.0
