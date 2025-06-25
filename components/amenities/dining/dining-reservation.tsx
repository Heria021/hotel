"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, Clock, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const restaurants = [
  { id: "signature", name: "Narayani Signature", type: "Fine Dining" },
  { id: "rooftop", name: "Sky Lounge & Bar", type: "Rooftop Bar" },
  { id: "cafe", name: "Garden Café", type: "All-Day Dining" }
];

const timeSlots = [
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", 
  "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
];

export function DiningReservation() {
  const [date, setDate] = React.useState<Date>();
  const [restaurant, setRestaurant] = React.useState("");
  const [time, setTime] = React.useState("");
  const [guests, setGuests] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [specialRequests, setSpecialRequests] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    console.log({
      date,
      restaurant,
      time,
      guests,
      name,
      email,
      phone,
      specialRequests
    });
  };

  return (
    <section id="reservation" className="py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Reservation Form */}
          <div>
            <div className="mb-8">
              <Badge variant="outline" className="mb-4">
                Table Reservations
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Reserve Your Table
              </h2>
              <p className="text-lg text-muted-foreground">
                Book your dining experience at any of our restaurants. We recommend 
                making reservations in advance to ensure availability.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Make a Reservation</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll confirm your reservation within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Restaurant Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="restaurant">Restaurant</Label>
                    <Select value={restaurant} onValueChange={setRestaurant}>
                      <SelectTrigger id="restaurant">
                        <SelectValue placeholder="Select a restaurant" />
                      </SelectTrigger>
                      <SelectContent>
                        {restaurants.map((rest) => (
                          <SelectItem key={rest.id} value={rest.id}>
                            <div>
                              <div className="font-medium">{rest.name}</div>
                              <div className="text-sm text-muted-foreground">{rest.type}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="date"
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Select value={time} onValueChange={setTime}>
                        <SelectTrigger id="time">
                          <Clock className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger id="guests">
                        <Users className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                        <SelectItem value="10+">10+ Guests (Group Booking)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests (Optional)</Label>
                    <Textarea
                      id="requests"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Dietary restrictions, special occasions, seating preferences, etc."
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" size="lg">
                    Request Reservation
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Reservations are subject to availability. We'll confirm your booking within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Policies */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Need immediate assistance or have questions about your reservation?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Reservations</div>
                    <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">dining@narayanihotel.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Reservation Hours</div>
                    <div className="text-sm text-muted-foreground">Daily: 9:00 AM - 10:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card>
              <CardHeader>
                <CardTitle>Reservation Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Cancellation Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Reservations can be cancelled up to 4 hours before your scheduled time. 
                    Late cancellations may be subject to a fee.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Dress Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Smart casual attire required for Narayani Signature. 
                    Business casual for other venues.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Group Bookings</h4>
                  <p className="text-sm text-muted-foreground">
                    For parties of 10 or more, please contact our events team 
                    for special arrangements and menu options.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Special Offers */}
            <Card>
              <CardHeader>
                <CardTitle>Special Dining Offers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Happy Hour</div>
                    <div className="text-sm text-muted-foreground">Sky Lounge & Bar</div>
                  </div>
                  <Badge variant="secondary">5-7 PM</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Wine Tasting</div>
                    <div className="text-sm text-muted-foreground">Every Friday</div>
                  </div>
                  <Badge variant="secondary">7-9 PM</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Chef's Table</div>
                    <div className="text-sm text-muted-foreground">By appointment</div>
                  </div>
                  <Badge variant="secondary">Limited</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
