"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import HeroSlider from "@/components/ui/HeroSlider";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import FAQsection from "@/components/FAQsection";
import BookingSection from "@/components/BookingSection";
import TextBanner from "@/components/ui/TextBanner";

 // Card Data Array
 const cardData = [
  {
    imgSrc: "/1.jpg",
    title: "Tattoo Artists",
    description: "Professional event tattoos",
    content: "Our skilled tattoo artists bring a unique flair to your event, offering custom designs and temporary tattoos.",
    animationVariant: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } },
  },
  {
    imgSrc: "/2.jpg",
    title: "Interactive Games",
    description: "Engaging entertainment for all",
    content: "From high-tech VR experiences to classic party games, we have something for everyone to enjoy.",
    animationVariant: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } },
  },
  {
    imgSrc: "/3.jpg",
    title: "Sketch Artists",
    description: "Capture moments in art",
    content: "Our talented sketch artists create beautiful, on-the-spot portraits and caricatures for your guests.",
    animationVariant: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } },
  },
];

const TitleStyle = cva("text-center text-2xl ");
const DescriptionStyle = cva("text-center text-base ");

// AnimatedCard Component
const AnimatedCard = ({ card }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.7, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div ref={ref} variants={card.animationVariant} initial="hidden" animate={controls}>
      <Card className="h-[50vh]">
        <CardHeader>
          <CardTitle className={cn(TitleStyle())}>{card.title}</CardTitle>
          <CardDescription className={cn(DescriptionStyle())}>{card.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={card.imgSrc}
            alt={card.title}
            height="200"
            width="400"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-muted-foreground">{card.content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function EventPlannerWebsite(){
  // Section Animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });
  useEffect(() => { if (inView) controls.start("visible"); }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const bannerMessages = [
    "🎉 Special offer: 20% off all packages booked this month!",
    "🎨 New service: Glow-in-the-dark body painting now available!",
    "🎮 Introducing VR gaming experiences for your events!",
    "📅 Limited slots available for summer events - Book now!",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="-mt-20 bg-gradient-to-b from-background to-background/80 selection:bg-transparent">
          <HeroSlider />
          <div className="absolute -mt-36 px-2 inset-0 flex items-center justify-center mx-auto pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-pink-600">
                Craft Unforgettable Events
              </h1>
              <p className="text-xl mb-8 text-white">
                Elevate your gatherings with our unique blend of entertainment and artistry
              </p>
              <Button size="lg" variant="default" className="font-bold text-sm rounded-sm bg-primary text-primary-foreground pointer-events-auto">
                Book Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 w-full">
          <div className="container mx-auto w-full">
            <motion.div ref={ref} variants={titleVariants} initial="hidden" animate={controls}>
              <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cardData.map((card, index) => (
                <AnimatedCard key={index} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/*Booking Section*/}
        <BookingSection />
              <TextBanner messages={bannerMessages}/>
        {/*FAQ Section*/}
        <FAQsection />
      </main>
    </div>
  );
};

