# 🧱 İnşaat Firması Tanıtım Sitesi - Proje Dokümantasyonu

## 🏗️ Teknolojiler
- **Framework:** Next.js 14+
- **Stil:** Tailwind CSS
- **Tipografi:** Poppins (Google Font)
- **İkonlar:** Lucide React veya Heroicons
- **Yapı:** Component bazlı, responsive ve SEO dostu

---

## 🎯 Projenin Amacı
Modern, profesyonel ve güven veren bir **inşaat firması tanıtım sitesi** oluşturmak.  
Firma projelerini, hizmetlerini, ekibini, müşteri yorumlarını ve iletişim bilgilerini kurumsal bir yapıda sergilemek.

---

## 🧩 Dizin Yapısı

src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── AboutSection.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
└── app/
├── index.tsx
├── about.tsx
├── projects.tsx
├── services.tsx
└── contact.tsx

---

## 🎨 Renk Paleti ve Stil Rehberi

| Renk | Kullanım | Tailwind Rengi | HEX |
|------|-----------|----------------|------|
| Lacivert | Ana renk | `slate-800` | `#1E293B` |
| Altın sarısı | Vurgu rengi | `yellow-400` | `#FACC15` |
| Açık gri | Arka plan | `slate-50` | `#F8FAFC` |
| Beyaz | Kart alanı | `white` | `#FFFFFF` |

### Font
- `Poppins` (400, 600, 700)
- Başlıklar kalın (`font-semibold` veya `font-bold`)
- Paragraflar açık gri tonlarında (`text-slate-600`)

---

## 🏠 Anasayfa (`pages/index.tsx`)

### Amaç
Firmanın öne çıkan kimliğini tanıtmak, hizmetlere ve projelere yönlendirme yapmak.

### Bölümler
1. **Navbar:** Logotype, menü linkleri, mobil menü.
2. **Hero Section:**
   - Büyük arka plan görseli (şantiye veya bina)
   - Slogan: “Güven İnşa Ediyoruz”
   - CTA buton: “Projelerimizi Gör”
3. **Services:** 3-4 kart (Mühendislik, Mimarlık, Taahhüt, Danışmanlık)
4. **Projects (preview):** Son 3 proje kartı + “Tüm Projeler” butonu.
5. **Testimonials:** Müşteri veya iş ortağı yorumları.
6. **About (preview):** Kısa tanıtım + “Daha Fazlası” butonu.
7. **Contact CTA:** Kısa metin + “Bize Ulaşın” butonu.
8. **Footer**

### Notlar
- Hero kısmında `bg-cover bg-center` kullanılmalı.
- CTA butonları Tailwind `bg-yellow-400 hover:bg-yellow-500` tarzında olmalı.
- Bölümler `section` etiketiyle ayrılmalı.

---

## 🧰 Hizmetler Sayfası (`pages/services.tsx`)

### Amaç
Firmanın sunduğu tüm hizmetleri detaylı şekilde açıklamak.

### İçerik
- Başlık: “Hizmetlerimiz”
- 4 kart:
  1. Mühendislik Hizmetleri
  2. Mimarlık ve Tasarım
  3. Taahhüt ve İnşaat
  4. Danışmanlık
- Her kartta:
  - İkon (Lucide React)
  - Başlık
  - Açıklama
  - Hover efekti (gölge veya border animasyonu)

### Tasarım
Grid yapı (Tailwind `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`)

---

## 🏗️ Projeler Sayfası (`pages/projects.tsx`)

### Amaç
Tamamlanan ve devam eden projeleri sergilemek.

### İçerik
- Başlık: “Projelerimiz”
- Filtre alanı (isteğe bağlı): “Tümü”, “Devam Eden”, “Tamamlanan”
- Her proje kartı:
  - Görsel
  - Proje adı
  - Kısa açıklama
  - Durum etiketi (badge: Devam Ediyor / Tamamlandı)
- Görseller için `next/image` kullanılmalı.

### Tasarım
- Responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- Hover’da hafif zoom efekti (`transform hover:scale-105 transition`)

---

## 🧑‍💼 Hakkımızda Sayfası (`pages/about.tsx`)

### Amaç
Firma geçmişini, misyonunu ve ekibini tanıtmak.

### İçerik
- Başlık: “Hakkımızda”
- Kısa metin: “X yılın deneyimiyle kaliteli projeler üretiyoruz.”
- Vizyon / Misyon bölümü
- Sayılarla başarılar (örneğin: `20+ Tamamlanan Proje`, `10+ Yıllık Deneyim`)
- Ekip fotoğrafları (isteğe bağlı)

### Tasarım
- İki sütun düzen (metin + görsel)
- Alt kısımda istatistik grid (Tailwind `grid grid-cols-2 md:grid-cols-4`)

---

## 💬 Referanslar Bölümü (`components/Testimonials.tsx`)

### Amaç
Müşteri memnuniyetini göstermek.

### İçerik
- 3–4 yorum kartı
- Her kartta:
  - Yorum metni
  - Müşteri adı
  - Şirket / pozisyon
  - Yıldız değerlendirmesi (opsiyonel)

### Tasarım
- `flex flex-col md:flex-row gap-6`
- Kart arka planı `bg-white shadow-md p-6 rounded-xl`

---

## 📞 İletişim Sayfası (`pages/contact.tsx`)

### Amaç
Ziyaretçilerin firma ile iletişime geçmesini sağlamak.

### İçerik
- Başlık: “Bize Ulaşın”
- Kısa açıklama
- **İletişim formu**:
  - Ad Soyad
  - E-posta
  - Mesaj
  - Gönder butonu
- **İletişim bilgileri:**
  - Telefon, e-posta, adres
- **Google Maps embed** (örnek: iframe veya API)

### Tasarım
- Form ve bilgiler yan yana (`grid grid-cols-1 md:grid-cols-2 gap-8`)
- Buton: `bg-yellow-400 hover:bg-yellow-500 transition`

---

## 🧭 Navbar ve Footer

### Navbar
- Logo sol tarafta (text logo veya svg)
- Menü öğeleri: Ana Sayfa | Hizmetler | Projeler | Hakkımızda | İletişim
- Mobil görünümde hamburger menü (`useState` ile toggle)
- Sticky üst menü (`fixed top-0 w-full bg-white shadow-md z-50`)

### Footer
- Firma adı + kısa açıklama
- Menü kopyası
- Sosyal medya ikonları
- Copyright alanı (`© 2025 Firma Adı`)

---

## 📱 Responsive Kurallar
- Mobil (sm): Tüm gridler tek sütun
- Tablet (md): 2 sütun
- Desktop (lg): 3–4 sütun
- Navbar hamburger menü aktif
- Hero başlık font boyutları `text-3xl` → `text-5xl`

---

## ⚡ Geliştirme Yol Haritası
1. ✅ Next.js + Tailwind kurulumu  
2. 🧩 Component yapısını oluştur  
3. 🎨 Renk, font, global stil ekle  
4. 🏠 `index.tsx` (Anasayfa) geliştir  
5. 🧰 `services.tsx` ve `projects.tsx` oluştur  
6. 🧑‍💼 `about.tsx` + `contact.tsx` sayfalarını tamamla  
7. 📱 Responsive testleri yap  
8. 🚀 Deploy (Vercel önerilir)

---

## 💡 Ekstra Öneriler
- `next-seo` paketiyle meta başlık ve açıklamaları ekle.
- `framer-motion` ile animasyonlar (fade-in, slide-up)
- Görselleri optimize et (`next/image`)
- `dark mode` istenirse Tailwind `dark:` sınıflarıyla kolayca eklenebilir.

---

Hazırlayan: **Enes Türkhan 
🧱 Profesyonel, modern ve güven veren bir inşaat firması web sitesi rehberi.