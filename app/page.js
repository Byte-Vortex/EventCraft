import * as React from "react";
import HeroSlider from "@/components/ui/HeroSlider";
import FAQsection from "@/components/FAQsection";
import BookingSection from "@/components/BookingSection";
import TextBanner from "@/components/ui/TextBanner";
import { TestimonialCarousel } from "@/components/TestimonialsCarousel";
import OurServicesSection from "@/components/OurServicesSection";
import HeroSection from "@/components/ui/HeroSection";
import MagicSlider from "@/components/ui/MagicSlider";
import NewCarousel from "@/components/ui/NewCarousel";

export default function EventPlannerWebsite() {
  const bannerMessages = [
    "🎉 Special offer: 20% off all packages booked this month!",
    "🎨 New service: Glow-in-the-dark hand painting now available!",
    "🎮 Introducing VR gaming experiences for your events!",
    "📅 Limited slots available for summer events - Book now!",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground ">
      <main>
        {/* <HeroSlider /> */}
        {/* <HeroSection/> */}
        <MagicSlider/>
        {/* <NewCarousel/> */}
        <OurServicesSection /> 

        <BookingSection /> 

        <TextBanner messages={bannerMessages} /> 

        <TestimonialCarousel /> 

        <FAQsection />
      </main>
    </div>
  );
}
