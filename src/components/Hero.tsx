"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Video otomatik oynatma için
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <section className="relative h-160  flex items-center justify-center overflow-hidden">
            {/* Arka Plan Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/heroVideo.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay - Yazıların okunabilmesi için */}
            <div className="absolute inset-0 bg-slate-900/70 z-10" />

            {/* İçerik */}
            <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                    {t("Güven İnşa Ediyoruz", "Building Trust")}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 text-slate-200 animate-fade-in-delay">
                    {t("Yılların deneyimiyle modern projelere imza atıyoruz.", "We sign modern projects with years of experience.")}
                </p>
                <Link
                    href="/projects"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg animate-fade-in-delay-2"
                >
                    {t("Projelerimizi Gör", "View Our Projects")}
                </Link>
            </div>
        </section>
    );
}

