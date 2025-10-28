"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import Link from "next/link";
import { Hammer, Ruler, Building2, TrendingUp, CheckCircle2, Users, Shield, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mainServices = [
    {
        icon: Hammer,
        title: "Mühendislik Hizmetleri",
        description: "Yapısal analiz ve hesaplamalardan proje uygulamasına kadar her aşamada profesyonel mühendislik desteği sunuyoruz.",
        features: [
            "Yapısal tasarım ve hesaplama",
            "Zemin etüdü ve temel tasarımı",
            "Statik ve betonarme projeler",
            "Teknik danışmanlık",
        ],
    },
    {
        icon: Ruler,
        title: "Mimarlık ve Tasarım",
        description: "Modern ve fonksiyonel mimari tasarımlar ile hayalinizdeki projeyi gerçeğe dönüştürüyoruz.",
        features: [
            "Mimari konsept tasarım",
            "3D görselleştirme",
            "İç mekan tasarımı",
            "Ruhsat ve izin işlemleri",
        ],
    },
    {
        icon: Building2,
        title: "Taahhüt ve İnşaat",
        description: "A'dan Z'ye tüm inşaat süreçlerini en yüksek kalite standartlarında tamamlıyoruz.",
        features: [
            "Anahtar teslim projeler",
            "Kaliteli malzeme kullanımı",
            "Uzman işçilik",
            "Zamanında teslim garantisi",
        ],
    },
    {
        icon: TrendingUp,
        title: "Danışmanlık Hizmetleri",
        description: "Yatırım danışmanlığından proje yönetimine kadar geniş kapsamlı danışmanlık hizmetleri veriyoruz.",
        features: [
            "Yatırım danışmanlığı",
            "Proje yönetimi",
            "Maliyet analizi",
            "Risk değerlendirmesi",
        ],
    },
];

const whyChooseUs = [
    {
        icon: CheckCircle2,
        title: "Kalite Garantisi",
        description: "Tüm projelerimizde en yüksek kalite standartlarını uyguluyoruz.",
    },
    {
        icon: Users,
        title: "Uzman Ekip",
        description: "Alanında deneyimli mühendis ve mimarlardan oluşan ekibimiz.",
    },
    {
        icon: Shield,
        title: "Güvenilirlik",
        description: "Yıllardır sektörde kazandığımız güven ve tecrübe.",
    },
    {
        icon: Clock,
        title: "Zamanında Teslimat",
        description: "Projelerimizi belirtilen sürede tamamlama garantisi.",
    },
];

export default function ServicesPage() {
    // Scroll animations
    const { ref: servicesTitleRef, animationClass: servicesTitleAnimation } = useScrollAnimation("left");
    const { ref: servicesCardsRef, animationClass: servicesCardsAnimation } = useScrollAnimation("right");
    const { ref: whyChooseTitleRef, animationClass: whyChooseTitleAnimation } = useScrollAnimation("left");
    const { ref: whyChooseCardsRef, animationClass: whyChooseCardsAnimation } = useScrollAnimation("right");
    const { ref: ctaRef, animationClass: ctaAnimation } = useScrollAnimation("left");

    return (
        <>
            <Navbar />
            <FloatingButtons />
            {/* Spacer - Navbar yüksekliği kadar boşluk */}
            <div className="h-[108px]"></div>
            <main>
                {/* Hero Section */}
                <section className="relative bg-slate-800 text-white py-20 overflow-hidden">
                    {/* Background Image */}
                    <Image
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Hizmetlerimiz"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-slate-900/60"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                            Hizmetlerimiz
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-delay">
                            Profesyonel ekibimizle inşaat projelerinizin her aşamasında yanınızdayız.
                            Modern teknolojiyi ve yılların deneyimini birleştirerek size en iyi hizmeti sunuyoruz.
                        </p>
                    </div>
                </section>

                {/* Main Services */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div ref={servicesTitleRef} className={`text-center mb-12 transition-all duration-1000 ease-out ${servicesTitleAnimation}`}>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                Hizmetlerimiz
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Size sunduğumuz kapsamlı hizmet yelpazesi ile projelerinizi başarıya ulaştırıyoruz.
                            </p>
                        </div>
                        <div ref={servicesCardsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ease-out ${servicesCardsAnimation}`}>
                            {mainServices.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-shadow border border-slate-200 cursor-pointer"
                                    >
                                        <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                                            <Icon className="text-slate-900" size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                                                    <span className="text-slate-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div ref={whyChooseTitleRef} className={`text-center mb-16 transition-all duration-1000 ease-out ${whyChooseTitleAnimation}`}>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                Neden Bizi Seçmelisiniz?
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                Sektördeki tecrübemiz ve müşteri memnuniyeti odaklı yaklaşımımızla fark yaratıyoruz.
                            </p>
                        </div>

                        <div ref={whyChooseCardsRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ease-out ${whyChooseCardsAnimation}`}>
                            {whyChooseUs.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow cursor-pointer"
                                    >
                                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="text-slate-900" size={28} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-slate-800 text-white">
                    <div ref={ctaRef} className={`max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${ctaAnimation}`}>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Projenize Başlamaya Hazır mısınız?
                        </h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Uzman ekibimiz size en iyi hizmeti sunmak için hazır.
                            Hemen iletişime geçin ve projenizi birlikte planlayalım.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 cursor-pointer"
                        >
                            İletişime Geç
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

