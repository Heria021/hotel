import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Award,
  Shield,
  Wifi
} from "lucide-react";

const footerLinks = {
  hotel: [
    { title: "About Us", href: "/about" },
    { title: "Our Story", href: "/about#story" },
    { title: "Awards & Recognition", href: "/about#awards" },
    { title: "Careers", href: "/careers" },
    { title: "Press & Media", href: "/press" },
  ],
  services: [
    { title: "Rooms & Suites", href: "/rooms" },
    { title: "Dining", href: "/amenities/dining" },
    { title: "Spa & Wellness", href: "/amenities/spa" },
    { title: "Business Center", href: "/amenities/business" },
    { title: "Events & Weddings", href: "/events" },
  ],
  guest: [
    { title: "Book Now", href: "/book" },
    { title: "Manage Booking", href: "/manage-booking" },
    { title: "Check-in/Check-out", href: "/checkin" },
    { title: "Concierge Services", href: "/concierge" },
    { title: "Guest Reviews", href: "/reviews" },
  ],
  support: [
    { title: "Contact Us", href: "/contact" },
    { title: "FAQ", href: "/faq" },
    { title: "Accessibility", href: "/accessibility" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Conditions", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-primary">Narayani</span>
                <span className="text-xs text-muted-foreground tracking-wider">HOTEL</span>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground max-w-md">
              Experience luxury and comfort at Narayani Hotel. Where exceptional service meets 
              elegant accommodations in the heart of the city.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Luxury Avenue, Downtown District, City 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@narayanihotel.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 Front Desk Service</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Wifi className="h-4 w-4" />
                <span>Free WiFi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Hotel</h3>
            <ul className="space-y-2">
              {footerLinks.hotel.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Guest Services</h3>
            <ul className="space-y-2">
              {footerLinks.guest.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Newsletter Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-semibold mb-2">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex space-x-2 max-w-md">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-start lg:justify-end">
            <div className="space-y-2">
              <h3 className="font-semibold">Follow Us</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Narayani Hotel. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
