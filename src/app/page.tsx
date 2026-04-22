import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import {
  Audience,
  CatFramework,
  Delivery,
  DomainExpertise,
  Edge,
  FaqSection,
  Hero,
  LeadCaptureForm,
  Partnerships,
  Segmentation,
  Testimonials,
  TrackRecord,
} from "@/components/sections";
import { getPublicStats } from "@/lib/stats-service";

export default async function Home() {
  const stats = await getPublicStats();

  return (
    <>
      <NavBar />
      <main className="flex-1">
        <Hero />
        <TrackRecord stats={stats} />
        <Partnerships />
        <Edge />
        <DomainExpertise />
        <Segmentation />
        <Audience />
        <CatFramework />
        <Delivery />
        <FaqSection />
        <Testimonials />
        <LeadCaptureForm />
      </main>
      <Footer />
    </>
  );
}
