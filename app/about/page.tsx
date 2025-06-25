import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { AboutHero } from "@/components/about/about-hero";
import { HotelStory } from "@/components/about/hotel-story";
import { TeamSection } from "@/components/about/team-section";
import { AwardsRecognition } from "@/components/about/awards-recognition";
import { SustainabilitySection } from "@/components/about/sustainability-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <AboutHero />
        <HotelStory />
        <TeamSection />
        <AwardsRecognition />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  );
}
