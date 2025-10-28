"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(direction: "left" | "right" = "left") {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Sayfa yüklendiğinde viewport'ta olan elementleri hemen göster
        const checkInitialVisibility = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Element viewport'un %80'inden yukarıdaysa hemen göster
            if (rect.top < windowHeight * 0.8) {
                setIsVisible(true);
            }
        };

        // DOM hazır olduğunda kontrol et
        const timer = setTimeout(checkInitialVisibility, 100);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            clearTimeout(timer);
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const animationClass = isVisible
        ? "opacity-100 translate-x-0"
        : direction === "left"
            ? "opacity-0 -translate-x-12"
            : "opacity-0 translate-x-12";

    return { ref, animationClass };
}
