import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bed, 
  Users, 
  Maximize, 
  Eye,
  Star
} from "lucide-react";

interface SimilarRoomsProps {
  currentRoomId: string;
}

const allRooms = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    type: "Deluxe Room",
    description: "Spacious and elegantly appointed room with modern amenities and city views.",
    price: 299,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    size: "450 sq ft",
    occupancy: "2 guests",
    bedType: "1 King Bed",
    view: "City View",
    popular: false
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    type: "Executive Suite",
    description: "Luxurious suite with separate living area, premium amenities, and stunning views.",
    price: 599,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    size: "750 sq ft",
    occupancy: "4 guests",
    bedType: "1 King Bed + Sofa Bed",
    view: "Mountain View",
    popular: true
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    type: "Presidential Suite",
    description: "The ultimate in luxury with panoramic views, private terrace, and personalized service.",
    price: 1299,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    size: "1200 sq ft",
    occupancy: "6 guests",
    bedType: "2 King Beds",
    view: "Panoramic View",
    popular: false
  },
  {
    id: "family-room",
    name: "Family Room",
    type: "Family Room",
    description: "Perfect for families with connecting rooms and child-friendly amenities.",
    price: 399,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    size: "600 sq ft",
    occupancy: "5 guests",
    bedType: "1 King + 2 Twin Beds",
    view: "Garden View",
    popular: false
  },
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Room",
    type: "Deluxe Room",
    description: "Comfortable twin bed configuration perfect for business travelers or friends.",
    price: 279,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
    size: "420 sq ft",
    occupancy: "2 guests",
    bedType: "2 Twin Beds",
    view: "City View",
    popular: false
  },
  {
    id: "junior-suite",
    name: "Junior Suite",
    type: "Junior Suite",
    description: "Spacious suite with sitting area and enhanced amenities for extended stays.",
    price: 449,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    size: "550 sq ft",
    occupancy: "3 guests",
    bedType: "1 King Bed + Sofa",
    view: "Garden View",
    popular: false
  }
];

export function SimilarRooms({ currentRoomId }: SimilarRoomsProps) {
  // Filter out the current room and get 3 similar rooms
  const similarRooms = allRooms
    .filter(room => room.id !== currentRoomId)
    .slice(0, 3);

  if (similarRooms.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            You Might Also Like
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore other exceptional accommodations that offer unique experiences 
            and premium amenities.
          </p>
        </div>

        {/* Similar Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarRooms.map((room) => (
            <Card key={room.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                
                {room.popular && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </Badge>
                )}
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 px-2 py-1 rounded text-sm font-semibold">
                    ${room.price}/night
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">
                      {room.type}
                    </Badge>
                    <CardTitle className="text-xl mb-2">{room.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {room.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Room Features */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span>{room.bedType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{room.occupancy}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize className="h-4 w-4 text-muted-foreground" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span>{room.view}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    {room.originalPrice > room.price && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${room.originalPrice}
                      </div>
                    )}
                    <div className="text-lg font-bold text-primary">
                      ${room.price}
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        /night
                      </span>
                    </div>
                  </div>
                  {room.originalPrice > room.price && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Save ${room.originalPrice - room.price}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/rooms/${room.id}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href={`/book?room=${room.id}`}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Rooms CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/rooms">
              View All Rooms & Suites
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
