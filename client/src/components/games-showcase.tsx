import { Trophy, Crown, Glasses, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GamesShowcase() {
  const gameCategories = [
    {
      title: "ESPORTS",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Dominate in CS:GO, Valorant, Dota 2, League of Legends, and more competitive titles with ultra-low latency.",
      games: ["CS:GO", "Valorant", "Dota 2"],
      borderColor: "border-neon-cyan/30",
      iconColor: "text-electric-green",
      titleColor: "text-neon-cyan",
    },
    {
      title: "AAA TITLES",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Experience breathtaking single-player adventures and blockbuster games in stunning 4K resolution.",
      games: ["Cyberpunk 2077", "GTA V", "Witcher 3"],
      borderColor: "border-neon-pink/30",
      iconColor: "text-neon-pink",
      titleColor: "text-neon-pink",
    },
    {
      title: "VR ZONE",
      icon: Glasses,
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Step into virtual worlds with our premium VR setups featuring the latest Oculus and HTC Vive headsets.",
      games: ["Half-Life Alyx", "Beat Saber", "VRChat"],
      borderColor: "border-electric-green/30",
      iconColor: "text-electric-green",
      titleColor: "text-electric-green",
    },
    {
      title: "CONSOLE",
      icon: Users,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Play the latest PlayStation 5 and Xbox Series X exclusives on large 4K displays with surround sound.",
      games: ["PS5", "Xbox Series X", "Nintendo Switch"],
      borderColor: "border-neon-cyan/30",
      iconColor: "text-neon-cyan",
      titleColor: "text-neon-cyan",
    },
    {
      title: "STREAMING",
      icon: Users,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Create content with our professional streaming setups featuring high-end cameras and audio equipment.",
      games: ["OBS Studio", "Twitch", "YouTube"],
      borderColor: "border-neon-pink/30",
      iconColor: "text-neon-pink",
      titleColor: "text-neon-pink",
    },
    {
      title: "PARTY MODE",
      icon: Users,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Book our premium lounge area for group gaming sessions, tournaments, and birthday parties.",
      games: ["Group Events", "Tournaments", "Private Parties"],
      borderColor: "border-electric-green/30",
      iconColor: "text-electric-green",
      titleColor: "text-electric-green",
    },
  ];

  return (
    <section id="games" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-neon-cyan neon-glow mb-6">GAME ARSENAL</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive into our extensive collection of premium games across all genres. From competitive esports to immersive RPGs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className={`glass-effect border ${category.borderColor} rounded-xl hover-neon group cursor-pointer transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <img
                    src={category.image}
                    alt={`${category.title} gaming setup`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center mb-3">
                    <IconComponent className={`${category.iconColor} text-2xl mr-3`} />
                    <h3 className={`text-2xl font-bold ${category.titleColor}`}>
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
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
                        } text-sm`}
                      >
                        {game}
                      </Badge>
                    ))}
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
