"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Bed, 
  Users, 
  Wifi, 
  Car, 
  Coffee, 
  Tv, 
  Bath, 
  Wind,
  Mountain,
  Building,
  Filter,
  X
} from "lucide-react";

const roomTypes = [
  { id: "deluxe", label: "Deluxe Room", count: 12 },
  { id: "executive", label: "Executive Suite", count: 8 },
  { id: "presidential", label: "Presidential Suite", count: 2 },
  { id: "family", label: "Family Room", count: 6 },
];

const amenities = [
  { id: "wifi", label: "Free WiFi", icon: Wifi },
  { id: "parking", label: "Parking", icon: Car },
  { id: "room-service", label: "Room Service", icon: Coffee },
  { id: "tv", label: "Smart TV", icon: Tv },
  { id: "bathtub", label: "Bathtub", icon: Bath },
  { id: "ac", label: "Air Conditioning", icon: Wind },
];

const views = [
  { id: "city", label: "City View", icon: Building },
  { id: "mountain", label: "Mountain View", icon: Mountain },
  { id: "garden", label: "Garden View", icon: Mountain },
];

export function RoomsFilters() {
  const [priceRange, setPriceRange] = React.useState([100, 800]);
  const [selectedRoomTypes, setSelectedRoomTypes] = React.useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = React.useState<string[]>([]);
  const [selectedViews, setSelectedViews] = React.useState<string[]>([]);
  const [bedType, setBedType] = React.useState("");
  const [guests, setGuests] = React.useState("");

  const handleRoomTypeChange = (roomTypeId: string, checked: boolean) => {
    if (checked) {
      setSelectedRoomTypes([...selectedRoomTypes, roomTypeId]);
    } else {
      setSelectedRoomTypes(selectedRoomTypes.filter(id => id !== roomTypeId));
    }
  };

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenityId]);
    } else {
      setSelectedAmenities(selectedAmenities.filter(id => id !== amenityId));
    }
  };

  const handleViewChange = (viewId: string, checked: boolean) => {
    if (checked) {
      setSelectedViews([...selectedViews, viewId]);
    } else {
      setSelectedViews(selectedViews.filter(id => id !== viewId));
    }
  };

  const clearAllFilters = () => {
    setPriceRange([100, 800]);
    setSelectedRoomTypes([]);
    setSelectedAmenities([]);
    setSelectedViews([]);
    setBedType("");
    setGuests("");
  };

  const activeFiltersCount = selectedRoomTypes.length + selectedAmenities.length + selectedViews.length + 
    (bedType ? 1 : 0) + (guests ? 1 : 0);

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </CardTitle>
          {activeFiltersCount > 0 && (
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{activeFiltersCount}</Badge>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Price Range (per night)</Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            min={50}
            step={25}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <Separator />

        {/* Room Type */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Room Type</Label>
          <div className="space-y-2">
            {roomTypes.map((roomType) => (
              <div key={roomType.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={roomType.id}
                    checked={selectedRoomTypes.includes(roomType.id)}
                    onCheckedChange={(checked) => handleRoomTypeChange(roomType.id, checked as boolean)}
                  />
                  <Label htmlFor={roomType.id} className="text-sm">
                    {roomType.label}
                  </Label>
                </div>
                <span className="text-xs text-muted-foreground">({roomType.count})</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bed Type */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Bed Type</Label>
          <Select value={bedType} onValueChange={setBedType}>
            <SelectTrigger>
              <SelectValue placeholder="Any bed type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="king">King Bed</SelectItem>
              <SelectItem value="queen">Queen Bed</SelectItem>
              <SelectItem value="twin">Twin Beds</SelectItem>
              <SelectItem value="double">Double Bed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Guests */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Number of Guests</Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger>
              <Users className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Any number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Amenities */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Amenities</Label>
          <div className="space-y-2">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity.id}
                  checked={selectedAmenities.includes(amenity.id)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
                />
                <Label htmlFor={amenity.id} className="text-sm flex items-center">
                  <amenity.icon className="h-4 w-4 mr-2" />
                  {amenity.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* View */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">View</Label>
          <div className="space-y-2">
            {views.map((view) => (
              <div key={view.id} className="flex items-center space-x-2">
                <Checkbox
                  id={view.id}
                  checked={selectedViews.includes(view.id)}
                  onCheckedChange={(checked) => handleViewChange(view.id, checked as boolean)}
                />
                <Label htmlFor={view.id} className="text-sm flex items-center">
                  <view.icon className="h-4 w-4 mr-2" />
                  {view.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
}
