import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactHero() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Phone className="h-3 w-3 mr-1" />
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help make your stay exceptional. Whether you have questions about 
            reservations, special requests, or need assistance planning your visit, our team 
            is ready to assist you 24/7.
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground mb-1">Main Reception</p>
            <p className="font-medium">+1 (555) 123-4567</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-1">General Inquiries</p>
            <p className="font-medium">info@narayanihotel.com</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm text-muted-foreground mb-1">Downtown District</p>
            <p className="font-medium">123 Luxury Avenue</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Available</h3>
            <p className="text-sm text-muted-foreground mb-1">Front Desk</p>
            <p className="font-medium">24/7 Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
