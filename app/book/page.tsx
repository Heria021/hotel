import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { BookingHero } from "@/components/booking/booking-hero";
import { BookingFlow } from "@/components/booking/booking-flow";

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <BookingHero />
        <BookingFlow />
      </main>
      <Footer />
    </div>
  );
}
