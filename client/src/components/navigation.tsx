import { useState, useEffect } from "react";
import { Gamepad2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "games", "booking", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#games", label: "Games", id: "games" },
    { href: "#booking", label: "Book Now", id: "booking" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect border-b border-neon-cyan/20 py-2"
          : "glass-effect border-b border-neon-cyan/20 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="text-neon-cyan text-2xl animate-pulse-neon" />
            <h1 className="text-xl md:text-2xl font-bold text-neon-cyan neon-glow tracking-wider">
              REBOOT GAMING
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`nav-link ${
                  activeSection === link.id
                    ? "text-neon-cyan"
                    : "text-white hover:text-neon-cyan"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button className="gaming-button">Book Now</Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-neon-cyan hover:bg-neon-cyan/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 border-neon-cyan/20 p-0"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-neon-cyan/20">
                  <div className="flex items-center space-x-2">
                    <Gamepad2 className="text-neon-cyan text-2xl animate-pulse-neon" />
                    <h1 className="text-xl font-bold text-neon-cyan neon-glow tracking-wider">
                      REBOOT GAMING
                    </h1>
                  </div>
                </div>
                <div className="flex-1 flex flex-col space-y-1 p-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className={`p-4 text-left rounded-lg transition-colors duration-200 ${
                        activeSection === link.id
                          ? "bg-neon-cyan/10 text-neon-cyan"
                          : "text-white hover:bg-neon-cyan/5 hover:text-neon-cyan"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button className="gaming-button mt-4 w-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
