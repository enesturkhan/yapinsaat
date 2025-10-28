"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects({ showAll = false }: { showAll?: boolean }) {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            name: t("Modern Rezidans Projesi", "Modern Residence Project"),
            description: t("Şehrin merkezinde lüks yaşam alanları", "Luxury living spaces in the city center"),
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: t("Tamamlandı", "Completed"),
            statusType: "completed",
        },
        {
            id: 2,
            name: t("Ticari Plaza İnşaatı", "Commercial Plaza Construction"),
            description: t("30 katlı modern ofis binası", "30-story modern office building"),
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: t("Devam Ediyor", "In Progress"),
            statusType: "in-progress",
        },
        {
            id: 3,
            name: t("Alışveriş Merkezi", "Shopping Mall"),
            description: t("Yeni nesil AVM konsepti", "Next generation shopping mall concept"),
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: t("Tamamlandı", "Completed"),
            statusType: "completed",
        },
    ];

    // Otomatik geçiş
    useEffect(() => {
        if (showAll) return; // Carousel sadece ana sayfada

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [projects.length, showAll]);

    const goToPrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Touch handlers for mobile swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        }
        if (isRightSwipe) {
            goToPrevious();
        }
    };

    // Mouse drag handlers for desktop
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart(e.clientX);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        // Dragging logic could be added here if needed
    };

    const onMouseUp = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const distance = dragStart - e.clientX;
        setIsDragging(false);

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                goToNext();
            } else {
                goToPrevious();
            }
        }
    };

    // Ana sayfa için carousel görünümü
    if (!showAll) {
        return (
            <section className="bg-slate-700 relative overflow-hidden">
                {/* Başlık */}
                <div className="text-center py-16 px-4 relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {t("Son Projelerimiz", "Recent Projects")}
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        {t(
                            "Kalite ve güvenin adresinde tamamladığımız projeler.",
                            "Projects we completed with quality and trust."
                        )}
                    </p>
                </div>

                {/* Tam Ekran Carousel */}
                <div
                    className="relative h-[550px] w-full cursor-grab active:cursor-grabbing"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={() => setIsDragging(false)}
                >
                    {/* Slider Container */}
                    <div className="relative h-full">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                {/* Background Image */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex items-end">
                                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                                        <div className="max-w-2xl">
                                            {/* Status Badge */}
                                            <div className="mb-4">
                                                <span
                                                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${project.statusType === "completed"
                                                        ? "bg-green-500 text-white"
                                                        : "bg-yellow-400 text-slate-900"
                                                        }`}
                                                >
                                                    {project.status}
                                                </span>
                                            </div>

                                            {/* Project Name */}
                                            <h3 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                                                {project.name}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-200 text-lg sm:text-xl mb-6">
                                                {project.description}
                                            </p>

                                            {/* View All Button */}
                                            <Link
                                                href="/projects"
                                                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
                                            >
                                                {t("Tüm Projeleri Gör", "View All Projects")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Dot Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                                    ? "w-8 bg-yellow-400"
                                    : "w-2 bg-white/50 hover:bg-white/80"
                                    }`}
                                aria-label={t(`Proje ${index + 1}'e git`, `Go to project ${index + 1}`)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Projeler sayfası için grid görünümü
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        {t("Tüm Projelerimiz", "All Our Projects")}
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        {t(
                            "Kalite ve güvenin adresinde tamamladığımız projeler.",
                            "Projects we completed with quality and trust."
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold ${project.statusType === "completed"
                                            ? "bg-green-500 text-white"
                                            : "bg-yellow-400 text-slate-900"
                                            }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-slate-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
