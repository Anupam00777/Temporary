import { Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg">
        <img
          src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Modern gaming cafe setup"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-neon-cyan neon-glow animate-glow block">REBOOT</span>
          <span className="text-neon-pink neon-glow block">GAMING</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience next-level gaming at Nagpur's most advanced gaming cafe. Premium setups,
          lightning-fast connections, and the ultimate gaming atmosphere.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black px-8 py-4 rounded-lg font-bold text-lg hover-neon transform transition-all duration-300 uppercase tracking-wider"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Slot
          </Button>
          <Button
            variant="outline"
            className="border-2 border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg font-bold text-lg hover:bg-neon-cyan hover:text-black transition-all duration-300 uppercase tracking-wider neon-border"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Tour
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-neon-cyan text-4xl animate-float opacity-20">
        🎮
      </div>
      <div className="absolute bottom-20 right-10 text-neon-pink text-5xl animate-float opacity-20 animation-delay-1000">
        🎧
      </div>
      <div className="absolute top-1/2 left-20 text-electric-green text-3xl animate-float opacity-20 animation-delay-2000">
        ⌨️
      </div>
    </section>
  );
}
