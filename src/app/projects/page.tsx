"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import { Filter, ArrowRight, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
    {
        id: 1,
        name: "Modern Rezidans Projesi",
        description: "Şehrin merkezinde lüks yaşam alanları. 200 daireli modern rezidans kompleksi ile yeni nesil yaşam standartları sunuyoruz. Sosyal tesisler, yeşil alanlar ve akıllı bina teknolojileriyle donatılmış.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "Tamamlandı",
        category: "Konut",
        year: "2023",
        location: "İstanbul, Türkiye",
    },
    {
        id: 2,
        name: "Ticari Plaza İnşaatı",
        description: "30 katlı modern ofis binası. A+ sınıf ofis ve ticari alanlar ile şehrin yeni iş merkezini oluşturuyoruz. LEED sertifikalı, enerji verimli tasarım.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "Devam Ediyor",
        category: "Ticari",
        year: "2024",
        location: "Ankara, Türkiye",
    },
    {
        id: 3,
        name: "Alışveriş Merkezi",
        description: "Yeni nesil AVM konsepti. 50.000 m² alışveriş ve eğlence merkezi. 200+ mağaza, sinema kompleksi ve eğlence alanlarıyla modern yaşamın kalbi.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "Tamamlandı",
        category: "Ticari",
        year: "2023",
        location: "İzmir, Türkiye",
    },
    {
        id: 4,
        name: "Villa Projeleri",
        description: "Doğa ile iç içe lüks villa kompleksi. 25 adet müstakil villa ile özel yaşam alanları. Her villa özel bahçe, havuz ve panoramik manzaraya sahip.",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "Tamamlandı",
        category: "Konut",
        year: "2022",
        location: "Bodrum, Türkiye",
    },
    {
        id: 5,
        name: "Endüstriyel Tesis",
        description: "Modern üretim tesisi. 15.000 m² kapalı alan fabrika projesi. Yüksek tavan, özel yükleme rampaları ve modern depolama sistemleri.",
        image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "Devam Ediyor",
        category: "Endüstriyel",
        year: "2024",
        location: "Bursa, Türkiye",
    },
    {
        id: 6,
        name: "Otel Kompleksi",
        description: "5 yıldızlı otel projesi. 300 oda kapasiteli tatil kompleksi. Spa, havuz, restoran ve konferans salonlarıyla tam donanımlı tesis.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        status: "Tamamlandı",
        category: "Turizm",
        year: "2023",
        location: "Antalya, Türkiye",
    },
];

// Project Card Component
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const isEven = index % 2 === 0;
    const { ref, animationClass } = useScrollAnimation(isEven ? "left" : "right");
    const [isHovered, setIsHovered] = useState(false);
    const leftShutterRef = useRef<HTMLDivElement>(null);
    const rightShutterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isHovered) {
            // Hover edildiğinde paneller merkeze (translateX(0)) gelir
            leftShutterRef.current?.style.setProperty('transform', 'translateX(0)');
            rightShutterRef.current?.style.setProperty('transform', 'translateX(0)');
        } else {
            // Hover bitince paneller dışarı (sol -100%, sağ +100%) gider
            leftShutterRef.current?.style.setProperty('transform', 'translateX(-100%)');
            rightShutterRef.current?.style.setProperty('transform', 'translateX(100%)');
        }
    }, [isHovered]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${animationClass}`}
        >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${isEven
                ? "from-slate-800 via-slate-900 to-slate-800"
                : "from-slate-900 via-slate-800 to-slate-900"
                }`}>
                {/* Image Section with Shutter Animation */}
                <div
                    className={`relative h-[400px] lg:h-[500px] ${!isEven ? 'lg:order-2' : ''} group cursor-pointer overflow-hidden`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover z-10 relative"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-20"></div>

                    {/* Kapı Animasyonu - Sol Panel (resmin sol tarafından gelir) */}
                    <div
                        ref={leftShutterRef}
                        className="absolute inset-y-0 left-0 w-1/2 bg-slate-900/90 z-[15]"
                        style={{
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.5s ease-out',
                        }}
                    ></div>

                    {/* Kapı Animasyonu - Sağ Panel (content tarafından gelir) */}
                    <div
                        ref={rightShutterRef}
                        className="absolute inset-y-0 right-0 w-1/2 bg-slate-900/90 z-[15]"
                        style={{
                            transform: 'translateX(100%)',
                            transition: 'transform 0.5s ease-out',
                        }}
                    ></div>

                    {/* Status Badge on Image */}
                    <div className="absolute top-6 left-6 z-40">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${project.status === "Tamamlandı"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-400 text-slate-900"
                            }`}>
                            {project.status}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className={` p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                        {/* Category & Year */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold uppercase tracking-wide text-yellow-400">
                                {project.category}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-sm text-slate-400 font-medium">
                                {project.year}
                            </span>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                            {project.name}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                            {project.description}
                        </p>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-slate-400">
                            <MapPin size={18} className="text-yellow-400" />
                            <span className="text-sm">{project.location}</span>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                                <span>Detayları Gör</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    const [filter, setFilter] = useState("Tümü");

    const filteredProjects = filter === "Tümü"
        ? projects
        : projects.filter(project => project.status === filter);

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
                        src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Projelerimiz"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-slate-900/60"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                            Projelerimiz
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-delay">
                            Kalite ve güvenin adresinde tamamladığımız projeler.
                            Her bir projeyi özenle tasarlıyor ve en yüksek standartlarda inşa ediyoruz.
                        </p>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="bg-slate-50 py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap items-center gap-4">
                            <Filter className="text-slate-600" size={20} />
                            <span className="text-slate-700 font-medium">Filtrele:</span>
                            {["Tümü", "Tamamlandı", "Devam Ediyor"].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setFilter(status)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${filter === status
                                        ? "bg-yellow-400 text-slate-900 shadow-md"
                                        : "bg-white text-slate-600 hover:bg-slate-100"
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Showcase Cards */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
