import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { BookingWidget } from "@/components/booking/booking-widget";
import { HotelHighlights } from "@/components/sections/hotel-highlights";
import { Testimonials } from "@/components/sections/testimonials";
import { SpecialOffers } from "@/components/sections/special-offers";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <HeroSection />

        {/* Booking Widget Section */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="flex justify-center">
              <BookingWidget variant="hero" />
            </div>
          </div>
        </section>

        {/* Hotel Highlights */}
        <HotelHighlights />

        {/* Special Offers */}
        <SpecialOffers />

        {/* Testimonials */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
