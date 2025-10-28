# 🎨 Hanyapı - Renk Yönetim Rehberi

Tüm site renkleri `src/app/globals.css` dosyasındaki `:root` bölümünden yönetilir.

## 📍 Renk Değişkenlerinin Konumu

Dosya: `src/app/globals.css` (Satır 4-70)

## 🎯 Ana Marka Renkleri

### Sarı (Primary)
```css
--primary: #FACC15;        /* Ana sarı (yellow-400) */
--primary-dark: #EAB308;   /* Koyu sarı - Hover (yellow-500) */
--primary-light: #FDE047;  /* Açık sarı (yellow-300) */
```

**Kullanım Alanları:**
- Logo "Han" kısmı
- Butonlar (CTA, submit)
- Vurgular, badge'ler
- Floating buttons
- Scrollbar
- İkonlar (önemli alanlarda)

### Slate Gri Tonları
```css
--slate-50: #F8FAFC;    /* Arka planlar */
--slate-600: #475569;   /* Metinler */
--slate-800: #1E293B;   /* Navbar, koyu alanlar */
--slate-900: #0F172A;   /* Footer, en koyu alanlar */
```

## 🔄 Renkleri Nasıl Değiştirirsiniz?

### Tailwind Class Kullanırken:
Mevcut Tailwind class'ları otomatik çalışır:
```tsx
className="bg-yellow-400"  // Otomatik --primary kullanır
className="text-slate-800"  // Otomatik --slate-800 kullanır
```

### CSS Custom Property Kullanırken:
```tsx
style={{ backgroundColor: 'var(--primary)' }}
style={{ color: 'var(--text-secondary)' }}
```

### Inline Styles'da:
```tsx
<div style={{ 
  backgroundColor: 'var(--bg-dark)',
  color: 'var(--text-white)',
  borderRadius: 'var(--radius-lg)'
}}>
```

## 🎨 Tema Değiştirme Örneği

### Örnek 1: Mavi Tema
```css
:root {
  --primary: #3B82F6;        /* Mavi */
  --primary-dark: #2563EB;   /* Koyu mavi */
  --primary-light: #60A5FA;  /* Açık mavi */
}
```

### Örnek 2: Yeşil Tema
```css
:root {
  --primary: #10B981;        /* Yeşil */
  --primary-dark: #059669;   /* Koyu yeşil */
  --primary-light: #34D399;  /* Açık yeşil */
}
```

### Örnek 3: Turuncu Tema
```css
:root {
  --primary: #F97316;        /* Turuncu */
  --primary-dark: #EA580C;   /* Koyu turuncu */
  --primary-light: #FB923C;  /* Açık turuncu */
}
```

## 📋 Renk Kategorileri

### 1. Marka Renkleri
- `--primary` → Ana vurgu rengi
- `--primary-dark` → Hover durumları
- `--primary-light` → Hafif vurgular

### 2. Durum Renkleri
- `--success` → Başarı mesajları, "Tamamlandı" badge
- `--warning` → Uyarılar, "Devam Ediyor" badge
- `--info` → Bilgi mesajları
- `--danger` → Hata mesajları

### 3. Sosyal Medya
- `--whatsapp` → WhatsApp butonu
- `--facebook` → Facebook ikonu
- `--instagram` → Instagram ikonu
- `--linkedin` → LinkedIn ikonu
- `--twitter-x` → X (Twitter) ikonu

### 4. Arka Planlar
- `--bg-light` → Beyaz kartlar
- `--bg-gray` → Açık gri sections
- `--bg-dark` → Koyu sections (navbar, hero)
- `--bg-darker` → Footer, en koyu alanlar

### 5. Metinler
- `--text-primary` → Ana başlıklar
- `--text-secondary` → Açıklamalar
- `--text-muted` → İkincil bilgiler
- `--text-light` → Koyu arka planda açık metinler
- `--text-white` → Beyaz metinler

### 6. Gölgeler
- `--shadow-sm` → Küçük kartlar
- `--shadow-md` → Orta kartlar
- `--shadow-lg` → Büyük kartlar
- `--shadow-xl` → Hover durumları

### 7. Border Radius
- `--radius-sm` → Küçük köşeler (6px)
- `--radius-md` → Orta köşeler (8px)
- `--radius-lg` → Büyük köşeler (12px)
- `--radius-xl` → Çok büyük köşeler (16px)
- `--radius-full` → Tam yuvarlak (butonlar, avatarlar)

### 8. Geçiş Süreleri
- `--transition-fast` → Hızlı (150ms)
- `--transition-base` → Normal (300ms)
- `--transition-slow` → Yavaş (500ms)

## 🚀 Hızlı Değişiklikler

### Tüm Siteyi Mavi Yapmak İçin:
1. `src/app/globals.css` dosyasını açın
2. Satır 10-12'deki `--primary` değerlerini değiştirin:
```css
--primary: #3B82F6;
--primary-dark: #2563EB;
--primary-light: #60A5FA;
```
3. Sayfayı yenileyin - Tüm site mavi olur!

### Koyu Temayı Değiştirmek İçin:
Satır 40-44'teki `--bg-dark` ve `--bg-darker` değerlerini değiştirin.

### Başarı/Durum Renklerini Değiştirmek İçin:
Satır 27-31'deki durum renklerini değiştirin.

## 💡 İpuçları

1. **Tutarlılık:** Tailwind class'larını kullandığınız yerde, bu değişkenler otomatik uygulanır
2. **Kolay test:** Sadece `:root` değerlerini değiştirip sayfayı yenileyin
3. **Responsive:** Renk değişiklikleri tüm cihazlarda çalışır
4. **Bakım:** Tek yerden tüm renkleri yönetebilirsiniz

## 📝 Örnek Kullanımlar

### Tailwind ile (Önerilen):
```tsx
<button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900">
  Buton
</button>
```

### CSS değişkeni ile:
```tsx
<button style={{ 
  backgroundColor: 'var(--primary)',
  color: 'var(--text-white)'
}}>
  Buton
</button>
```

### CSS dosyasında:
```css
.custom-button {
  background-color: var(--primary);
  color: var(--bg-dark);
  border-radius: var(--radius-lg);
  transition: var(--transition-base);
}

.custom-button:hover {
  background-color: var(--primary-dark);
}
```

---

**Not:** Renk değişikliklerinden sonra tarayıcınızı yenilemeniz gerekebilir (Ctrl+Shift+R veya Cmd+Shift+R).

