"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const contactInfo = [
    {
        icon: Phone,
        title: "Telefon",
        info: "+90 (212) 555 0 123",
        subInfo: "+90 (212) 555 0 124",
    },
    {
        icon: Mail,
        title: "E-posta",
        info: "info@hanyapi.com",
        subInfo: "destek@hanyapi.com",
    },
    {
        icon: MapPin,
        title: "Adres",
        info: "Maslak Mahallesi, Büyükdere Caddesi",
        subInfo: "No:123, Sarıyer/İstanbul",
    },
    {
        icon: Clock,
        title: "Çalışma Saatleri",
        info: "Pazartesi - Cuma: 09:00 - 18:00",
        subInfo: "Cumartesi: 09:00 - 14:00",
    },
];

// Accordion Component
function Accordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Proje süreçleri ne kadar sürer?",
            answer: "Proje süreleri, projenin büyüklüğüne ve karmaşıklığına göre değişmektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
        },
        {
            question: "Teklif almak için ne yapmam gerekir?",
            answer: "İletişim formumuzu doldurarak veya telefon ile bize ulaşarak ücretsiz teklif alabilirsiniz."
        },
        {
            question: "Hangi bölgelerde hizmet veriyorsunuz?",
            answer: "Türkiye genelinde hizmet vermekteyiz. Özellikle İstanbul, Ankara ve İzmir bölgelerinde aktif projelerimiz bulunmaktadır."
        },
        {
            question: "Garanti süreleriniz nedir?",
            answer: "Tüm projelerimiz için 2 yıl yapı garantisi sunmaktayız. Detaylı bilgi için sözleşme şartlarımızı inceleyebilirsiniz."
        }
    ];

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                        <h3 className="text-lg font-semibold text-slate-900 pr-8">
                            {faq.question}
                        </h3>
                        <ChevronDown
                            className={`text-slate-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                                }`}
                            size={24}
                        />
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            } overflow-hidden`}
                    >
                        <div className="px-6 pb-6">
                            <p className="text-slate-600">{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function ContactPage() {
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
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                        alt="İletişim"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-slate-900/60"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
                            Bize Ulaşın
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-delay">
                            Projeleriniz için profesyonel destek ve danışmanlık almak ister misiniz?
                            Bizimle iletişime geçin, size en kısa sürede dönüş yapalım.
                        </p>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
                                    >
                                        <div className="flex justify-center mb-4">
                                            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                                                <Icon className="text-slate-900" size={24} />
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-1">{item.info}</p>
                                        <p className="text-slate-600 text-sm">{item.subInfo}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Form & Map Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                    Mesaj Gönderin
                                </h2>
                                <p className="text-slate-600 mb-8">
                                    Formu doldurarak bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
                                </p>
                                <ContactForm />
                            </div>

                            {/* Map & Additional Info */}
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                    Ofisimizi Ziyaret Edin
                                </h2>
                                <p className="text-slate-600 mb-8">
                                    Ofisimize gelerek projeleriniz hakkında detaylı görüşme yapabilirsiniz.
                                </p>

                                {/* Google Maps Embed */}
                                <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8992303633673!2d29.01160931541959!3d41.08126197929085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zTWFzbGFrLCBCw7x5w7xrZGVyZSBDZC4sIDM0NDg1IFNhcsSxeWVyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Hanyapı Ofis Konumu"
                                    ></iframe>
                                </div>

                                {/* Additional Info Box */}
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                        Randevu Alın
                                    </h3>
                                    <p className="text-slate-600 mb-4">
                                        Ofisimize gelmeden önce randevu alarak bekleme sürenizi minimize edebilirsiniz.
                                    </p>
                                    <a
                                        href="tel:+902125550123"
                                        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                                    >
                                        Hemen Arayın
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                Sıkça Sorulan Sorular
                            </h2>
                            <p className="text-slate-600 text-lg">
                                En çok merak edilen sorular ve cevapları
                            </p>
                        </div>

                        <Accordion />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

