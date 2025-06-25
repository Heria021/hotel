import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/navigation/footer";
import { LocationHero } from "@/components/location/location-hero";
import { InteractiveMap } from "@/components/location/interactive-map";
import { NearbyAttractions } from "@/components/location/nearby-attractions";
import { Transportation } from "@/components/location/transportation";
import { LocalRecommendations } from "@/components/location/local-recommendations";

export default function LocationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <LocationHero />
        <InteractiveMap />
        <NearbyAttractions />
        <Transportation />
        <LocalRecommendations />
      </main>
      <Footer />
    </div>
  );
}
