"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, HelpCircle, Phone, Mail } from "lucide-react";

const faqCategories = [
  {
    category: "Reservations & Booking",
    questions: [
      {
        question: "How can I make a reservation?",
        answer: "You can make a reservation through our website, by calling +1 (555) 123-4567, or by emailing reservations@narayanihotel.com. Online bookings receive instant confirmation."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Free cancellation is available up to 24 hours before your scheduled arrival. Cancellations within 24 hours may be subject to a one-night charge."
      },
      {
        question: "Do you offer group discounts?",
        answer: "Yes, we offer special rates for groups of 10 or more rooms. Please contact our group sales team at events@narayanihotel.com for customized pricing."
      }
    ]
  },
  {
    category: "Hotel Amenities",
    questions: [
      {
        question: "Is WiFi included in my stay?",
        answer: "Yes, complimentary high-speed WiFi is available throughout the hotel, including all guest rooms and public areas."
      },
      {
        question: "Do you have a fitness center?",
        answer: "Yes, our 24/7 fitness center features state-of-the-art equipment, including cardio machines, weights, and yoga space."
      },
      {
        question: "Is parking available?",
        answer: "We offer valet parking for $35 per night. Self-parking is also available for $25 per night. Both options include in/out privileges."
      }
    ]
  },
  {
    category: "Check-in & Check-out",
    questions: [
      {
        question: "What are your check-in and check-out times?",
        answer: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are available upon request, subject to availability."
      },
      {
        question: "What do I need to bring for check-in?",
        answer: "Please bring a valid government-issued photo ID and the credit card used for booking. International guests should bring their passport."
      },
      {
        question: "Can I store my luggage before check-in or after check-out?",
        answer: "Yes, complimentary luggage storage is available at the front desk for guests arriving early or departing late."
      }
    ]
  },
  {
    category: "Dining & Services",
    questions: [
      {
        question: "What dining options are available?",
        answer: "We have three dining venues: Narayani Signature (fine dining), Sky Lounge & Bar (rooftop), and Garden Café (casual). Room service is available 24/7."
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer: "Yes, our chefs can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergen-free options. Please inform us when making reservations."
      },
      {
        question: "Is there a concierge service?",
        answer: "Our 24/7 concierge team can assist with restaurant reservations, transportation, tours, tickets, and local recommendations."
      }
    ]
  }
];

export function FAQSection() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <section className="py-16 lg:py-24">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <HelpCircle className="h-3 w-3 mr-1" />
            Help Center
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our hotel, services, and policies. 
            Can't find what you're looking for? Contact our team for personalized assistance.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
                <CardDescription>
                  {category.questions.length} question{category.questions.length !== 1 ? 's' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <Collapsible key={faqIndex} open={isOpen} onOpenChange={() => toggleItem(itemId)}>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-left h-auto p-4 hover:bg-muted/50"
                        >
                          <span className="font-medium">{faq.question}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && searchTerm && (
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any questions matching "{searchTerm}". Try different keywords or contact us directly.
              </p>
              <Button onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Contact Support */}
        <Card className="mt-12 bg-primary/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Still Need Help?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our friendly team is here to help you 24/7. Get in touch and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Call +1 (555) 123-4567
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Email Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
