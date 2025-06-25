"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface GuestDetailsProps {
  onNext: () => void;
  onPrevious: () => void;
  onDataUpdate: (data: any) => void;
  bookingData: any;
  initialData: any;
}

export function GuestDetails({ onNext, onPrevious, onDataUpdate, bookingData, initialData }: GuestDetailsProps) {
  const [formData, setFormData] = React.useState({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    country: initialData.country || "",
    specialRequests: initialData.specialRequests || "",
    newsletter: initialData.newsletter || false,
    terms: initialData.terms || false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    onDataUpdate(formData);
    onNext();
  };

  const isValid = formData.firstName && formData.lastName && formData.email && formData.phone && formData.terms;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Guest Details</CardTitle>
        <CardDescription>
          Please provide your information for the reservation. All fields marked with * are required.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Booking Summary */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h4 className="font-medium mb-2">Booking Summary</h4>
          <div className="text-sm space-y-1">
            <div>Room: {bookingData.room?.roomDetails?.name}</div>
            <div>Guests: {bookingData.search?.guests}</div>
            <div>Price: ${bookingData.room?.roomDetails?.price} per night</div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country/Region</Label>
          <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
          <Textarea
            id="specialRequests"
            value={formData.specialRequests}
            onChange={(e) => handleInputChange("specialRequests", e.target.value)}
            placeholder="Any special requests or preferences..."
            rows={3}
          />
        </div>

        {/* Preferences */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our newsletter for special offers and updates
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> *
            </Label>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={onPrevious}>
            Previous Step
          </Button>
          <Button onClick={handleContinue} disabled={!isValid}>
            Continue to Payment
          </Button>
        </div>

        {!isValid && (
          <p className="text-sm text-muted-foreground text-center">
            Please fill in all required fields and accept the terms to continue.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
