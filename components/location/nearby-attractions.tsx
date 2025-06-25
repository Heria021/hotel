import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Star, 
  Camera,
  Building,
  TreePine,
  ShoppingBag,
  Palette,
  Music,
  Coffee
} from "lucide-react";

const attractions = [
  {
    id: "art-museum",
    name: "National Art Museum",
    category: "Culture",
    description: "World-renowned collection of contemporary and classical art spanning five centuries.",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    distance: "0.3 miles",
    walkTime: "5 min walk",
    rating: 4.8,
    icon: Palette,
    highlights: ["Famous masterpieces", "Interactive exhibits", "Sculpture garden"],
    hours: "10 AM - 6 PM",
    popular: true
  },
  {
    id: "central-park",
    name: "Central Park",
    category: "Nature",
    description: "Beautiful urban oasis with gardens, walking trails, and recreational facilities.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    distance: "0.5 miles",
    walkTime: "8 min walk",
    rating: 4.7,
    icon: TreePine,
    highlights: ["Botanical gardens", "Lake activities", "Jogging trails"],
    hours: "6 AM - 10 PM",
    popular: true
  },
  {
    id: "shopping-district",
    name: "Luxury Shopping District",
    category: "Shopping",
    description: "Premier shopping destination with high-end boutiques and designer stores.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    distance: "0.2 miles",
    walkTime: "3 min walk",
    rating: 4.6,
    icon: ShoppingBag,
    highlights: ["Designer boutiques", "Luxury brands", "Gourmet food court"],
    hours: "10 AM - 9 PM",
    popular: true
  },
  {
    id: "historic-theater",
    name: "Grand Theater",
    category: "Entertainment",
    description: "Historic theater hosting Broadway shows, concerts, and cultural performances.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    distance: "0.4 miles",
    walkTime: "6 min walk",
    rating: 4.9,
    icon: Music,
    highlights: ["Broadway shows", "Historic architecture", "VIP experiences"],
    hours: "Box office: 10 AM - 8 PM",
    popular: false
  },
  {
    id: "financial-district",
    name: "Financial District",
    category: "Business",
    description: "Heart of the city's business activities with iconic skyscrapers and corporate headquarters.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    distance: "0.1 miles",
    walkTime: "2 min walk",
    rating: 4.5,
    icon: Building,
    highlights: ["Iconic skyscrapers", "Business centers", "Corporate dining"],
    hours: "24/7 access",
    popular: false
  },
  {
    id: "coffee-quarter",
    name: "Artisan Coffee Quarter",
    category: "Dining",
    description: "Trendy neighborhood known for specialty coffee shops, cafés, and local eateries.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    distance: "0.3 miles",
    walkTime: "5 min walk",
    rating: 4.7,
    icon: Coffee,
    highlights: ["Specialty coffee", "Local roasters", "Artisan pastries"],
    hours: "6 AM - 10 PM",
    popular: false
  }
];

const categories = [
  { id: "all", name: "All Attractions", count: attractions.length },
  { id: "culture", name: "Culture", count: attractions.filter(a => a.category === "Culture").length },
  { id: "nature", name: "Nature", count: attractions.filter(a => a.category === "Nature").length },
  { id: "shopping", name: "Shopping", count: attractions.filter(a => a.category === "Shopping").length },
  { id: "entertainment", name: "Entertainment", count: attractions.filter(a => a.category === "Entertainment").length },
  { id: "business", name: "Business", count: attractions.filter(a => a.category === "Business").length },
  { id: "dining", name: "Dining", count: attractions.filter(a => a.category === "Dining").length }
];

export function NearbyAttractions() {
  return (
    <section id="attractions" className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Camera className="h-3 w-3 mr-1" />
            Nearby Attractions
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Explore the Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the best attractions, landmarks, and experiences within walking distance 
            of Narayani Hotel. From world-class museums to beautiful parks and shopping districts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge key={category.id} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                
                {attraction.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </Badge>
                )}
                
                <Badge variant="secondary" className="absolute top-4 right-4 bg-white/90 text-black">
                  {attraction.category}
                </Badge>
                
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 p-2 rounded-full">
                    <attraction.icon className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{attraction.name}</CardTitle>
                    <CardDescription className="text-sm mb-3">
                      {attraction.description}
                    </CardDescription>
                  </div>
                </div>
                
                {/* Distance and Rating */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{attraction.distance}</span>
                    <span className="text-muted-foreground">({attraction.walkTime})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{attraction.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Highlights */}
                <div>
                  <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {attraction.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{attraction.hours}</span>
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

        {/* Quick Access */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Concierge Recommendations
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our concierge team is available 24/7 to help you plan your itinerary, 
              make reservations, and provide insider tips for the best local experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Personalized Tours</h4>
              <p className="text-sm text-muted-foreground">Custom walking tours based on your interests</p>
            </div>
            <div>
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">VIP Access</h4>
              <p className="text-sm text-muted-foreground">Skip-the-line tickets and exclusive experiences</p>
            </div>
            <div>
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Round-the-clock assistance and recommendations</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg">
              Contact Concierge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
