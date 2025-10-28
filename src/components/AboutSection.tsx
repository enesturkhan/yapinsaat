"use client";

import Link from "next/link";
import { Building, Users, Award, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function CounterAnimation({ targetNumber, suffix }: { targetNumber: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Element %50 görününce başlar
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const duration = 2000; // 2 saniye

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOut * targetNumber);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, targetNumber]);

    return (
        <div ref={elementRef} className="text-3xl font-bold text-slate-900 mb-2">
            {count}{suffix}
        </div>
    );
}

export default function AboutSection() {
    const { t } = useLanguage();
    const { ref: textRef, animationClass: textAnimation } = useScrollAnimation("left");
    const { ref: statsRef, animationClass: statsAnimation } = useScrollAnimation("right");

    const stats = [
        {
            icon: Building,
            value: "20+",
            label: t("Tamamlanan Proje", "Completed Projects"),
            targetNumber: 20,
            suffix: "+",
        },
        {
            icon: Users,
            value: "50+",
            label: t("Uzman Ekip", "Expert Team"),
            targetNumber: 50,
            suffix: "+",
        },
        {
            icon: Award,
            value: "10+",
            label: t("Yıllık Deneyim", "Years of Experience"),
            targetNumber: 10,
            suffix: "+",
        },
        {
            icon: CheckCircle,
            value: "100%",
            label: t("Müşteri Memnuniyeti", "Customer Satisfaction"),
            targetNumber: 100,
            suffix: "%",
        },
    ];

    return (
        <section className="pt-12 pb-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Sol - Metin */}
                    <div
                        ref={textRef}
                        className={`transition-all duration-1000 ease-out ${textAnimation}`}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                            {t("Hakkımızda", "About Us")}
                        </h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            {t(
                                "Yılların deneyimi ve uzmanlığıyla inşaat sektörünün öncü firmalarından biri olmaktan gurur duyuyoruz. Kaliteyi ve güveni her zaman ön planda tutarak, modern yapılar inşa ediyor ve geleceği şekillendiriyoruz.",
                                "We are proud to be one of the leading companies in the construction industry with years of experience and expertise. We build modern structures and shape the future by always prioritizing quality and trust."
                            )}
                        </p>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            {t(
                                "Müşteri memnuniyeti odaklı yaklaşımımız, nitelikli ekibimiz ve yenilikçi çözümlerimizle sektörde fark yaratmaya devam ediyoruz.",
                                "We continue to make a difference in the industry with our customer satisfaction-oriented approach, qualified team and innovative solutions."
                            )}
                        </p>
                        <Link
                            href="/about"
                            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            {t("Daha Fazlasını Öğren", "Learn More")}
                        </Link>
                    </div>

                    {/* Sağ - İstatistikler */}
                    <div
                        ref={statsRef}
                        className={`grid grid-cols-2 gap-6 transition-all duration-1000 ease-out ${statsAnimation}`}
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-slate-50 p-6 rounded-xl text-center hover:bg-slate-100 transition-colors"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                                            <Icon className="text-slate-900" size={32} />
                                        </div>
                                    </div>
                                    <CounterAnimation
                                        targetNumber={stat.targetNumber}
                                        suffix={stat.suffix}
                                    />
                                    <p className="text-slate-600 font-medium">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

