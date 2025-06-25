import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Utensils, 
  Waves, 
  Briefcase, 
  Dumbbell, 
  Car, 
  Users,
  Coffee,
  Headphones,
  Clock,
  Shield
} from "lucide-react";

const amenities = [
  {
    id: "dining",
    title: "Restaurant & Bar",
    description: "Award-winning cuisine and expertly crafted cocktails in elegant settings.",
    longDescription: "Experience culinary excellence at our signature restaurant featuring international cuisine and local specialties. Our rooftop bar offers panoramic city views with handcrafted cocktails and premium spirits.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Utensils,
    features: ["Fine Dining Restaurant", "Rooftop Bar", "Room Service", "Private Dining"],
    hours: "Restaurant: 6:00 AM - 11:00 PM | Bar: 5:00 PM - 2:00 AM",
    link: "/amenities/dining",
    popular: true
  },
  {
    id: "spa",
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind with our world-class spa treatments and facilities.",
    longDescription: "Our luxury spa offers a tranquil escape with a full range of therapeutic treatments, massage therapies, and wellness programs. Features include treatment rooms, relaxation areas, sauna, and steam room.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Waves,
    features: ["Massage Therapy", "Facial Treatments", "Sauna & Steam", "Wellness Programs"],
    hours: "Daily: 6:00 AM - 10:00 PM",
    link: "/amenities/spa",
    popular: true
  },
  {
    id: "business",
    title: "Business Center",
    description: "State-of-the-art facilities for meetings, conferences, and business needs.",
    longDescription: "Our comprehensive business center provides everything you need for successful meetings and events. Features modern conference rooms, high-speed internet, audiovisual equipment, and professional support services.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    icon: Briefcase,
    features: ["Conference Rooms", "Business Lounge", "Printing Services", "Secretarial Support"],
    hours: "24/7 Access",
    link: "/amenities/business",
    popular: false
  },
  {
    id: "fitness",
    title: "Fitness Center",
    description: "Modern fitness equipment and personal training services to maintain your wellness routine.",
    longDescription: "Stay active with our fully equipped fitness center featuring the latest cardio and strength training equipment. Personal trainers are available for customized workout programs and fitness consultations.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Dumbbell,
    features: ["Cardio Equipment", "Weight Training", "Personal Trainers", "Group Classes"],
    hours: "Daily: 5:00 AM - 11:00 PM",
    link: "/amenities/fitness",
    popular: false
  },
  {
    id: "pool",
    title: "Swimming Pool",
    description: "Outdoor pool with poolside service and comfortable lounging areas.",
    longDescription: "Relax and unwind at our beautiful outdoor swimming pool surrounded by comfortable loungers and cabanas. Enjoy poolside service with refreshing drinks and light meals throughout the day.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Waves,
    features: ["Outdoor Pool", "Pool Bar", "Cabanas", "Poolside Service"],
    hours: "Daily: 6:00 AM - 10:00 PM",
    link: "/amenities/pool",
    popular: true
  },
  {
    id: "concierge",
    title: "Concierge Services",
    description: "Personalized assistance to help you make the most of your stay and explore the city.",
    longDescription: "Our experienced concierge team is dedicated to making your stay exceptional. From restaurant reservations and event tickets to transportation arrangements and local recommendations, we're here to help.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    icon: Users,
    features: ["Personal Assistance", "Reservations", "Transportation", "Local Recommendations"],
    hours: "24/7 Service",
    link: "/amenities/concierge",
    popular: false
  }
];

export function AmenitiesGrid() {
  return (
    <section id="amenities" className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Premium Amenities
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            World-Class Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From fine dining and spa treatments to business facilities and recreational activities, 
            our comprehensive amenities ensure every aspect of your stay exceeds expectations.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={amenity.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                
                {amenity.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 p-2 rounded-full">
                    <amenity.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{amenity.title}</CardTitle>
                <CardDescription className="text-base">
                  {amenity.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="font-medium text-sm mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {amenity.features.slice(0, 3).map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {amenity.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{amenity.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{amenity.hours}</span>
                </div>

                {/* CTA Button */}
                <Button asChild className="w-full">
                  <Link href={amenity.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Additional Services
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your stay with our comprehensive range of additional services and conveniences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { icon: Car, text: "Valet Parking" },
              { icon: Coffee, text: "24/7 Room Service" },
              { icon: Headphones, text: "Audio/Visual Equipment" },
              { icon: Shield, text: "Security Service" },
              { icon: Users, text: "Event Planning" },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
