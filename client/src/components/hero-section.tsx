import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import GamingScene from "./3d-scene";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-cyan/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/80" />

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 3D Scene */}
      <div className="w-full">
        <GamingScene />
      </div>

      {/* Content */}
      <div className="relative text-center px-4 md:px-6 max-w-6xl mx-auto -mt-20">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-neon-cyan neon-glow animate-glow block">
              REBOOT
            </span>
            <span className="text-neon-pink neon-glow block">GAMING</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience next-level gaming at Nagpur's most advanced gaming cafe.
            Premium setups, lightning-fast connections, and the ultimate gaming
            atmosphere.
          </p>
          <div className="flex justify-center items-center">
            <Button
              onClick={scrollToContact}
              className="gaming-button group px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl"
            >
              <MessageCircle className="mr-2 h-6 w-6 group-hover:animate-bounce" />
              Contact Us
            </Button>
          </div>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-neon-cyan" />
      </div>
    </section>
  );
}
