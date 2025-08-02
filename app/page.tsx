'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ImpactStats from "@/components/ImpactStats";
import Testimonials from "@/components/Testimonials";
import JoinCommunity from "@/components/JoinCommunity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Mission />
      <ImpactStats />
      <Testimonials />
      <JoinCommunity />
      <Footer />
    </div>
  );
}
