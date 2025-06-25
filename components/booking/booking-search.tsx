"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookingSearchProps {
  onNext: () => void;
  onDataUpdate: (data: any) => void;
  initialData: any;
}

export function BookingSearch({ onNext, onDataUpdate, initialData }: BookingSearchProps) {
  const [checkIn, setCheckIn] = React.useState<Date>(initialData.checkIn || undefined);
  const [checkOut, setCheckOut] = React.useState<Date>(initialData.checkOut || undefined);
  const [guests, setGuests] = React.useState(initialData.guests || "2");
  const [rooms, setRooms] = React.useState(initialData.rooms || "1");

  const handleSearch = () => {
    const searchData = {
      checkIn,
      checkOut,
      guests: parseInt(guests),
      rooms: parseInt(rooms)
    };
    
    onDataUpdate(searchData);
    onNext();
  };

  const isValid = checkIn && checkOut && checkOut > checkIn;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Search for Rooms</CardTitle>
        <CardDescription>
          Select your travel dates and preferences to find available accommodations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Check-in Date */}
          <div className="space-y-2">
            <Label htmlFor="checkin">Check-in Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="checkin"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <Label htmlFor="checkout">Check-out Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="checkout"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  disabled={(date) => date < (checkIn || new Date())}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Number of Guests */}
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger id="guests">
                <Users className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Number of Rooms */}
          <div className="space-y-2">
            <Label htmlFor="rooms">Number of Rooms</Label>
            <Select value={rooms} onValueChange={setRooms}>
              <SelectTrigger id="rooms">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Room" : "Rooms"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Special Requests */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h4 className="font-medium mb-2">Special Offers Available</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="text-sm">
              <div className="font-medium text-green-600">Early Bird Special</div>
              <div className="text-muted-foreground">Save 25% booking 30 days ahead</div>
            </div>
            <div className="text-sm">
              <div className="font-medium text-blue-600">Extended Stay</div>
              <div className="text-muted-foreground">35% off for 7+ nights</div>
            </div>
            <div className="text-sm">
              <div className="font-medium text-purple-600">Weekend Package</div>
              <div className="text-muted-foreground">Includes breakfast & spa credit</div>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleSearch} 
          className="w-full" 
          size="lg"
          disabled={!isValid}
        >
          <MapPin className="mr-2 h-4 w-4" />
          Search Available Rooms
        </Button>

        {!isValid && (
          <p className="text-sm text-muted-foreground text-center">
            Please select valid check-in and check-out dates to continue.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
