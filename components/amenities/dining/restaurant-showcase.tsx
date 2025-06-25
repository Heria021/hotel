import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Clock, 
  Users, 
  Wine,
  Coffee,
  Utensils,
  MapPin
} from "lucide-react";

const restaurants = [
  {
    id: "signature",
    name: "Narayani Signature",
    type: "Fine Dining",
    description: "Our flagship restaurant featuring contemporary international cuisine with locally sourced ingredients.",
    longDescription: "Experience culinary artistry at its finest with our signature restaurant. Chef Marcus Thompson creates innovative dishes that blend international techniques with local flavors, earning recognition from food critics worldwide.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    cuisine: "Contemporary International",
    priceRange: "$$$",
    capacity: "120 seats",
    hours: "6:00 PM - 11:00 PM",
    location: "Ground Floor",
    features: ["Michelin Recognition", "Chef's Table", "Wine Pairing", "Private Dining"],
    awards: ["Best Restaurant 2024", "Culinary Excellence Award"],
    popular: true
  },
  {
    id: "rooftop",
    name: "Sky Lounge & Bar",
    type: "Rooftop Bar",
    description: "Panoramic city views with handcrafted cocktails and light bites in an elegant rooftop setting.",
    longDescription: "Elevate your evening at our sophisticated rooftop bar offering breathtaking 360-degree city views. Our master mixologists craft innovative cocktails using premium spirits and fresh ingredients.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    cuisine: "Cocktails & Light Bites",
    priceRange: "$$",
    capacity: "80 seats",
    hours: "5:00 PM - 2:00 AM",
    location: "30th Floor",
    features: ["Panoramic Views", "Craft Cocktails", "Live Music", "Outdoor Terrace"],
    awards: ["Best Bar View 2024"],
    popular: true
  },
  {
    id: "cafe",
    name: "Garden Café",
    type: "All-Day Dining",
    description: "Casual dining with fresh, healthy options in a relaxed garden-inspired atmosphere.",
    longDescription: "Start your day or enjoy a leisurely meal at our Garden Café. Featuring fresh salads, artisanal sandwiches, and healthy options in a bright, airy space overlooking our landscaped gardens.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    cuisine: "International Café",
    priceRange: "$",
    capacity: "60 seats",
    hours: "6:00 AM - 10:00 PM",
    location: "Lobby Level",
    features: ["All-Day Menu", "Healthy Options", "Garden Views", "Takeaway Available"],
    awards: [],
    popular: false
  }
];

export function RestaurantShowcase() {
  return (
    <section id="restaurants" className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Dining Venues
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Our Restaurants & Bars
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From fine dining to casual café experiences, discover our diverse collection 
            of restaurants and bars, each offering unique flavors and atmospheres.
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="space-y-12">
          {restaurants.map((restaurant, index) => (
            <div key={restaurant.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative h-96 rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
                {restaurant.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </Badge>
                )}
                {restaurant.awards.length > 0 && (
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900">
                    Award Winner
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <Badge variant="outline" className="mb-3">
                    {restaurant.type}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    {restaurant.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {restaurant.description}
                  </p>
                  <p className="text-muted-foreground">
                    {restaurant.longDescription}
                  </p>
                </div>

                {/* Restaurant Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Utensils className="h-4 w-4 text-primary" />
                      <span>{restaurant.cuisine}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{restaurant.capacity}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{restaurant.location}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium mb-3">Features & Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                {restaurant.awards.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-3">Awards & Recognition:</h4>
                    <div className="space-y-1">
                      {restaurant.awards.map((award, awardIndex) => (
                        <div key={awardIndex} className="flex items-center space-x-2 text-sm">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link href="#reservation">Make Reservation</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/amenities/dining/${restaurant.id}`}>View Menu</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Room Service */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                24/7 Room Service
              </h3>
              <p className="text-muted-foreground mb-6">
                Enjoy our signature dishes and beverages in the comfort of your room. 
                Our room service menu features selections from all our restaurants, 
                available around the clock.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Coffee className="h-4 w-4 text-primary" />
                  <span className="text-sm">24/7 availability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Utensils className="h-4 w-4 text-primary" />
                  <span className="text-sm">Full menu selection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">30-minute delivery</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Button size="lg">
                Order Room Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
