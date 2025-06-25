"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Bed, Users, Maximize, Eye, Wifi, Coffee, Car } from "lucide-react";

interface RoomSelectionProps {
  onNext: () => void;
  onPrevious: () => void;
  onDataUpdate: (data: any) => void;
  searchData: any;
  initialData: any;
}

const availableRooms = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    type: "Deluxe Room",
    price: 299,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["King Bed", "2 Guests", "450 sq ft", "City View"],
    amenities: ["Free WiFi", "Smart TV", "Room Service", "Minibar"],
    available: 3
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    type: "Executive Suite",
    price: 599,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["King + Sofa Bed", "4 Guests", "750 sq ft", "Mountain View"],
    amenities: ["Free WiFi", "Executive Lounge", "Butler Service", "Jacuzzi"],
    available: 2,
    popular: true
  },
  {
    id: "family-room",
    name: "Family Room",
    type: "Family Room",
    price: 399,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["King + Twin Beds", "5 Guests", "600 sq ft", "Garden View"],
    amenities: ["Free WiFi", "Kids Amenities", "Connecting Rooms", "Game Console"],
    available: 1
  }
];

export function RoomSelection({ onNext, onPrevious, onDataUpdate, searchData, initialData }: RoomSelectionProps) {
  const [selectedRoom, setSelectedRoom] = React.useState(initialData.selectedRoom || "");

  const handleContinue = () => {
    const room = availableRooms.find(r => r.id === selectedRoom);
    onDataUpdate({ selectedRoom, roomDetails: room });
    onNext();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Select Your Room</CardTitle>
        <CardDescription>
          Choose from our available rooms for your selected dates. All prices include taxes and fees.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedRoom} onValueChange={setSelectedRoom} className="space-y-6">
          {availableRooms.map((room) => (
            <div key={room.id} className="relative">
              <RadioGroupItem value={room.id} id={room.id} className="sr-only" />
              <Label htmlFor={room.id} className="cursor-pointer">
                <Card className={`transition-all hover:shadow-lg ${selectedRoom === room.id ? 'ring-2 ring-primary' : ''}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Room Image */}
                    <div className="relative h-48 md:h-auto">
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover rounded-l-lg"
                      />
                      {room.popular && (
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          Most Popular
                        </Badge>
                      )}
                      <div className="absolute bottom-4 right-4">
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          {room.available} available
                        </Badge>
                      </div>
                    </div>

                    {/* Room Details */}
                    <div className="md:col-span-2 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Badge variant="outline" className="mb-2">{room.type}</Badge>
                          <h3 className="text-xl font-bold">{room.name}</h3>
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

                      {/* Features */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {room.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            {index === 0 && <Bed className="h-4 w-4 text-muted-foreground" />}
                            {index === 1 && <Users className="h-4 w-4 text-muted-foreground" />}
                            {index === 2 && <Maximize className="h-4 w-4 text-muted-foreground" />}
                            {index === 3 && <Eye className="h-4 w-4 text-muted-foreground" />}
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Amenities */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Included Amenities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {room.amenities.map((amenity, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Selection Indicator */}
                      {selectedRoom === room.id && (
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                          <div className="flex items-center space-x-2 text-primary">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm font-medium">Selected for booking</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={onPrevious}>
            Previous Step
          </Button>
          <Button onClick={handleContinue} disabled={!selectedRoom}>
            Continue to Guest Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
