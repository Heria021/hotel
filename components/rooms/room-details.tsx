import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bed, 
  Users, 
  Maximize, 
  Eye, 
  Building, 
  Wifi, 
  Tv, 
  Coffee, 
  Shield, 
  Car,
  Calendar,
  Star,
  Check,
  MapPin
} from "lucide-react";

interface Room {
  id: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  size: string;
  occupancy: string;
  bedType: string;
  view: string;
  floor: string;
  amenities: string[];
  features: string[];
}

interface RoomDetailsProps {
  room: Room;
}

export function RoomDetails({ room }: RoomDetailsProps) {
  const keyFeatures = [
    { icon: Bed, label: "Bed Type", value: room.bedType },
    { icon: Users, label: "Occupancy", value: room.occupancy },
    { icon: Maximize, label: "Room Size", value: room.size },
    { icon: Eye, label: "View", value: room.view },
    { icon: Building, label: "Floor", value: room.floor },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Room Header */}
            <div>
              <Badge variant="outline" className="mb-4">
                {room.type}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {room.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle>Room Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{feature.label}</div>
                        <div className="text-sm text-muted-foreground">{feature.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Room Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {room.longDescription}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Room Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="amenities" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Included Amenities</CardTitle>
                    <CardDescription>
                      All amenities are included with your stay at no additional charge
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="policies" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Hotel Policies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Check-in / Check-out</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Check-in: 3:00 PM</li>
                        <li>• Check-out: 12:00 PM</li>
                        <li>• Early check-in and late check-out available upon request</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium mb-2">Cancellation Policy</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Free cancellation up to 24 hours before arrival</li>
                        <li>• Cancellations within 24 hours subject to one night charge</li>
                        <li>• No-show bookings will be charged the full stay amount</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium mb-2">Additional Policies</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Non-smoking room</li>
                        <li>• Pets allowed (additional charges may apply)</li>
                        <li>• Maximum occupancy as specified</li>
                        <li>• Valid ID required at check-in</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        {room.originalPrice > room.price && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${room.originalPrice}
                          </span>
                        )}
                        <span className="text-3xl font-bold text-primary">
                          ${room.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">per night</p>
                    </div>
                    {room.originalPrice > room.price && (
                      <Badge className="bg-green-100 text-green-800">
                        Save ${room.originalPrice - room.price}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Base rate</span>
                      <span>${room.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Taxes & fees</span>
                      <span>${Math.round(room.price * 0.15)}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between font-medium">
                      <span>Total per night</span>
                      <span>${room.price + Math.round(room.price * 0.15)}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full" size="lg">
                    <Link href={`/book?room=${room.id}`}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Book This Room
                    </Link>
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Free cancellation • Best rate guaranteed
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="bg-primary/10 p-1 rounded">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span>Located in Downtown District</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="bg-primary/10 p-1 rounded">
                      <Star className="h-4 w-4 text-primary fill-current" />
                    </div>
                    <span>4.9/5 Guest Rating</span>
                  </div>
                  
                  <Separator />
                  
                  <Button variant="outline" className="w-full">
                    Contact Concierge
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Call: +1 (555) 123-4567
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
