import {
  Trophy,
  Crown,
  Glasses,
  Users,
  Twitch,
  PartyPopper,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GamesShowcase() {
  const gameCategories = [
    {
      title: "ESPORTS",
      icon: Trophy,
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description:
        "Dominate in CS:GO, Valorant, Dota 2, League of Legends, and more competitive titles with ultra-low latency.",
      games: ["CS:GO", "Valorant", "Dota 2"],
      borderColor: "border-neon-cyan/30",
      iconColor: "text-electric-green",
      titleColor: "text-neon-cyan",
      gradient: "from-neon-cyan/20 to-transparent",
    },
    {
      title: "AAA TITLES",
      icon: Crown,
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description:
        "Experience breathtaking single-player adventures and blockbuster games in stunning 4K resolution.",
      games: ["Cyberpunk 2077", "GTA V", "Witcher 3"],
      borderColor: "border-neon-pink/30",
      iconColor: "text-neon-pink",
      titleColor: "text-neon-pink",
      gradient: "from-neon-pink/20 to-transparent",
    },
    {
      title: "VR ZONE",
      icon: Glasses,
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description:
        "Step into virtual worlds with our premium VR setups featuring the latest Oculus and HTC Vive headsets.",
      games: ["Half-Life Alyx", "Beat Saber", "VRChat"],
      borderColor: "border-electric-green/30",
      iconColor: "text-electric-green",
      titleColor: "text-electric-green",
      gradient: "from-electric-green/20 to-transparent",
    },
    {
      title: "CONSOLE",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description:
        "Play the latest PlayStation 5 and Xbox Series X exclusives on large 4K displays with surround sound.",
      games: ["PS5", "Xbox Series X", "Nintendo Switch"],
      borderColor: "border-neon-cyan/30",
      iconColor: "text-neon-cyan",
      titleColor: "text-neon-cyan",
      gradient: "from-neon-cyan/20 to-transparent",
    },
    {
      title: "STREAMING",
      icon: Twitch,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description:
        "Create content with our professional streaming setups featuring high-end cameras and audio equipment.",
      games: ["OBS Studio", "Twitch", "YouTube"],
      borderColor: "border-neon-pink/30",
      iconColor: "text-neon-pink",
      titleColor: "text-neon-pink",
      gradient: "from-neon-pink/20 to-transparent",
    },
    {
      title: "PARTY MODE",
      icon: PartyPopper,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description:
        "Book our premium lounge area for group gaming sessions, tournaments, and birthday parties.",
      games: ["Group Events", "Tournaments", "Private Parties"],
      borderColor: "border-electric-green/30",
      iconColor: "text-electric-green",
      titleColor: "text-electric-green",
      gradient: "from-electric-green/20 to-transparent",
    },
  ];

  return (
    <section id="games" className="py-16 md:py-24 px-4 md:px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-cyan/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neon-cyan neon-glow mb-4 md:mb-6">
            GAME ARSENAL
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Dive into our extensive collection of premium games across all
            genres. From competitive esports to immersive RPGs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gameCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className={`glass-effect border ${category.borderColor} rounded-xl hover-neon group cursor-pointer transition-all duration-300 overflow-hidden`}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={`${category.title} gaming setup`}
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${category.gradient}`}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <IconComponent
                        className={`${category.iconColor} text-2xl mr-3 group-hover:animate-bounce`}
                      />
                      <h3
                        className={`text-xl md:text-2xl font-bold ${category.titleColor}`}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm md:text-base">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.games.map((game, gameIndex) => (
                        <Badge
                          key={game}
                          variant="outline"
                          className={`${
                            gameIndex % 3 === 0
                              ? "border-neon-cyan/50 text-neon-cyan"
                              : gameIndex % 3 === 1
                              ? "border-neon-pink/50 text-neon-pink"
                              : "border-electric-green/50 text-electric-green"
                          } text-xs md:text-sm transition-colors duration-300 hover:bg-opacity-10`}
                        >
                          {game}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
