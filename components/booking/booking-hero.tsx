import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, CreditCard } from "lucide-react";

export function BookingHero() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <CreditCard className="h-3 w-3 mr-1" />
            Secure Booking
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Book Your Stay
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience luxury and comfort at Narayani Hotel. Our secure booking system 
            ensures the best rates and instant confirmation for your perfect getaway.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">Secure Booking</h3>
              <p className="text-sm text-muted-foreground">SSL encrypted & protected</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1">Instant Confirmation</h3>
              <p className="text-sm text-muted-foreground">Immediate booking confirmation</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Best Rate Guarantee</h3>
              <p className="text-sm text-muted-foreground">Lowest prices guaranteed</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                <CreditCard className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-1">Free Cancellation</h3>
              <p className="text-sm text-muted-foreground">Cancel up to 24 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Special Offers Banner */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Special Offer</h3>
          <p className="text-muted-foreground mb-4">
            Book direct and save 15% plus enjoy complimentary breakfast and WiFi
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">15% Off Direct Bookings</Badge>
            <Badge variant="secondary">Free Breakfast</Badge>
            <Badge variant="secondary">Complimentary WiFi</Badge>
            <Badge variant="secondary">Late Checkout</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
