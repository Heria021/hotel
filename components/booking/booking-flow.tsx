"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookingSearch } from "./booking-search";
import { RoomSelection } from "./room-selection";
import { GuestDetails } from "./guest-details";
import { PaymentDetails } from "./payment-details";
import { BookingConfirmation } from "./booking-confirmation";
import { 
  Calendar, 
  Bed, 
  User, 
  CreditCard, 
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const steps = [
  { id: 1, title: "Search", icon: Calendar, description: "Select dates and preferences" },
  { id: 2, title: "Rooms", icon: Bed, description: "Choose your accommodation" },
  { id: 3, title: "Details", icon: User, description: "Enter guest information" },
  { id: 4, title: "Payment", icon: CreditCard, description: "Secure payment processing" },
  { id: 5, title: "Confirmation", icon: CheckCircle, description: "Booking complete" }
];

export function BookingFlow() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [bookingData, setBookingData] = React.useState({
    search: {},
    room: {},
    guest: {},
    payment: {}
  });

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep) {
      setCurrentStep(stepId);
    }
  };

  const updateBookingData = (stepData: any, step: string) => {
    setBookingData(prev => ({
      ...prev,
      [step]: stepData
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BookingSearch 
            onNext={handleNext}
            onDataUpdate={(data) => updateBookingData(data, 'search')}
            initialData={bookingData.search}
          />
        );
      case 2:
        return (
          <RoomSelection 
            onNext={handleNext}
            onPrevious={handlePrevious}
            onDataUpdate={(data) => updateBookingData(data, 'room')}
            searchData={bookingData.search}
            initialData={bookingData.room}
          />
        );
      case 3:
        return (
          <GuestDetails 
            onNext={handleNext}
            onPrevious={handlePrevious}
            onDataUpdate={(data) => updateBookingData(data, 'guest')}
            bookingData={bookingData}
            initialData={bookingData.guest}
          />
        );
      case 4:
        return (
          <PaymentDetails 
            onNext={handleNext}
            onPrevious={handlePrevious}
            onDataUpdate={(data) => updateBookingData(data, 'payment')}
            bookingData={bookingData}
            initialData={bookingData.payment}
          />
        );
      case 5:
        return (
          <BookingConfirmation 
            bookingData={bookingData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16">
      <div className="container max-w-6xl">
        {/* Progress Steps */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle>Booking Progress</CardTitle>
              <Badge variant="outline">
                Step {currentStep} of {steps.length}
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex flex-col items-center cursor-pointer transition-colors ${
                    step.id <= currentStep ? 'text-primary' : 'text-muted-foreground'
                  } ${step.id < currentStep ? 'hover:text-primary/80' : ''}`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div className={`p-3 rounded-full mb-2 ${
                    step.id === currentStep 
                      ? 'bg-primary text-primary-foreground' 
                      : step.id < currentStep 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-sm">{step.title}</div>
                    <div className="text-xs text-muted-foreground hidden sm:block">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        <div className="min-h-[600px]">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        {currentStep !== 1 && currentStep !== steps.length && (
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handlePrevious}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous Step
            </Button>
            <Button onClick={handleNext}>
              Next Step
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Help Section */}
        <Card className="mt-8 bg-muted/30">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Need Help with Your Booking?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our reservation specialists are available 24/7 to assist you with your booking.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline">
                  Call +1 (555) 123-4567
                </Button>
                <Button variant="outline">
                  Live Chat Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
