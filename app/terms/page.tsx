import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <FileText className="h-3 w-3 mr-1" />
              Terms & Conditions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Terms of Service</CardTitle>
              <CardDescription>
                Please read these terms and conditions carefully before using our services.
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3>Acceptance of Terms</h3>
              <p>By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h3>Reservations and Cancellations</h3>
              <p>All reservations are subject to availability and confirmation. Cancellation policies vary by rate and are specified at the time of booking.</p>
              
              <h3>Payment Terms</h3>
              <p>Payment is required at the time of booking or check-in as specified in your reservation confirmation.</p>
              
              <h3>Hotel Policies</h3>
              <p>Guests are expected to comply with all hotel policies, including check-in/check-out times, occupancy limits, and conduct guidelines.</p>
              
              <h3>Limitation of Liability</h3>
              <p>The hotel's liability is limited as set forth in applicable law and these terms and conditions.</p>
              
              <h3>Contact Information</h3>
              <p>For questions regarding these terms, please contact us at legal@narayanihotel.com.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
