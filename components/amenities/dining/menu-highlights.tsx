import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Leaf, Award } from "lucide-react";

const menuCategories = {
  signature: {
    title: "Signature Dishes",
    description: "Chef's specially crafted creations",
    items: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "Premium wagyu beef with truffle reduction, seasonal vegetables, and potato gratin",
        price: "$85",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        dietary: ["Gluten-Free Available"],
        popular: true
      },
      {
        name: "Pan-Seared Halibut",
        description: "Fresh Atlantic halibut with lemon herb crust, quinoa pilaf, and roasted vegetables",
        price: "$65",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        dietary: ["Gluten-Free", "Pescatarian"],
        popular: false
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique, wild rice, and baby vegetables",
        price: "$58",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        dietary: ["Gluten-Free Available"],
        popular: true
      }
    ]
  },
  appetizers: {
    title: "Appetizers",
    description: "Perfect starters to begin your culinary journey",
    items: [
      {
        name: "Tuna Tartare",
        description: "Fresh yellowfin tuna with avocado, citrus, and sesame crisp",
        price: "$28",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
        dietary: ["Gluten-Free", "Pescatarian"],
        popular: true
      },
      {
        name: "Burrata Caprese",
        description: "Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic",
        price: "$22",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        dietary: ["Vegetarian", "Gluten-Free Available"],
        popular: false
      }
    ]
  },
  desserts: {
    title: "Desserts",
    description: "Sweet endings to your dining experience",
    items: [
      {
        name: "Chocolate Soufflé",
        description: "Warm dark chocolate soufflé with vanilla bean ice cream",
        price: "$18",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
        dietary: ["Vegetarian"],
        popular: true
      },
      {
        name: "Lemon Tart",
        description: "Classic lemon curd tart with meringue and berry compote",
        price: "$16",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
        dietary: ["Vegetarian"],
        popular: false
      }
    ]
  }
};

export function MenuHighlights() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Award className="h-3 w-3 mr-1" />
            Menu Highlights
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Culinary Masterpieces
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our chef's signature creations, featuring the finest ingredients 
            and innovative techniques that have earned us culinary recognition.
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="signature" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="signature">Signature</TabsTrigger>
            <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
          </TabsList>

          {Object.entries(menuCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.popular && (
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          Popular
                        </Badge>
                      )}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-black font-bold">
                          {item.price}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* Dietary Information */}
                      <div className="flex flex-wrap gap-1">
                        {item.dietary.map((diet, dietIndex) => (
                          <Badge key={dietIndex} variant="outline" className="text-xs">
                            <Leaf className="h-3 w-3 mr-1" />
                            {diet}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Wine Pairing */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Wine Pairing Experience
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your dining experience with our sommelier's carefully selected wine pairings. 
              Each dish can be perfectly complemented with wines from our extensive cellar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Wine Selection</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">Expert</div>
              <div className="text-sm text-muted-foreground">Sommelier</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg">
              Explore Wine List
            </Button>
          </div>
        </div>

        {/* Chef's Note */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Our menu celebrates the finest seasonal ingredients, combining traditional techniques 
              with modern innovation to create memorable dining experiences."
            </blockquote>
            <div className="font-medium">Chef Marcus Thompson</div>
            <div className="text-sm text-muted-foreground">Executive Chef</div>
          </div>
        </div>
      </div>
    </section>
  );
}
