"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="bg-slate-800 text-white py-1.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
                <div className="flex items-center gap-2">
                    <Globe size={14} className="text-slate-400" />
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setLanguage("TR")}
                            className={`px-2 py-0.5 text-xs font-medium rounded transition-all cursor-pointer ${language === "TR"
                                ? "bg-yellow-400 text-slate-900"
                                : "text-slate-300 hover:text-white hover:bg-slate-700"
                                }`}
                        >
                            TR
                        </button>
                        <span className="text-slate-600 text-xs">|</span>
                        <button
                            onClick={() => setLanguage("EN")}
                            className={`px-2 py-0.5 text-xs font-medium rounded transition-all cursor-pointer ${language === "EN"
                                ? "bg-yellow-400 text-slate-900"
                                : "text-slate-300 hover:text-white hover:bg-slate-700"
                                }`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
