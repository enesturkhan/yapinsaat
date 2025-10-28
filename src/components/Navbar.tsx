"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const { t } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(!isHomePage); // Ana sayfa değilse baştan scrolled
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const menuItems = [
        { name: t("Hizmetler", "Services"), href: "/services" },
        { name: t("Projeler", "Projects"), href: "/projects" },
        { name: t("Hakkımızda", "About"), href: "/about" },
        { name: t("İletişim", "Contact"), href: "/contact" },
    ];

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Saydamlık kontrolü
            if (isHomePage) {
                // Ana sayfada: 50px'den fazla scroll edildiyse beyaz yap
                if (currentScrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            } else {
                // Diğer sayfalarda: her zaman scrolled (beyaz arka plan)
                setScrolled(true);
            }

            // Görünürlük kontrolü
            if (currentScrollY < 100) {
                // En üstteyse her zaman göster
                setVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Aşağı scroll ediyorsa gizle
                setVisible(false);
            } else {
                // Yukarı scroll ediyorsa göster
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY, isHomePage]);

    return (
        <>
            {/* Dil Değiştirme Şeridi */}
            <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
                }`}>
                <LanguageSwitcher />
            </div>

            {/* Navbar - Dil şeridinin altında */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${visible ? "translate-y-[28px]" : "-translate-y-full"
                    } ${scrolled
                        ? "bg-white shadow-md"
                        : "bg-white/90 md:bg-transparent backdrop-blur-sm"
                    }`}
                style={{ top: 0 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold">
                                <span className="text-yellow-400">Han</span>
                                <span className={`transition-colors text-slate-800 md:text-inherit ${scrolled ? "md:text-slate-800" : "md:text-white"}`}>
                                    yapı
                                </span>
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`transition-colors font-medium ${scrolled
                                        ? "text-slate-600 hover:text-yellow-400"
                                        : "text-white hover:text-yellow-400"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-md transition-colors cursor-pointer text-black hover:text-yellow-400 hover:bg-slate-50"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-slate-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-slate-600 hover:text-yellow-400 hover:bg-slate-50 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

