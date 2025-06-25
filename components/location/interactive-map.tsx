"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Copy,
  ExternalLink,
  Car,
  Train,
  Plane
} from "lucide-react";

export function InteractiveMap() {
  const hotelAddress = "123 Luxury Avenue, Downtown District, City 12345";
  const coordinates = "40.7128° N, 74.0060° W";

  const copyAddress = () => {
    navigator.clipboard.writeText(hotelAddress);
  };

  const openInMaps = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(hotelAddress)}`, '_blank');
  };

  return (
    <section id="map" className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <MapPin className="h-3 w-3 mr-1" />
            Location Details
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Find Us Easily
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Located in the prestigious downtown district, Narayani Hotel offers convenient 
            access to the city's best attractions, business centers, and transportation hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-muted flex items-center justify-center">
                {/* This would be replaced with an actual map component like Google Maps */}
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore our location and nearby attractions
                  </p>
                  <Button onClick={openInMaps}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Hotel Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-2">{hotelAddress}</p>
                  <p className="text-sm text-muted-foreground">{coordinates}</p>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={copyAddress}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Address
                  </Button>
                  <Button variant="outline" size="sm" onClick={openInMaps}>
                    <Navigation className="h-4 w-4 mr-2" />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium">Main Reception</div>
                  <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                </div>
                <div>
                  <div className="font-medium">Concierge</div>
                  <div className="text-sm text-muted-foreground">+1 (555) 123-4568</div>
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">info@narayanihotel.com</div>
                </div>
              </CardContent>
            </Card>

            {/* Distance Information */}
            <Card>
              <CardHeader>
                <CardTitle>Key Distances</CardTitle>
                <CardDescription>
                  Travel times from Narayani Hotel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Plane className="h-4 w-4 text-primary" />
                    <span className="text-sm">International Airport</span>
                  </div>
                  <span className="text-sm font-medium">15 min</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Train className="h-4 w-4 text-primary" />
                    <span className="text-sm">Central Station</span>
                  </div>
                  <span className="text-sm font-medium">8 min</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span className="text-sm">Business District</span>
                  </div>
                  <span className="text-sm font-medium">5 min</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">City Center</span>
                  </div>
                  <span className="text-sm font-medium">3 min</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Neighborhood Information */}
        <div className="mt-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="dining">Dining</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Downtown District</CardTitle>
                  <CardDescription>
                    The heart of the city's business and cultural activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our hotel is situated in the prestigious downtown district, known for its 
                    vibrant atmosphere, world-class shopping, and proximity to major business centers. 
                    The area offers a perfect blend of modern amenities and historic charm, making it 
                    an ideal location for both business and leisure travelers.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="business" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Business Hub</CardTitle>
                  <CardDescription>
                    Major corporations and financial institutions nearby
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The downtown district hosts numerous Fortune 500 companies, making it perfect 
                    for business travelers. Major conference centers, corporate headquarters, and 
                    financial institutions are all within walking distance.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Financial District - 2 blocks</li>
                    <li>• Convention Center - 0.5 miles</li>
                    <li>• Corporate Plaza - 3 blocks</li>
                    <li>• Trade Center - 0.8 miles</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="dining" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Culinary Scene</CardTitle>
                  <CardDescription>
                    World-class restaurants and local favorites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The area boasts an incredible dining scene with Michelin-starred restaurants, 
                    trendy cafés, and authentic local eateries. From fine dining to street food, 
                    every culinary preference is catered to within walking distance.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• 15+ Fine dining restaurants</li>
                    <li>• Local food markets</li>
                    <li>• Rooftop bars and lounges</li>
                    <li>• 24/7 dining options</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="culture" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Arts & Culture</CardTitle>
                  <CardDescription>
                    Museums, theaters, and cultural attractions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Immerse yourself in the city's rich cultural heritage with world-renowned museums, 
                    historic theaters, and art galleries all within easy reach. The district is home 
                    to the city's main cultural corridor.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• National Art Museum - 0.3 miles</li>
                    <li>• Historic Theater District - 2 blocks</li>
                    <li>• Contemporary Art Gallery - 0.4 miles</li>
                    <li>• Cultural Center - 0.6 miles</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
