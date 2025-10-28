"use client";

import Image from "next/image";
import { Building, Users, Award, Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";

const stats = [
    {
        icon: Building,
        value: 20,
        suffix: "+",
        label: "Tamamlanan Proje",
    },
    {
        icon: Users,
        value: 50,
        suffix: "+",
        label: "Uzman Ekip Üyesi",
    },
    {
        icon: Award,
        value: 10,
        suffix: "+",
        label: "Yıllık Deneyim",
    },
    {
        icon: CheckCircle2,
        value: 100,
        suffix: "%",
        label: "Müşteri Memnuniyeti",
    },
];

const values = [
    {
        icon: Target,
        title: "Misyonumuz",
        description: "Kaliteli, güvenilir ve sürdürülebilir inşaat projeleri ile müşterilerimize değer katmak, sektörde öncü olmaya devam etmek.",
    },
    {
        icon: Eye,
        title: "Vizyonumuz",
        description: "Türkiye'nin en güvenilir ve tercih edilen inşaat firması olmak, uluslararası standartlarda projeler gerçekleştirmek.",
    },
    {
        icon: Heart,
        title: "Değerlerimiz",
        description: "Dürüstlük, kalite, müşteri memnuniyeti, yenilikçilik ve sürdürülebilirlik temel değerlerimizdir.",
    },
];

const team = [
    {
        name: "Ali Yılmaz",
        position: "Genel Müdür",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Ayşe Kaya",
        position: "İnşaat Müdürü",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Mehmet Demir",
        position: "Proje Müdürü",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
        name: "Zeynep Arslan",
        position: "Mimarlık Şefi",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
];

// Counter Animation Component
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
            { threshold: 0.5 }
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
        const duration = 2000;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

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

export default function AboutPageContent() {
    const { ref: statsRef, animationClass: statsAnimation } = useScrollAnimation("left");
    const { ref: storyRef, animationClass: storyAnimation } = useScrollAnimation("right");
    const { ref: valuesRef, animationClass: valuesAnimation } = useScrollAnimation("left");
    const { ref: teamRef, animationClass: teamAnimation } = useScrollAnimation("right");

    // Touch handlers for mobile swipe
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsPaused(true);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            setIsPaused(false);
            return;
        }
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe || isRightSwipe) {
            // Pause animation briefly
            setTimeout(() => setIsPaused(false), 1000);
        } else {
            setIsPaused(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-slate-800 text-white py-20 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Hakkımızda"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/60"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                        Hakkımızda
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-delay">
                        Yılların deneyimi ve uzmanlığıyla inşaat sektörünün öncü firmalarından biri olmaktan gurur duyuyoruz.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-50">
                <div
                    ref={statsRef}
                    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${statsAnimation}`}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-shadow"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                                            <Icon className="text-slate-900" size={32} />
                                        </div>
                                    </div>
                                    <CounterAnimation
                                        targetNumber={stat.value}
                                        suffix={stat.suffix}
                                    />
                                    <p className="text-slate-600 font-medium">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={storyRef}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${storyAnimation}`}
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                                Hikayemiz
                            </h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                2014 yılında kurulan Hanyapı, modern yapılar inşa etme ve geleceği şekillendirme
                                misyonuyla yola çıktı. Yıllar içinde edindiğimiz deneyim ve müşteri memnuniyeti odaklı
                                yaklaşımımızla sektörde güvenilir bir isim haline geldik.
                            </p>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Her bir projemizde kaliteyi ön planda tutarak, en son teknolojileri kullanıyor ve
                                çevreye duyarlı, sürdürülebilir çözümler üretiyoruz.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="İnşaat Ekibi"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Misyon, Vizyon ve Değerlerimiz
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            İşimizi yürütürken bize rehberlik eden ilkeler.
                        </p>
                    </div>
                    <div
                        ref={valuesRef}
                        className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${valuesAnimation}`}
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-shadow text-center"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                                            <Icon className="text-slate-900" size={32} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Ekibimiz
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Deneyimli ve uzman kadromuzla projelerinize değer katıyoruz.
                        </p>
                    </div>
                    <div
                        ref={teamRef}
                        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${teamAnimation}`}
                    >
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-slate-600">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* References/Partners Section */}
            <section className="py-20 bg-slate-50">
                <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Referanslarımız
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Birlikte çalışmaktan gurur duyduğumuz değerli müşterilerimiz ve ortaklarımız.
                    </p>
                </div>

                {/* Client Logos Slider - Full Width */}
                <div
                    className="relative overflow-hidden w-full"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className={`m-4 flex gap-8 ${isPaused ? 'animate-none' : 'animate-slide-infinite'}`}>
                        {/* Infinite Loop Set */}
                        {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
                            <div key={index} className="bg-white p-12 rounded-xl shadow-md hover:shadow-xl transition-shadow flex items-center justify-center h-40 w-64 shrink-0">
                                <div className="w-full h-16 bg-slate-200 rounded-lg flex items-center justify-center">
                                    <span className="text-slate-500 font-semibold">Logo {num}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

