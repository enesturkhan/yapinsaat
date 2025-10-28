"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const { t } = useLanguage();
    const { ref: sectionRef, animationClass: sectionAnimation } = useScrollAnimation("left");

    const testimonials = [
        {
            id: 1,
            name: t("Ahmet Yılmaz", "Ahmet Yılmaz"),
            position: t("Genel Müdür", "General Manager"),
            company: "ABC Holding",
            comment: t(
                "Hanyapı ile çalışmak harika bir deneyimdi. Projemizi zamanında ve kaliteli bir şekilde tamamladılar. Kesinlikle tavsiye ederim.",
                "Working with Hanyapı was a great experience. They completed our project on time and with quality. I definitely recommend them."
            ),
            rating: 5,
        },
        {
            id: 2,
            name: t("Ayşe Demir", "Ayşe Demir"),
            position: t("Proje Sorumlusu", "Project Manager"),
            company: "XYZ " + t("Gayrimenkul", "Real Estate"),
            comment: t(
                "Profesyonel yaklaşımları ve detaylara gösterdikleri özen sayesinde hayalimizdeki projeyi gerçekleştirdik. Teşekkürler!",
                "Thanks to their professional approach and attention to detail, we realized our dream project. Thank you!"
            ),
            rating: 5,
        },
        {
            id: 3,
            name: t("Mehmet Kaya", "Mehmet Kaya"),
            position: t("Yönetim Kurulu Başkanı", "Chairman of the Board"),
            company: "DEF " + t("İnşaat", "Construction"),
            comment: t(
                "Yılların tecrübesi ve güvenilir hizmet anlayışı ile çok başarılı bir ekip. Her aşamada yanımızda oldular.",
                "A very successful team with years of experience and reliable service approach. They were with us at every stage."
            ),
            rating: 5,
        },
        {
            id: 4,
            name: t("Zeynep Arslan", "Zeynep Arslan"),
            position: t("Mimar", "Architect"),
            company: t("Modern Mimarlık", "Modern Architecture"),
            comment: t(
                "Detaylara gösterdikleri hassasiyet ve işlerindeki titizlik gerçekten takdire şayan. Birlikte çalışmaktan mutluluk duyuyoruz.",
                "Their sensitivity to details and meticulousness in their work is truly admirable. We are happy to work together."
            ),
            rating: 5,
        },
        {
            id: 5,
            name: t("Can Öztürk", "Can Öztürk"),
            position: t("İş Geliştirme Müdürü", "Business Development Manager"),
            company: "Prime " + t("İnşaat", "Construction"),
            comment: t(
                "Projemizin her aşamasında beklentilerimizin üzerinde bir hizmet aldık. Çok memnun kaldık, herkese tavsiye ederiz.",
                "We received service beyond our expectations at every stage of our project. We are very satisfied and recommend it to everyone."
            ),
            rating: 5,
        },
        {
            id: 6,
            name: t("Elif Şahin", "Elif Şahin"),
            position: t("Satın Alma Müdürü", "Purchasing Manager"),
            company: "Mega " + t("Yapı", "Construction"),
            comment: t(
                "Kalite standartları ve iş etiği açısından örnek bir firma. Zamanında teslimat ve kusursuz işçilik için teşekkürler.",
                "An exemplary company in terms of quality standards and work ethics. Thanks for on-time delivery and flawless workmanship."
            ),
            rating: 5,
        },
        {
            id: 7,
            name: t("Burak Aydın", "Burak Aydın"),
            position: t("Genel Koordinatör", "General Coordinator"),
            company: "Star " + t("Projeler", "Projects"),
            comment: t(
                "15 yıldır sektördeyim ve Hanyapı ile çalışmak en keyifli deneyimlerimden biriydi. Profesyonellik kelimesinin karşılığı!",
                "I've been in the industry for 15 years and working with Hanyapı was one of my most enjoyable experiences. The meaning of professionalism!"
            ),
            rating: 5,
        },
        {
            id: 8,
            name: t("Deniz Yıldız", "Deniz Yıldız"),
            position: t("Proje Müdürü", "Project Manager"),
            company: "Elit " + t("Yapı", "Construction"),
            comment: t(
                "Hem kalite hem de fiyat açısından çok makul bir teklif sundular. Ekipleri çok disiplinli ve işini hakkıyla yapıyor.",
                "They offered a very reasonable proposal in terms of both quality and price. Their teams are very disciplined and do their job properly."
            ),
            rating: 5,
        },
    ];

    // Otomatik kayma
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // 5 saniyede bir kayar

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <section className="pt-20 pb-24 bg-slate-50">
            <div
                ref={sectionRef}
                className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${sectionAnimation}`}
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        {t("Müşterilerimiz Ne Diyor?", "What Our Clients Say?")}
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        {t(
                            "Memnun müşterilerimizin görüşleri bizim için en değerli ödül.",
                            "The opinions of our satisfied customers are the most valuable reward for us."
                        )}
                    </p>
                </div>

                <div className="relative">
                    {/* Sol Ok */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-slate-100 text-slate-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                        aria-label={t("Önceki yorum", "Previous review")}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Slaytlar */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow max-w-3xl mx-auto">
                                        <div className="flex justify-center mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="text-yellow-400 fill-yellow-400"
                                                    size={24}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-slate-600 text-lg mb-8 italic text-center leading-relaxed">
                                            "{testimonial.comment}"
                                        </p>
                                        <div className="border-t border-slate-200 pt-6 text-center">
                                            <p className="font-semibold text-slate-900 text-xl">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-slate-500 mt-2">
                                                {testimonial.position}, {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sağ Ok */}
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-slate-100 text-slate-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
                        aria-label={t("Sonraki yorum", "Next review")}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Nokta İndikatörleri */}
                <div className="flex justify-center mt-8 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                                ? "w-8 bg-slate-800"
                                : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                            aria-label={t(`Yorum ${index + 1}'e git`, `Go to review ${index + 1}`)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
