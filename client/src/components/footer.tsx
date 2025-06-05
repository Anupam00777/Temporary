import { Gamepad2, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#games", label: "Games" },
    { href: "#booking", label: "Book Now" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", color: "text-neon-cyan" },
    { name: "Facebook", icon: "📘", color: "text-neon-pink" },
    { name: "Discord", icon: "🎮", color: "text-electric-green" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900/50 border-t border-neon-cyan/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="text-neon-cyan text-3xl animate-pulse-neon" />
              <h3 className="text-3xl font-bold text-neon-cyan neon-glow">REBOOT GAMING</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nagpur's most advanced gaming cafe offering premium gaming experiences with 
              cutting-edge technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className={`${social.color} hover:text-white text-2xl transition-colors duration-300`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-neon-pink mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-electric-green mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <MapPin className="text-neon-cyan mr-2 h-4 w-4" />
                Nandanvan, Nagpur
              </p>
              <p className="flex items-center">
                <Phone className="text-neon-pink mr-2 h-4 w-4" />
                +91 98765 43210
              </p>
              <p className="flex items-center">
                <Mail className="text-electric-green mr-2 h-4 w-4" />
                info@rebootgaming.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neon-cyan/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Reboot Gaming Cafe. All rights reserved. | Designed with 💚 for Gamers
          </p>
        </div>
      </div>
    </footer>
  );
}
