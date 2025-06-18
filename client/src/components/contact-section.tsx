import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Share2,
  Map,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState<Partial<InsertContact>>({});
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We will get back to you soon.",
      });
      setFormData({});
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData as InsertContact);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content:
        "Reboot Gaming Cafe\nPlot No. 15, Nandanvan Colony\nNear Central Mall, Nagpur - 440010\nMaharashtra, India",
      color: "text-neon-pink",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content:
        "Monday - Sunday: 10:00 AM - 12:00 AM\n24/7 on Weekends & Holidays",
      color: "text-electric-green",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210\n+91 87654 32109",
      color: "text-neon-cyan",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@rebootgaming.com\nbookings@rebootgaming.com",
      color: "text-neon-pink",
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, color: "text-neon-cyan", href: "#" },
    { name: "Facebook", icon: Facebook, color: "text-neon-pink", href: "#" },
    { name: "Twitter", icon: Twitter, color: "text-electric-green", href: "#" },
    { name: "YouTube", icon: Youtube, color: "text-neon-cyan", href: "#" },
    {
      name: "Discord",
      icon: MessageSquare,
      color: "text-neon-pink",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-green/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-electric-green neon-glow mb-4 md:mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Visit us at Nagpur's premier gaming destination or reach out for any
            queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <Card className="glass-effect border border-neon-cyan/30 rounded-xl hover-neon">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neon-cyan mb-6 flex items-center">
                  <MapPin className="mr-3 h-6 w-6" />
                  Visit Us
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 group"
                      >
                        <IconComponent
                          className={`${info.color} text-xl mt-1 group-hover:animate-bounce`}
                        />
                        <div>
                          <h4 className="font-semibold text-white mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-300 whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-effect border border-neon-pink/30 rounded-xl hover-neon">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neon-pink mb-6 flex items-center">
                  <Share2 className="mr-3 h-6 w-6" />
                  Follow Us
                </h3>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} hover:text-white transition-all duration-300 hover-neon p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map & Quick Contact */}
          <div className="space-y-6 md:space-y-8">
            <Card className="glass-effect border border-electric-green/30 rounded-xl hover-neon">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-electric-green mb-6 flex items-center">
                  <Map className="mr-3 h-6 w-6" />
                  Find Us
                </h3>

                <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center border border-electric-green/20 group hover:border-electric-green/40 transition-colors duration-300">
                  <div className="text-center">
                    <Map className="text-electric-green text-4xl mb-4 mx-auto group-hover:animate-bounce" />
                    <p className="text-gray-300 font-semibold">
                      Interactive Map
                    </p>
                    <p className="text-sm text-gray-400">Nandanvan, Nagpur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border border-neon-cyan/30 rounded-xl hover-neon">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neon-cyan mb-6 flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Quick Contact
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Your Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Your Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300">Your Message</Label>
                    <Textarea
                      placeholder="Type your message here..."
                      rows={4}
                      value={formData.message || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full gaming-button group mt-6"
                  >
                    <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
