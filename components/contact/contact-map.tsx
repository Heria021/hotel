"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Navigation,
  Car,
  Train,
  Plane,
  ExternalLink,
  Copy
} from "lucide-react";

const directions = [
  {
    method: "From Airport",
    icon: Plane,
    description: "Take the hotel shuttle or taxi from International Airport",
    duration: "15 minutes",
    instructions: [
      "Exit the airport and look for hotel shuttle signs",
      "Shuttle departs every 30 minutes from Terminal A",
      "Alternatively, take a taxi or rideshare service",
      "Follow signs for Downtown District"
    ]
  },
  {
    method: "By Car",
    icon: Car,
    description: "Convenient access via major highways with valet parking",
    duration: "Varies",
    instructions: [
      "Take Highway 101 to Downtown District exit",
      "Follow signs for Luxury Avenue",
      "Hotel entrance is on the right side",
      "Valet parking available at main entrance"
    ]
  },
  {
    method: "Public Transit",
    icon: Train,
    description: "Metro and bus connections to hotel vicinity",
    duration: "5-10 minutes walk",
    instructions: [
      "Take Metro Line 1 to Central Station",
      "Exit at Downtown District stop",
      "Walk 5 minutes north on Luxury Avenue",
      "Hotel will be on your left"
    ]
  }
];

const nearbyLandmarks = [
  { name: "Central Station", distance: "0.5 miles", direction: "South" },
  { name: "Financial District", distance: "0.2 miles", direction: "East" },
  { name: "Art Museum", distance: "0.3 miles", direction: "North" },
  { name: "Shopping District", distance: "0.1 miles", direction: "West" }
];

export function ContactMap() {
  const hotelAddress = "123 Luxury Avenue, Downtown District, City 12345";
  
  const copyAddress = () => {
    navigator.clipboard.writeText(hotelAddress);
  };

  const openInMaps = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(hotelAddress)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <MapPin className="h-3 w-3 mr-1" />
            Location & Directions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Find Us Easily
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of the downtown district with convenient access 
            from all major transportation hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Hotel Location
                </CardTitle>
                <CardDescription>
                  Interactive map showing our exact location and nearby attractions
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {/* Map Placeholder */}
                <div className="relative h-96 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground mb-4 max-w-md">
                      Click below to open our location in your preferred map application
                    </p>
                    <div className="space-y-2">
                      <Button onClick={openInMaps} className="mr-2">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open in Maps
                      </Button>
                      <Button variant="outline" onClick={copyAddress}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Address
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">Narayani Hotel</h4>
                    <p className="text-muted-foreground mb-4">
                      123 Luxury Avenue<br />
                      Downtown District<br />
                      City, State 12345<br />
                      United States
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={openInMaps}>
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" size="sm" onClick={copyAddress}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Directions & Info */}
          <div className="space-y-6">
            {/* Transportation Options */}
            <Card>
              <CardHeader>
                <CardTitle>How to Get Here</CardTitle>
                <CardDescription>
                  Multiple transportation options to reach our hotel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {directions.map((direction, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <direction.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{direction.method}</h4>
                        <p className="text-sm text-muted-foreground">{direction.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{direction.description}</p>
                    <div className="space-y-1">
                      {direction.instructions.map((instruction, instrIndex) => (
                        <div key={instrIndex} className="text-xs text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{instruction}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nearby Landmarks */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Landmarks</CardTitle>
                <CardDescription>
                  Key locations within walking distance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{landmark.name}</div>
                        <div className="text-xs text-muted-foreground">{landmark.direction}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {landmark.distance}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Parking Information */}
            <Card>
              <CardHeader>
                <CardTitle>Parking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Car className="h-4 w-4 text-primary" />
                  <span className="text-sm">Valet parking available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">$35 per night</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">24/7 in/out privileges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Secure covered parking</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Directions */}
            <Card className="bg-primary/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-medium mb-2">Need Help Finding Us?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Our concierge team can provide detailed directions and arrange transportation.
                </p>
                <Button size="sm">
                  <Navigation className="h-4 w-4 mr-2" />
                  Call for Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
