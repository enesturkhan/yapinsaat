"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// X (Twitter) Logo Komponenti
const XLogo = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default function Footer() {
    const { t } = useLanguage();

    const menuItems = [
        { name: t("Hizmetler", "Services"), href: "/services" },
        { name: t("Projeler", "Projects"), href: "/projects" },
        { name: t("Hakkımızda", "About"), href: "/about" },
        { name: t("İletişim", "Contact"), href: "/contact" },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", name: "facebook" },
        { icon: XLogo, href: "#", name: "x" },
        { icon: Instagram, href: "#", name: "instagram" },
        { icon: Linkedin, href: "#", name: "linkedin" },
    ];

    return (
        <footer className="bg-slate-900 text-white w-full">
            {/* Sosyal Medya - En Üstte, Sağ Tarafta */}
            <div className="bg-slate-900 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end gap-3">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all cursor-pointer hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Sarı Çizgi - İnce */}
            <div className="h-0.5 bg-yellow-400 w-full opacity-60"></div>

            {/* Ana Footer İçeriği */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo ve Açıklama */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-yellow-400">Han</span>
                            <span className="text-white">yapı</span>
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            {t(
                                "Yılların deneyimiyle güvenilir inşaat hizmetleri sunuyor, hayallerinizdeki projeleri gerçeğe dönüştürüyoruz.",
                                "Providing reliable construction services with years of experience, turning your dream projects into reality."
                            )}
                        </p>
                    </div>

                    {/* Hızlı Linkler */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            {t("Hızlı Linkler", "Quick Links")}
                        </h4>
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-yellow-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* İletişim */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            {t("İletişim", "Contact")}
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-slate-400">+90 (212) 555 0 123</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-slate-400">info@hanyapi.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-slate-400">
                                    {t(
                                        "Maslak Mahallesi, Büyükdere Caddesi No:123, Sarıyer/İstanbul",
                                        "Maslak District, Büyükdere Avenue No:123, Sarıyer/Istanbul"
                                    )}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright - Sayfanın altına yakın */}
                <div className="border-t border-slate-800 mt-8 pt-4 text-center">
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Hanyapı. {t("Tüm Hakları Saklıdır.", "All Rights Reserved.")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
