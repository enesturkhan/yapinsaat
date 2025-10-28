"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactCTA() {
    const { t } = useLanguage();
    const { ref: ctaRef, animationClass: ctaAnimation } = useScrollAnimation("right");

    return (
        <section className="py-12 bg-slate-800 text-white">
            <div
                ref={ctaRef}
                className={`max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${ctaAnimation}`}
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    {t("Projeniz İçin Bizimle İletişime Geçin", "Contact Us For Your Project")}
                </h2>
                <p className="text-slate-300 text-base mb-6">
                    {t(
                        "Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim. Uzman ekibimiz size yardımcı olmak için hazır.",
                        "Let's turn your dream project into reality together. Our expert team is ready to help you."
                    )}
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                >
                    {t("Bize Ulaşın", "Contact Us")}
                </Link>
            </div>
        </section>
    );
}

