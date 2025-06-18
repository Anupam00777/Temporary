import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import GamesShowcase from "@/components/games-showcase";
import BookingSection from "@/components/booking-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <GamesShowcase />
      <BookingSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
