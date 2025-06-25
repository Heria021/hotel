"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  Share,
  Star
} from "lucide-react";

interface BookingConfirmationProps {
  bookingData: any;
}

export function BookingConfirmation({ bookingData }: BookingConfirmationProps) {
  const confirmationNumber = "NAR" + Math.random().toString(36).substr(2, 9).toUpperCase();
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Success Header */}
      <Card className="text-center bg-green-50 border-green-200">
        <CardContent className="p-8">
          <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-green-700 mb-4">
            Thank you for choosing Narayani Hotel. Your reservation has been successfully confirmed.
          </p>
          <Badge className="bg-green-600 text-white text-lg px-4 py-2">
            Confirmation: {confirmationNumber}
          </Badge>
        </CardContent>
      </Card>

      {/* Booking Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Reservation Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Guest Information</h4>
              <p>{bookingData.guest?.firstName} {bookingData.guest?.lastName}</p>
              <p className="text-sm text-muted-foreground">{bookingData.guest?.email}</p>
              <p className="text-sm text-muted-foreground">{bookingData.guest?.phone}</p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Room Details</h4>
              <p className="font-medium">{bookingData.room?.roomDetails?.name}</p>
              <p className="text-sm text-muted-foreground">{bookingData.room?.roomDetails?.type}</p>
              <p className="text-sm text-muted-foreground">
                {bookingData.search?.guests} guests • {bookingData.search?.rooms} room
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium mb-2">Stay Dates</h4>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Check-in: March 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Check-out: March 18, 2024</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">3 nights</p>
            </div>

            {bookingData.guest?.specialRequests && (
              <>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Special Requests</h4>
                  <p className="text-sm text-muted-foreground">
                    {bookingData.guest.specialRequests}
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Room rate (3 nights)</span>
                <span>${(bookingData.room?.roomDetails?.price || 0) * 3}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & fees</span>
                <span>${Math.round((bookingData.room?.roomDetails?.price || 0) * 3 * 0.15)}</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between font-medium text-lg">
              <span>Total Paid</span>
              <span>${(bookingData.room?.roomDetails?.price || 0) * 3 + Math.round((bookingData.room?.roomDetails?.price || 0) * 3 * 0.15)}</span>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-medium mb-2">Payment Method</h4>
              <p className="text-sm">Credit Card ending in ****1234</p>
              <p className="text-sm text-muted-foreground">Charged on confirmation</p>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✓ Free cancellation until 24 hours before check-in</p>
              <p>✓ Complimentary WiFi included</p>
              <p>✓ Complimentary breakfast included</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hotel Information */}
      <Card>
        <CardHeader>
          <CardTitle>Hotel Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Narayani Hotel</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>123 Luxury Avenue, Downtown District</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>info@narayanihotel.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Check-in Information</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Check-in: 3:00 PM</p>
              <p>Check-out: 12:00 PM</p>
              <p>Early check-in available upon request</p>
              <p>Valid ID required at check-in</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg">
          <Download className="h-4 w-4 mr-2" />
          Download Confirmation
        </Button>
        <Button variant="outline" size="lg">
          <Share className="h-4 w-4 mr-2" />
          Share Booking
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">
            Contact Hotel
          </Link>
        </Button>
      </div>

      {/* Next Steps */}
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-1">Confirmation Email</h4>
              <p className="text-muted-foreground">
                You'll receive a detailed confirmation email within 5 minutes.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Pre-Arrival</h4>
              <p className="text-muted-foreground">
                We'll contact you 24 hours before arrival with check-in details.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">During Your Stay</h4>
              <p className="text-muted-foreground">
                Our concierge team is available 24/7 for any assistance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feedback Request */}
      <Card className="text-center">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Help Us Improve</h3>
          <p className="text-muted-foreground mb-4">
            How was your booking experience? Your feedback helps us serve you better.
          </p>
          <div className="flex justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 text-yellow-400 fill-current cursor-pointer hover:scale-110 transition-transform" />
            ))}
          </div>
          <Button variant="outline">
            Leave Feedback
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
