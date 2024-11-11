import * as React from "react";
import HeroSlider from "@/components/ui/HeroSlider";
import FAQsection from "@/components/FAQsection";
import BookingSection from "@/components/BookingSection";
import TextBanner from "@/components/ui/TextBanner";
import { TestimonialCarousel } from "@/components/TestimonialsCarousel";
import OurServicesSection from "@/components/OurServicesSection";

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
        {/* Hero Section */}
        <HeroSlider />
        {/* Our Services Section */}
        <OurServicesSection  className="p-2" />
        {/*Booking Section*/}
        <BookingSection />
        {/*Text Banner*/}
        <TextBanner messages={bannerMessages} />
        {/*Testimonial Carousel*/}
        <TestimonialCarousel />
        {/*FAQ Section*/}
        <FAQsection />
      </main>
    </div>
  );
}
