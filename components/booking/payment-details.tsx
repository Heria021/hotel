"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, Lock } from "lucide-react";

interface PaymentDetailsProps {
  onNext: () => void;
  onPrevious: () => void;
  onDataUpdate: (data: any) => void;
  bookingData: any;
  initialData: any;
}

export function PaymentDetails({ onNext, onPrevious, onDataUpdate, bookingData, initialData }: PaymentDetailsProps) {
  const [paymentData, setPaymentData] = React.useState({
    cardNumber: initialData.cardNumber || "",
    expiryMonth: initialData.expiryMonth || "",
    expiryYear: initialData.expiryYear || "",
    cvv: initialData.cvv || "",
    cardName: initialData.cardName || "",
    billingAddress: initialData.billingAddress || "",
    billingCity: initialData.billingCity || "",
    billingZip: initialData.billingZip || ""
  });

  const handleInputChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const handleCompleteBooking = () => {
    onDataUpdate(paymentData);
    onNext();
  };

  // Calculate totals
  const roomPrice = bookingData.room?.roomDetails?.price || 0;
  const nights = 3; // This would be calculated from check-in/out dates
  const subtotal = roomPrice * nights;
  const taxes = Math.round(subtotal * 0.15);
  const total = subtotal + taxes;

  const isValid = paymentData.cardNumber && paymentData.expiryMonth && paymentData.expiryYear && 
                  paymentData.cvv && paymentData.cardName;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Payment Form */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <CreditCard className="h-6 w-6 mr-2" />
              Payment Details
            </CardTitle>
            <CardDescription>
              Your payment information is secure and encrypted. We accept all major credit cards.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-green-800">
                <Shield className="h-5 w-5" />
                <span className="font-medium">Secure Payment</span>
              </div>
              <p className="text-sm text-green-700 mt-1">
                Your payment is protected by 256-bit SSL encryption and PCI DSS compliance.
              </p>
            </div>

            {/* Card Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number *</Label>
                <Input
                  id="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryMonth">Month *</Label>
                  <Select value={paymentData.expiryMonth} onValueChange={(value) => handleInputChange("expiryMonth", value)}>
                    <SelectTrigger id="expiryMonth">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i + 1} value={String(i + 1).padStart(2, '0')}>
                          {String(i + 1).padStart(2, '0')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expiryYear">Year *</Label>
                  <Select value={paymentData.expiryYear} onValueChange={(value) => handleInputChange("expiryYear", value)}>
                    <SelectTrigger id="expiryYear">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem key={i} value={String(new Date().getFullYear() + i)}>
                          {new Date().getFullYear() + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input
                    id="cvv"
                    value={paymentData.cvv}
                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card *</Label>
                <Input
                  id="cardName"
                  value={paymentData.cardName}
                  onChange={(e) => handleInputChange("cardName", e.target.value)}
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Billing Address */}
            <div className="space-y-4">
              <h4 className="font-medium">Billing Address</h4>
              <div className="space-y-2">
                <Label htmlFor="billingAddress">Address</Label>
                <Input
                  id="billingAddress"
                  value={paymentData.billingAddress}
                  onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billingCity">City</Label>
                  <Input
                    id="billingCity"
                    value={paymentData.billingCity}
                    onChange={(e) => handleInputChange("billingCity", e.target.value)}
                    placeholder="New York"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingZip">ZIP Code</Label>
                  <Input
                    id="billingZip"
                    value={paymentData.billingZip}
                    onChange={(e) => handleInputChange("billingZip", e.target.value)}
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Booking Summary */}
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium">{bookingData.room?.roomDetails?.name}</h4>
              <p className="text-sm text-muted-foreground">{bookingData.room?.roomDetails?.type}</p>
            </div>

            <Separator />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Room rate (3 nights)</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & fees</span>
                <span>${taxes}</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <p>• Free cancellation until 24 hours before check-in</p>
              <p>• Includes complimentary WiFi and breakfast</p>
              <p>• No hidden fees or charges</p>
            </div>

            <Button 
              onClick={handleCompleteBooking} 
              className="w-full" 
              size="lg"
              disabled={!isValid}
            >
              <Lock className="h-4 w-4 mr-2" />
              Complete Booking
            </Button>

            {!isValid && (
              <p className="text-xs text-muted-foreground text-center">
                Please fill in all required payment fields.
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="lg:col-span-2 flex justify-between">
        <Button variant="outline" onClick={onPrevious}>
          Previous Step
        </Button>
      </div>
    </div>
  );
}
