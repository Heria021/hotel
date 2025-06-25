import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Users,
  Utensils,
  Waves,
  Car,
  Calendar,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const contactDepartments = [
  {
    department: "Reservations",
    phone: "+1 (555) 123-4567",
    email: "reservations@narayanihotel.com",
    hours: "24/7 Available",
    description: "Room bookings, modifications, and cancellations"
  },
  {
    department: "Concierge",
    phone: "+1 (555) 123-4568",
    email: "concierge@narayanihotel.com",
    hours: "24/7 Available",
    description: "Local recommendations, tours, and special arrangements"
  },
  {
    department: "Dining",
    phone: "+1 (555) 123-4569",
    email: "dining@narayanihotel.com",
    hours: "9:00 AM - 10:00 PM",
    description: "Restaurant reservations and private dining"
  },
  {
    department: "Spa & Wellness",
    phone: "+1 (555) 123-4570",
    email: "spa@narayanihotel.com",
    hours: "6:00 AM - 10:00 PM",
    description: "Spa appointments and wellness programs"
  },
  {
    department: "Events & Meetings",
    phone: "+1 (555) 123-4571",
    email: "events@narayanihotel.com",
    hours: "8:00 AM - 6:00 PM",
    description: "Corporate events, weddings, and group bookings"
  }
];

const socialMedia = [
  { platform: "Facebook", handle: "@NarayaniHotel", url: "#" },
  { platform: "Instagram", handle: "@narayani_hotel", url: "#" },
  { platform: "Twitter", handle: "@NarayaniHotel", url: "#" },
  { platform: "LinkedIn", handle: "Narayani Hotel", url: "#" }
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Main Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact Information</CardTitle>
          <CardDescription>
            Multiple ways to reach us for different services and inquiries.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Hotel Address */}
          <div className="flex items-start space-x-3">
            <div className="bg-primary/10 p-2 rounded-full mt-1">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Hotel Address</h4>
              <p className="text-sm text-muted-foreground">
                123 Luxury Avenue<br />
                Downtown District<br />
                City, State 12345<br />
                United States
              </p>
            </div>
          </div>

          <Separator />

          {/* Main Reception */}
          <div className="flex items-start space-x-3">
            <div className="bg-primary/10 p-2 rounded-full mt-1">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Main Reception</h4>
              <p className="text-sm text-muted-foreground mb-1">+1 (555) 123-4567</p>
              <Badge variant="secondary" className="text-xs">24/7 Available</Badge>
            </div>
          </div>

          <Separator />

          {/* General Email */}
          <div className="flex items-start space-x-3">
            <div className="bg-primary/10 p-2 rounded-full mt-1">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">General Email</h4>
              <p className="text-sm text-muted-foreground">info@narayanihotel.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Department Contacts */}
      <Card>
        <CardHeader>
          <CardTitle>Department Contacts</CardTitle>
          <CardDescription>
            Direct contact information for specific services and departments.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {contactDepartments.map((dept, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{dept.department}</h4>
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {dept.hours}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{dept.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{dept.email}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-800">Emergency Contact</CardTitle>
          <CardDescription className="text-red-700">
            For urgent matters outside business hours or emergencies.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3">
            <div className="bg-red-100 p-2 rounded-full">
              <Phone className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-medium text-red-800">24/7 Emergency Line</h4>
              <p className="text-red-700 font-medium">+1 (555) 911-HELP</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card>
        <CardHeader>
          <CardTitle>Follow Us</CardTitle>
          <CardDescription>
            Stay connected with us on social media for updates and special offers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {socialMedia.map((social, index) => (
              <Button key={index} variant="outline" className="justify-start" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium text-sm">{social.platform}</div>
                    <div className="text-xs text-muted-foreground">{social.handle}</div>
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Live Chat */}
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Live Chat Support</h4>
              <p className="text-sm text-muted-foreground">Get instant help from our team</p>
            </div>
          </div>
          <Button className="w-full">
            <MessageCircle className="h-4 w-4 mr-2" />
            Start Live Chat
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Available 24/7 for immediate assistance
          </p>
        </CardContent>
      </Card>

      {/* FAQ Link */}
      <Card>
        <CardContent className="p-6 text-center">
          <h4 className="font-medium mb-2">Frequently Asked Questions</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Find quick answers to common questions about our hotel and services.
          </p>
          <Button variant="outline" asChild>
            <a href="/faq">
              View FAQ
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
