import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Share2, Map, MessageCircle } from "lucide-react";
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
      content: "Reboot Gaming Cafe\nPlot No. 15, Nandanvan Colony\nNear Central Mall, Nagpur - 440010\nMaharashtra, India",
      color: "text-neon-pink",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Monday - Sunday: 10:00 AM - 12:00 AM\n24/7 on Weekends & Holidays",
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
    { name: "Instagram", icon: "📷", color: "text-neon-cyan" },
    { name: "Facebook", icon: "📘", color: "text-neon-pink" },
    { name: "Twitter", icon: "🐦", color: "text-electric-green" },
    { name: "YouTube", icon: "📺", color: "text-neon-cyan" },
    { name: "Discord", icon: "🎮", color: "text-neon-pink" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-electric-green neon-glow mb-6">GET IN TOUCH</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visit us at Nagpur's premier gaming destination or reach out for any queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-effect border border-neon-cyan/30 rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-neon-cyan mb-6 flex items-center">
                  <MapPin className="mr-3" />
                  Visit Us
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <IconComponent className={`${info.color} text-xl mt-1`} />
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-effect border border-neon-pink/30 rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-neon-pink mb-6 flex items-center">
                  <Share2 className="mr-3" />
                  Follow Us
                </h3>

                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={social.name}
                      variant="ghost"
                      className={`${social.color} hover:text-white text-3xl transition-colors duration-300 hover-neon p-2`}
                    >
                      {social.icon}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map & Quick Contact */}
          <div className="space-y-8">
            <Card className="glass-effect border border-electric-green/30 rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-electric-green mb-6 flex items-center">
                  <Map className="mr-3" />
                  Find Us
                </h3>
                
                <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center border border-electric-green/20">
                  <div className="text-center">
                    <Map className="text-electric-green text-4xl mb-4 mx-auto" />
                    <p className="text-gray-300 font-semibold">Interactive Map</p>
                    <p className="text-sm text-gray-400">Nandanvan, Nagpur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border border-neon-cyan/30 rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-neon-cyan mb-6 flex items-center">
                  <MessageCircle className="mr-3" />
                  Quick Contact
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name || ""}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email || ""}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message || ""}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-neon-cyan to-electric-green text-black px-6 py-3 rounded-lg font-bold hover-neon transition-all duration-300"
                  >
                    <Mail className="mr-2 h-4 w-4" />
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
