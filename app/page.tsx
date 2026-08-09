import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { TheShift } from "@/components/sections/TheShift";
import { DemoVideo } from "@/components/sections/DemoVideo";
import { BuildStrip } from "@/components/sections/BuildStrip";
import { LearningOutcomes } from "@/components/sections/LearningOutcomes";
import { AudienceFit } from "@/components/sections/AudienceFit";
import { Instructor } from "@/components/sections/Instructor";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TheShift />
        <DemoVideo />
        <BuildStrip />
        <LearningOutcomes />
        <AudienceFit />
        <Instructor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}