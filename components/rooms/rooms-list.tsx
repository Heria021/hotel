import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Bed, 
  Users, 
  Maximize, 
  Wifi, 
  Car, 
  Coffee, 
  Tv, 
  Bath, 
  Wind,
  Star,
  Eye,
  Calendar
} from "lucide-react";

const rooms = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    type: "Deluxe Room",
    description: "Spacious and elegantly appointed room with modern amenities and city views.",
    price: 299,
    originalPrice: 349,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    size: "450 sq ft",
    occupancy: "2 guests",
    bedType: "1 King Bed",
    view: "City View",
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar"],
    features: [
      { icon: Bed, text: "King Bed" },
      { icon: Users, text: "2 Guests" },
      { icon: Maximize, text: "450 sq ft" },
      { icon: Eye, text: "City View" }
    ],
    available: true,
    popular: false
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    type: "Executive Suite",
    description: "Luxurious suite with separate living area, premium amenities, and stunning views.",
    price: 599,
    originalPrice: 699,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    ],
    size: "750 sq ft",
    occupancy: "4 guests",
    bedType: "1 King Bed + Sofa Bed",
    view: "Mountain View",
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Minibar", "Bathtub", "Executive Lounge Access"],
    features: [
      { icon: Bed, text: "King + Sofa Bed" },
      { icon: Users, text: "4 Guests" },
      { icon: Maximize, text: "750 sq ft" },
      { icon: Eye, text: "Mountain View" }
    ],
    available: true,
    popular: true
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    type: "Presidential Suite",
    description: "The ultimate in luxury with panoramic views, private terrace, and personalized service.",
    price: 1299,
    originalPrice: 1499,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    ],
    size: "1200 sq ft",
    occupancy: "6 guests",
    bedType: "2 King Beds",
    view: "Panoramic View",
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "24/7 Butler Service", "Premium Minibar", "Jacuzzi", "Private Terrace", "Executive Lounge Access"],
    features: [
      { icon: Bed, text: "2 King Beds" },
      { icon: Users, text: "6 Guests" },
      { icon: Maximize, text: "1200 sq ft" },
      { icon: Eye, text: "Panoramic View" }
    ],
    available: true,
    popular: false
  },
  {
    id: "family-room",
    name: "Family Room",
    type: "Family Room",
    description: "Perfect for families with connecting rooms and child-friendly amenities.",
    price: 399,
    originalPrice: 449,
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
    ],
    size: "600 sq ft",
    occupancy: "5 guests",
    bedType: "1 King + 2 Twin Beds",
    view: "Garden View",
    amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Room Service", "Kids Amenities", "Connecting Rooms Available"],
    features: [
      { icon: Bed, text: "King + Twin Beds" },
      { icon: Users, text: "5 Guests" },
      { icon: Maximize, text: "600 sq ft" },
      { icon: Eye, text: "Garden View" }
    ],
    available: true,
    popular: false
  }
];

export function RoomsList() {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Available Rooms</h2>
          <p className="text-muted-foreground">{rooms.length} rooms found</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="text-sm border rounded px-2 py-1">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
            <option>Room Size</option>
          </select>
        </div>
      </div>
      {/* Rooms Grid */}
      <div className="space-y-6">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Room Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
                {room.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white">
                    +{room.images.length - 1} photos
                  </Badge>
                </div>
              </div>

              {/* Room Details */}
              <div className="md:col-span-2 p-6">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {room.type}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                      </div>
                      <div className="text-right">
                        {room.originalPrice > room.price && (
                          <div className="text-sm text-muted-foreground line-through">
                            ${room.originalPrice}
                          </div>
                        )}
                        <div className="text-2xl font-bold text-primary">
                          ${room.price}
                        </div>
                        <div className="text-sm text-muted-foreground">per night</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{room.description}</p>

                    {/* Room Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <feature.icon className="h-4 w-4 text-muted-foreground" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Amenities */}
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Amenities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {room.amenities.slice(0, 5).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {room.amenities.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{room.amenities.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="flex-1">
                      <Link href={`/rooms/${room.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href={`/book?room=${room.id}`}>
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Now
                      </Link>
                    </Button>
                  </div>

                  {/* Availability Status */}
                  <div className="mt-2 text-center">
                    {room.available ? (
                      <span className="text-sm text-green-600">✓ Available for your dates</span>
                    ) : (
                      <span className="text-sm text-red-600">✗ Not available for selected dates</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Rooms
        </Button>
      </div>
    </div>
  );
}
