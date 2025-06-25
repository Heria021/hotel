import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bed, 
  Utensils, 
  Waves, 
  Dumbbell, 
  Car, 
  Wifi, 
  Coffee, 
  Shield,
  Clock,
  Users
} from "lucide-react";

const highlights = [
  {
    icon: Bed,
    title: "Luxury Accommodations",
    description: "Elegantly appointed rooms and suites with premium amenities and stunning city views.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/rooms"
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Award-winning restaurants serving international cuisine and local specialties.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/amenities/dining"
  },
  {
    icon: Waves,
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind with our world-class spa treatments and facilities.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/amenities/spa"
  }
];

const amenities = [
  { icon: Wifi, text: "Complimentary WiFi" },
  { icon: Car, text: "Valet Parking" },
  { icon: Coffee, text: "24/7 Room Service" },
  { icon: Dumbbell, text: "Fitness Center" },
  { icon: Shield, text: "Security Service" },
  { icon: Clock, text: "Concierge Service" },
  { icon: Users, text: "Business Center" },
  { icon: Waves, text: "Swimming Pool" },
];

export function HotelHighlights() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Narayani
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Experience Unmatched Luxury
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Narayani Hotel the perfect choice for discerning travelers. 
            From our elegant accommodations to world-class amenities, every detail is designed 
            to exceed your expectations.
          </p>
        </div>

        {/* Main Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 p-2 rounded-full">
                    <highlight.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
                <CardDescription className="text-base">
                  {highlight.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={highlight.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Premium Amenities & Services
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enjoy a comprehensive range of amenities designed to make your stay comfortable and memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <amenity.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Ready to Experience Luxury?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book your stay today and discover why Narayani Hotel is the preferred choice 
            for luxury travelers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/book">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
