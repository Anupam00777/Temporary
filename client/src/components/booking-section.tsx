import { useState } from "react";
import { CalendarCheck, Tags, Star, Gamepad } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertBooking } from "@shared/schema";

export default function BookingSection() {
  const [formData, setFormData] = useState<Partial<InsertBooking>>({});
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description:
          "Your gaming slot has been reserved. You will receive a confirmation shortly.",
      });
      setFormData({});
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description:
          error.message || "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.timeSlot ||
      !formData.duration ||
      !formData.gameType
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    bookingMutation.mutate(formData as InsertBooking);
  };

  const pricingPlans = [
    {
      title: "1 Hour Session",
      description: "Perfect for quick gaming",
      price: "₹100",
      borderColor: "border-neon-cyan/20",
      textColor: "text-neon-cyan",
    },
    {
      title: "3 Hours Package",
      description: "Most popular choice",
      price: "₹250",
      borderColor: "border-neon-pink/20",
      textColor: "text-neon-pink",
    },
    {
      title: "Full Day Pass",
      description: "Ultimate gaming experience",
      price: "₹700",
      borderColor: "border-electric-green/20",
      textColor: "text-electric-green",
    },
  ];

  const features = [
    "High-end gaming PCs with RTX 4080",
    "Ultra-wide 144Hz gaming monitors",
    "Premium gaming headsets & keyboards",
    "High-speed fiber internet (1Gbps)",
    "Comfortable gaming chairs",
    "Free refreshments & snacks",
  ];

  return (
    <section
      id="booking"
      className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-neon-pink neon-glow mb-6">
            BOOK YOUR SESSION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reserve your gaming slot in advance and guarantee your spot in
            gaming paradise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="glass-effect border border-neon-cyan/30 rounded-xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-neon-cyan mb-6 flex items-center">
                <CalendarCheck className="mr-3" />
                Quick Booking
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2">Full Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300 mb-2">Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2">Gaming Date</Label>
                    <Input
                      type="date"
                      value={formData.date || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="bg-gray-800/50 border-neon-cyan/30 text-white focus:border-neon-cyan"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300 mb-2">Game Type</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, gameType: value })
                      }
                    >
                      <SelectTrigger className="bg-gray-800/50 border-neon-cyan/30 text-white">
                        <SelectValue placeholder="Select Game Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="esports">Esports</SelectItem>
                        <SelectItem value="aaa">AAA Titles</SelectItem>
                        <SelectItem value="vr">VR Zone</SelectItem>
                        <SelectItem value="console">Console Gaming</SelectItem>
                        <SelectItem value="streaming">
                          Streaming Setup
                        </SelectItem>
                        <SelectItem value="party">Party Mode</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300 mb-2">Duration</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, duration: value })
                      }
                    >
                      <SelectTrigger className="bg-gray-800/50 border-neon-cyan/30 text-white">
                        <SelectValue placeholder="Select Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Hour - ₹100</SelectItem>
                        <SelectItem value="2">2 Hours - ₹180</SelectItem>
                        <SelectItem value="3">3 Hours - ₹250</SelectItem>
                        <SelectItem value="5">5 Hours - ₹400</SelectItem>
                        <SelectItem value="day">Full Day - ₹700</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-gray-300 mb-2">Time Slot</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, timeSlot: value })
                      }
                    >
                      <SelectTrigger className="bg-gray-800/50 border-neon-cyan/30 text-white">
                        <SelectValue placeholder="Select Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={bookingMutation.isPending}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-pink text-black px-8 py-4 rounded-lg font-bold text-lg hover-neon transform transition-all duration-300 uppercase tracking-wider"
                >
                  <Gamepad className="mr-2 h-5 w-5" />
                  {bookingMutation.isPending ? "Booking..." : "Confirm Booking"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Pricing & Info */}
          <div className="space-y-8">
            <Card className="glass-effect border border-neon-pink/30 rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-neon-pink mb-6 flex items-center">
                  <Tags className="mr-3" />
                  Pricing Plans
                </h3>

                <div className="space-y-4">
                  {pricingPlans.map((plan) => (
                    <div
                      key={plan.title}
                      className={`flex justify-between items-center p-4 bg-gray-800/50 rounded-lg border ${plan.borderColor}`}
                    >
                      <div>
                        <h4 className="font-semibold text-white">
                          {plan.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {plan.description}
                        </p>
                      </div>
                      <span className={`text-2xl font-bold ${plan.textColor}`}>
                        {plan.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border border-electric-green/30 rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-electric-green mb-6 flex items-center">
                  <Star className="mr-3" />
                  What's Included
                </h3>

                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
