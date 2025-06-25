import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Train, 
  Car, 
  Bus,
  Taxi,
  MapPin,
  Clock,
  DollarSign,
  Phone
} from "lucide-react";

const transportationOptions = [
  {
    id: "airport",
    title: "Airport Transportation",
    icon: Plane,
    options: [
      {
        method: "Hotel Shuttle",
        description: "Complimentary shuttle service to/from International Airport",
        duration: "15 minutes",
        cost: "Free",
        schedule: "Every 30 minutes, 6 AM - 11 PM",
        features: ["Luggage assistance", "Advance booking required", "WiFi onboard"]
      },
      {
        method: "Private Car Service",
        description: "Luxury vehicle with professional driver",
        duration: "12 minutes",
        cost: "$45-65",
        schedule: "24/7 availability",
        features: ["Door-to-door service", "Flight tracking", "Premium vehicles"]
      },
      {
        method: "Taxi/Rideshare",
        description: "Standard taxi or app-based rideshare services",
        duration: "15-20 minutes",
        cost: "$25-35",
        schedule: "24/7 availability",
        features: ["Immediate availability", "Multiple payment options", "Various vehicle types"]
      }
    ]
  },
  {
    id: "train",
    title: "Train & Metro",
    icon: Train,
    options: [
      {
        method: "Metro Line",
        description: "Direct connection to Central Station and city metro network",
        duration: "5 minutes to station",
        cost: "$2-8",
        schedule: "5 AM - 1 AM daily",
        features: ["Frequent service", "City-wide access", "Digital payment accepted"]
      },
      {
        method: "High-Speed Rail",
        description: "Regional and intercity train connections",
        duration: "8 minutes to Central Station",
        cost: "$15-150",
        schedule: "6 AM - 11 PM",
        features: ["Regional connectivity", "Comfortable seating", "Onboard amenities"]
      }
    ]
  },
  {
    id: "local",
    title: "Local Transportation",
    icon: Car,
    options: [
      {
        method: "Valet Parking",
        description: "Secure valet parking service at the hotel",
        duration: "Immediate",
        cost: "$35/night",
        schedule: "24/7 service",
        features: ["Secure parking", "Car care services", "In/out privileges"]
      },
      {
        method: "Car Rental",
        description: "Premium car rental services with hotel delivery",
        duration: "30 minutes setup",
        cost: "$50-200/day",
        schedule: "8 AM - 8 PM",
        features: ["Hotel delivery", "Premium vehicles", "GPS included"]
      },
      {
        method: "City Bus",
        description: "Public bus network with nearby stops",
        duration: "2 minutes to stop",
        cost: "$2-5",
        schedule: "6 AM - 12 AM",
        features: ["Extensive network", "Eco-friendly", "Real-time tracking"]
      }
    ]
  }
];

export function Transportation() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Car className="h-3 w-3 mr-1" />
            Transportation
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Getting Around
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Convenient transportation options to and from Narayani Hotel. Whether you're arriving 
            from the airport or exploring the city, we've got you covered with multiple options.
          </p>
        </div>

        {/* Transportation Options */}
        <div className="space-y-12">
          {transportationOptions.map((category, categoryIndex) => (
            <div key={category.id}>
              <div className="flex items-center mb-8">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.options.map((option, optionIndex) => (
                  <Card key={optionIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{option.method}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Key Info */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{option.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span>{option.cost}</span>
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="text-sm">
                        <span className="font-medium">Schedule: </span>
                        <span className="text-muted-foreground">{option.schedule}</span>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-medium text-sm mb-2">Features:</h4>
                        <div className="space-y-1">
                          {option.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                              <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transportation Services */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Concierge Transportation Services
              </h3>
              <p className="text-muted-foreground mb-6">
                Let our concierge team arrange your transportation needs. From airport transfers 
                to city tours, we'll ensure you travel in comfort and style.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">24/7 booking assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="h-4 w-4 text-primary" />
                  <span className="text-sm">Premium vehicle fleet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">City tours and excursions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Flexible scheduling</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right space-y-4">
              <Button size="lg" className="w-full lg:w-auto">
                <Phone className="h-4 w-4 mr-2" />
                Call Concierge
              </Button>
              <div className="text-sm text-muted-foreground">
                +1 (555) 123-4568
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Quick Distance Reference</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="p-4">
                <Plane className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-medium text-sm">Airport</div>
                <div className="text-xs text-muted-foreground">15 min</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Train className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-medium text-sm">Central Station</div>
                <div className="text-xs text-muted-foreground">8 min</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Bus className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-medium text-sm">Bus Stop</div>
                <div className="text-xs text-muted-foreground">2 min</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Taxi className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-medium text-sm">Taxi Stand</div>
                <div className="text-xs text-muted-foreground">1 min</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
