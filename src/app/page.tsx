"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Loading from "@/components/Loading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // İlk girişte 3 saniye loading göster
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <FloatingButtons />
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Hero />
          <Services />
          <Projects showAll={false} />
          <Testimonials />
          <AboutSection />
          <ContactCTA />
        </main>
      )}
      {!isLoading && <Footer />}
    </>
  );
}
