"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form gönderme işlemi burada yapılacak
        console.log("Form gönderildi:", formData);
        alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Ad Soyad
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                    placeholder="Adınız Soyadınız"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-posta
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                    placeholder="ornek@email.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mesajınız
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                />
            </div>

            <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
                <Send size={20} />
                Gönder
            </button>
        </form>
    );
}

