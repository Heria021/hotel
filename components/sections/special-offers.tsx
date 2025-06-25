import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Gift, 
  Heart, 
  Sparkles, 
  Users,
  Percent,
  Tag
} from "lucide-react";

const offers = [
  {
    id: "early-bird",
    title: "Early Bird Special",
    description: "Book 30 days in advance and save up to 25% on your stay",
    discount: "25% OFF",
    validUntil: "Limited Time",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    icon: Calendar,
    features: ["Free WiFi", "Complimentary Breakfast", "Late Checkout"],
    cta: "Book Early & Save",
    popular: true
  },
  {
    id: "romantic-getaway",
    title: "Romantic Getaway Package",
    description: "Perfect for couples seeking a romantic escape with special amenities",
    discount: "20% OFF",
    validUntil: "Year Round",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Heart,
    features: ["Champagne & Chocolates", "Couples Spa Treatment", "Candlelit Dinner"],
    cta: "Plan Romance"
  },
  {
    id: "family-fun",
    title: "Family Fun Package",
    description: "Create lasting memories with special family-friendly amenities and activities",
    discount: "15% OFF",
    validUntil: "School Holidays",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Users,
    features: ["Kids Eat Free", "Family Activities", "Connecting Rooms Available"],
    cta: "Family Getaway"
  },
  {
    id: "spa-wellness",
    title: "Spa & Wellness Retreat",
    description: "Rejuvenate your mind, body, and soul with our comprehensive wellness package",
    discount: "30% OFF",
    validUntil: "Spa Services",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Sparkles,
    features: ["Daily Spa Treatment", "Healthy Cuisine", "Yoga Classes"],
    cta: "Wellness Journey"
  },
  {
    id: "business-traveler",
    title: "Business Traveler Deal",
    description: "Enhanced amenities and services designed for the modern business professional",
    discount: "18% OFF",
    validUntil: "Weekdays Only",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    icon: Clock,
    features: ["Executive Lounge Access", "Express Check-in/out", "Business Center"],
    cta: "Business Stay"
  },
  {
    id: "extended-stay",
    title: "Extended Stay Discount",
    description: "Stay longer and save more with our extended stay packages for 7+ nights",
    discount: "35% OFF",
    validUntil: "7+ Nights",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: Gift,
    features: ["Weekly Housekeeping", "Kitchenette Access", "Laundry Service"],
    cta: "Extended Stay"
  }
];

export function SpecialOffers() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Tag className="h-3 w-3 mr-1 " />
            Special Offers
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Exclusive Deals & Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated packages and special offers designed to make 
            your stay even more memorable while providing exceptional value.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={offer.id} className={`group overflow-hidden hover:shadow-lg transition-all duration-300 ${offer.popular ? 'ring-2 ring-primary/20' : ''}`}>
              {offer.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 text-center">
                  Most Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                
                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground font-bold">
                    <Percent className="h-3 w-3 mr-1" />
                    {offer.discount}
                  </Badge>
                </div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 p-2 rounded-full">
                    <offer.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{offer.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {offer.validUntil}
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {offer.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Package Includes:</h4>
                  <ul className="space-y-1">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button asChild className="w-full">
                  <Link href={`/book?offer=${offer.id}`}>
                    {offer.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-2xl">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our concierge team is here to help create a custom package tailored to your specific needs and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Concierge</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/book">View All Rates</Link>
            </Button>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            *Terms and conditions apply. Offers subject to availability. Cannot be combined with other promotions.
          </p>
        </div>
      </div>
    </section>
  );
}
