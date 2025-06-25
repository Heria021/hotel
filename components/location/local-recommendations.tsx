import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Utensils, 
  ShoppingBag, 
  Coffee, 
  Music,
  Star,
  Clock,
  MapPin,
  Heart
} from "lucide-react";

const recommendations = {
  dining: [
    {
      name: "Le Bernardin",
      type: "Fine Dining",
      description: "Michelin-starred seafood restaurant with exquisite French cuisine",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "0.2 miles",
      rating: 4.9,
      priceRange: "$$$$",
      specialty: "Seafood",
      hours: "5:30 PM - 10:30 PM"
    },
    {
      name: "Mama's Kitchen",
      type: "Local Favorite",
      description: "Authentic local cuisine in a cozy, family-run establishment",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "0.3 miles",
      rating: 4.7,
      priceRange: "$$",
      specialty: "Traditional",
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Rooftop Bistro",
      type: "Casual Dining",
      description: "Modern bistro with panoramic city views and craft cocktails",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      distance: "0.1 miles",
      rating: 4.6,
      priceRange: "$$$",
      specialty: "International",
      hours: "4:00 PM - 1:00 AM"
    }
  ],
  shopping: [
    {
      name: "Luxury Plaza",
      type: "Shopping Mall",
      description: "Premium shopping destination with international luxury brands",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "0.2 miles",
      rating: 4.8,
      priceRange: "$$$$",
      specialty: "Luxury Brands",
      hours: "10:00 AM - 9:00 PM"
    },
    {
      name: "Artisan Market",
      type: "Local Market",
      description: "Weekend market featuring local artisans, crafts, and specialty foods",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "0.4 miles",
      rating: 4.5,
      priceRange: "$",
      specialty: "Local Crafts",
      hours: "Sat-Sun: 9:00 AM - 5:00 PM"
    },
    {
      name: "Designer Boutique Row",
      type: "Boutique District",
      description: "Curated collection of independent designers and unique fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      distance: "0.3 miles",
      rating: 4.7,
      priceRange: "$$$",
      specialty: "Designer Fashion",
      hours: "11:00 AM - 8:00 PM"
    }
  ],
  entertainment: [
    {
      name: "Grand Opera House",
      type: "Theater",
      description: "Historic venue hosting world-class opera, ballet, and classical performances",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      distance: "0.4 miles",
      rating: 4.9,
      priceRange: "$$$",
      specialty: "Classical Arts",
      hours: "Box Office: 10:00 AM - 8:00 PM"
    },
    {
      name: "Jazz Corner",
      type: "Music Venue",
      description: "Intimate jazz club featuring local and international artists",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "0.2 miles",
      rating: 4.6,
      priceRange: "$$",
      specialty: "Live Jazz",
      hours: "7:00 PM - 2:00 AM"
    },
    {
      name: "Cinema Complex",
      type: "Movie Theater",
      description: "State-of-the-art cinema with IMAX and premium viewing experiences",
      image: "https://images.unsplash.com/photo-1489599735734-79b4169c2a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "0.3 miles",
      rating: 4.4,
      priceRange: "$$",
      specialty: "Movies",
      hours: "10:00 AM - 12:00 AM"
    }
  ],
  cafes: [
    {
      name: "Blue Bottle Coffee",
      type: "Specialty Coffee",
      description: "Artisanal coffee roastery with single-origin beans and expert baristas",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "0.1 miles",
      rating: 4.8,
      priceRange: "$$",
      specialty: "Specialty Coffee",
      hours: "6:00 AM - 8:00 PM"
    },
    {
      name: "The Reading Room",
      type: "Book Café",
      description: "Cozy café with extensive book collection and quiet reading spaces",
      image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "0.2 miles",
      rating: 4.7,
      priceRange: "$",
      specialty: "Books & Coffee",
      hours: "7:00 AM - 10:00 PM"
    },
    {
      name: "Garden Terrace",
      type: "Outdoor Café",
      description: "Charming outdoor café with garden seating and fresh pastries",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
      distance: "0.3 miles",
      rating: 4.5,
      priceRange: "$$",
      specialty: "Outdoor Dining",
      hours: "8:00 AM - 6:00 PM"
    }
  ]
};

export function LocalRecommendations() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Heart className="h-3 w-3 mr-1" />
            Local Recommendations
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Insider's Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the best local experiences handpicked by our concierge team. 
            From hidden gems to popular favorites, explore the city like a local.
          </p>
        </div>

        {/* Recommendations Tabs */}
        <Tabs defaultValue="dining" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="dining" className="flex items-center">
              <Utensils className="h-4 w-4 mr-2" />
              Dining
            </TabsTrigger>
            <TabsTrigger value="shopping" className="flex items-center">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Shopping
            </TabsTrigger>
            <TabsTrigger value="entertainment" className="flex items-center">
              <Music className="h-4 w-4 mr-2" />
              Entertainment
            </TabsTrigger>
            <TabsTrigger value="cafes" className="flex items-center">
              <Coffee className="h-4 w-4 mr-2" />
              Cafés
            </TabsTrigger>
          </TabsList>

          {Object.entries(recommendations).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                  <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      
                      <Badge variant="secondary" className="absolute top-4 left-4 bg-white/90 text-black">
                        {item.type}
                      </Badge>
                      
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded text-sm">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="font-medium">{item.rating}</span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Key Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{item.distance}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{item.priceRange}</span>
                          <span className="text-muted-foreground">• {item.specialty}</span>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{item.hours}</span>
                      </div>

                      {/* Action Button */}
                      <Button variant="outline" className="w-full">
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Concierge Services */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Personalized Recommendations
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our concierge team knows the city inside and out. Let us create a personalized 
              itinerary based on your interests, preferences, and schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Restaurant Reservations</h4>
              <p className="text-sm text-muted-foreground">Hard-to-get tables at the city's best restaurants</p>
            </div>
            <div>
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Event Tickets</h4>
              <p className="text-sm text-muted-foreground">Shows, concerts, and exclusive events</p>
            </div>
            <div>
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Shopping Assistance</h4>
              <p className="text-sm text-muted-foreground">Personal shopping and boutique recommendations</p>
            </div>
            <div>
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Custom Tours</h4>
              <p className="text-sm text-muted-foreground">Private guided tours tailored to your interests</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg">
              Speak with Concierge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
