"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 300px'den fazla scroll edildiyse scroll to top butonunu göster
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const openWhatsApp = () => {
        // WhatsApp numaranızı buraya ekleyin (ülke kodu ile birlikte, +90 yerine 90)
        const phoneNumber = "905551234567"; // Örnek: 90 555 123 45 67
        const message = "Merhaba, bilgi almak istiyorum.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            {/* WhatsApp Butonu - Sağda, yukarı ok butonunun üstünde */}
            <div className="fixed right-6 bottom-28 z-50">
                <button
                    onClick={openWhatsApp}
                    className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group cursor-pointer"
                    aria-label="WhatsApp ile iletişime geç"
                >
                    {/* Sinyal animasyonu için pulsating ring */}
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
                    {/* WhatsApp SVG İkonu */}
                    <svg
                        className="relative z-10"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>

                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        WhatsApp ile yazın
                    </span>
                </button>
            </div>

            {/* Scroll to Top Butonu - En altta, scroll edince görünür */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed right-6 bottom-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-slate-900 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group cursor-pointer"
                    aria-label="Yukarı çık"
                >
                    <ArrowUp size={24} />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Yukarı çık
                    </span>
                </button>
            )}
        </>
    );
}

