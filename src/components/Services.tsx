"use client";

import { Hammer, Ruler, Building2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Services() {
    const { t } = useLanguage();
    const { ref: titleRef, animationClass: titleAnimation } = useScrollAnimation("left");
    const { ref: cardsRef, animationClass: cardsAnimation } = useScrollAnimation("right");

    const services = [
        {
            icon: Hammer,
            title: t("Mühendislik Hizmetleri", "Engineering Services"),
            description: t(
                "Yapısal analiz ve hesaplamalardan proje uygulamasına kadar her aşamada profesyonel mühendislik desteği.",
                "Professional engineering support at every stage, from structural analysis and calculations to project implementation."
            ),
        },
        {
            icon: Ruler,
            title: t("Mimarlık ve Tasarım", "Architecture and Design"),
            description: t(
                "Modern ve fonksiyonel mimari tasarımlar ile hayalinizdeki projeyi gerçeğe dönüştürüyoruz.",
                "Turning your dream project into reality with modern and functional architectural designs."
            ),
        },
        {
            icon: Building2,
            title: t("Taahhüt ve İnşaat", "Contracting and Construction"),
            description: t(
                "A'dan Z'ye tüm inşaat süreçlerini kalite standartlarında tamamlıyoruz.",
                "Completing all construction processes from A to Z with quality standards."
            ),
        },
        {
            icon: TrendingUp,
            title: t("Danışmanlık", "Consultancy"),
            description: t(
                "Yatırım danışmanlığından proje yönetimine kadar geniş kapsamlı danışmanlık hizmetleri.",
                "Comprehensive consultancy services from investment consulting to project management."
            ),
        },
    ];

    return (
        <section className="pt-12 pb-12 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-1000 ease-out ${titleAnimation}`}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        {t("Hizmetlerimiz", "Our Services")}
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        {t(
                            "Profesyonel ekibimizle her türlü inşaat projenizde yanınızdayız.",
                            "We are with you in all kinds of construction projects with our professional team."
                        )}
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ease-out ${cardsAnimation}`}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
                            >
                                <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="text-slate-900" size={28} />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
