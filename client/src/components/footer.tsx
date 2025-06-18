import {
  Gamepad2,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageSquare,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#games", label: "Games" },
    { href: "#booking", label: "Book Now" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, color: "text-neon-cyan", href: "#" },
    { name: "Facebook", icon: Facebook, color: "text-neon-pink", href: "#" },
    {
      name: "Discord",
      icon: MessageSquare,
      color: "text-electric-green",
      href: "#",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gray-900/50 border-t border-neon-cyan/20 py-12 px-4 md:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-cyan/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="text-neon-cyan text-2xl md:text-3xl animate-pulse-neon" />
              <h3 className="text-2xl md:text-3xl font-bold text-neon-cyan neon-glow">
                REBOOT GAMING
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm md:text-base">
              Nagpur's most advanced gaming cafe offering premium gaming
              experiences with cutting-edge technology and exceptional service.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} hover:text-white transition-all duration-300 hover-neon p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800/70`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-neon-pink mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 text-sm md:text-base group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-electric-green mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center group">
                <MapPin className="text-neon-cyan mr-2 h-4 w-4 group-hover:animate-bounce" />
                <span className="text-sm md:text-base">Nandanvan, Nagpur</span>
              </p>
              <p className="flex items-center group">
                <Phone className="text-neon-pink mr-2 h-4 w-4 group-hover:animate-bounce" />
                <span className="text-sm md:text-base">+91 98765 43210</span>
              </p>
              <p className="flex items-center group">
                <Mail className="text-electric-green mr-2 h-4 w-4 group-hover:animate-bounce" />
                <span className="text-sm md:text-base">
                  info@rebootgaming.com
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neon-cyan/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © 2024 Reboot Gaming Cafe. All rights reserved. | Designed with 💚
            for Gamers
          </p>
        </div>
      </div>
    </footer>
  );
}
