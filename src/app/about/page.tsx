import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AboutPageContent from "@/components/AboutPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda - Hanyapı",
    description: "Hanyapı olarak yılların deneyimi ve uzmanlığıyla inşaat sektörünün öncü firmalarından biriyiz.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <FloatingButtons />
            {/* Spacer - Navbar yüksekliği kadar boşluk */}
            <div className="h-[108px]"></div>
            <main>
                <AboutPageContent />
            </main>
            <Footer />
        </>
    );
}
