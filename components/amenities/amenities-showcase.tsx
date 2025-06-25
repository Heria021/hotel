import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Clock, 
  Users, 
  Award,
  CheckCircle
} from "lucide-react";

const showcaseItems = [
  {
    title: "Award-Winning Dining",
    description: "Our signature restaurant has been recognized with multiple culinary awards and features cuisine by internationally acclaimed chefs.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    stats: [
      { icon: Star, value: "Michelin Guide", label: "Recognition" },
      { icon: Award, value: "5 Awards", label: "Culinary Excellence" },
      { icon: Users, value: "200+", label: "Seats Available" }
    ],
    link: "/amenities/dining"
  },
  {
    title: "Luxury Spa Experience",
    description: "Indulge in our world-class spa featuring therapeutic treatments, wellness programs, and state-of-the-art facilities for complete relaxation.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    stats: [
      { icon: Clock, value: "16 Hours", label: "Daily Operation" },
      { icon: Users, value: "12 Rooms", label: "Treatment Rooms" },
      { icon: Star, value: "4.9/5", label: "Guest Rating" }
    ],
    link: "/amenities/spa"
  }
];

const amenityHighlights = [
  {
    title: "24/7 Concierge Service",
    description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests.",
    icon: Clock,
    features: ["Personal assistance", "Local recommendations", "Reservation services", "Transportation arrangements"]
  },
  {
    title: "Business Excellence",
    description: "State-of-the-art business facilities with modern technology and professional support for all your corporate needs.",
    icon: Users,
    features: ["Conference rooms", "High-speed internet", "Audiovisual equipment", "Secretarial services"]
  },
  {
    title: "Wellness & Recreation",
    description: "Comprehensive fitness and wellness facilities to help you maintain your health and relaxation routine.",
    icon: Star,
    features: ["Modern gym equipment", "Swimming pool", "Yoga classes", "Personal training"]
  }
];

export function AmenitiesShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Featured Amenities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Featured Experiences
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Signature Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most celebrated facilities that set us apart as a premier luxury destination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {showcaseItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {item.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <stat.icon className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <div className="font-semibold text-sm">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href={item.link} legacyBehavior>Explore {item.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Amenity Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {amenityHighlights.map((highlight, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground mb-4">{highlight.description}</p>
                
                <div className="space-y-2">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Experience Luxury at Every Turn
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            From the moment you arrive until your departure, our comprehensive amenities 
            and personalized services ensure an unforgettable stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/book">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Concierge</Link>
            </Button>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Amenity Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-background rounded-lg p-4">
              <div className="font-medium mb-1">Restaurant</div>
              <div className="text-muted-foreground">6:00 AM - 11:00 PM</div>
            </div>
            <div className="bg-background rounded-lg p-4">
              <div className="font-medium mb-1">Spa & Wellness</div>
              <div className="text-muted-foreground">6:00 AM - 10:00 PM</div>
            </div>
            <div className="bg-background rounded-lg p-4">
              <div className="font-medium mb-1">Fitness Center</div>
              <div className="text-muted-foreground">5:00 AM - 11:00 PM</div>
            </div>
            <div className="bg-background rounded-lg p-4">
              <div className="font-medium mb-1">Concierge</div>
              <div className="text-muted-foreground">24/7 Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
