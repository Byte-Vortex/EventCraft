"use client";

import * as React from "react";
import { motion, useAnimation} from "framer-motion";
import { Button } from "@/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import HeroSlider from "@/components/ui/HeroSlider";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import TextBanner from "@/components/ui/TextBanner";
import { Send } from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/datepicker";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export default function EventPlannerWebsite() {

  // Framer Motion animation control
  // Animation variants for other sections
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1, // Trigger when 30% of the element is visible
    triggerOnce: true, // Trigger animation only once
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({threshold: 0.5,triggerOnce: true});
  useEffect(() => {
    if (sectionInView) sectionControls.start("visible");
  }, [sectionControls, sectionInView]);
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardControls1 = useAnimation();
  const [cardRef1, cardInView1] = useInView({ threshold: 0.7, triggerOnce: true });
  useEffect(() => {
    if (cardInView1) cardControls1.start('visible');
  }, [cardControls1, cardInView1]);
  const cardVariant1 = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardControls2 = useAnimation();
  const [cardRef2, cardInView2] = useInView({ threshold: 0.7, triggerOnce: true });
  useEffect(() => {
    if (cardInView2) cardControls2.start('visible');
  }, [cardControls2, cardInView2]);
  const cardVariant2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardControls3 = useAnimation();
  const [cardRef3, cardInView3] = useInView({ threshold: 0.7, triggerOnce: true });
  useEffect(() => {
    if (cardInView3) cardControls3.start('visible');
  }, [cardControls3, cardInView3]);
  const cardVariant3 = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const formControls = useAnimation();
  const [formRef, formInView] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (formInView) formControls.start('visible');
  }, [formControls, formInView]);
  const formVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const bannerMessages = [
    "🎉 Special offer: 20% off all packages booked this month!",
    "🎨 New service: Glow-in-the-dark body painting now available!",
    "🎮 Introducing VR gaming experiences for your events!",
    "📅 Limited slots available for summer events - Book now!",
  ];
  const TitleStyle = cva(
    "text-center text-2xl "
  );
  const DescriptionStyle = cva(
    "text-center text-base "
  );

  return (
    <div className="min-h-screen bg-background text-foreground ">
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
                Elevate your gatherings with our unique blend of entertainment
                and artistry
              </p>
              <Button
                size="lg"
                variant="default"
                className="font-bold bg-primary text-primary-foreground  pointer-events-auto"
              >
                Book Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 w-full">
          <div className="container mx-auto w-full">
            <motion.div
              ref={ref}
              variants={titleVariants}
              initial="hidden"
              animate={controls}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">
                Our Services
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                ref={cardRef1}
                variants={cardVariant1}
                initial="hidden"
                animate={cardControls1}
              >
                <Card className="h-[50vh]">
                  <CardHeader>
                    <CardTitle className={cn(TitleStyle())}>Tattoo Artists</CardTitle>
                    <CardDescription className={cn(DescriptionStyle())}>
                      Professional event tattoos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/1.jpg"
                      alt="Tattoo Artist at work"
                      height="200"
                      width="400"
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <p className="text-muted-foreground ">
                      Our skilled tattoo artists bring a unique flair to your
                      event, offering custom designs and temporary tattoos.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                ref={cardRef2}
                variants={cardVariant2}
                initial="hidden"
                animate={cardControls2}
              >
                <Card className="h-[50vh]">
                  <CardHeader>
                    <CardTitle className={cn(TitleStyle())}>Interactive Games</CardTitle>
                    <CardDescription className={cn(DescriptionStyle())}>
                      Engaging entertainment for all
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/2.jpg"
                      alt="People playing interactive games"
                      className="w-full h-48 object-cover rounded-md mb-4"
                      height="200"
                      width="400"
                    />
                    <p className="text-muted-foreground">
                      From high-tech VR experiences to classic party games, we
                      have something for everyone to enjoy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                ref={cardRef3}
                variants={cardVariant3}
                initial="hidden"
                animate={cardControls3}
              >
                <Card className="h-[50vh]">
                  <CardHeader>
                    <CardTitle className={cn(TitleStyle())}>Sketch Artists</CardTitle>
                    <CardDescription className={cn(DescriptionStyle())}>Capture moments in art</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/3.jpg"
                      alt="Sketch artist drawing a portrait"
                      className="w-full h-48 object-cover rounded-md mb-4"
                      height="200"
                      width="400"
                    />
                    <p className="text-muted-foreground">
                      Our talented sketch artists create beautiful, on-the-spot
                      portraits and caricatures for your guests.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto">
          <motion.div
              ref={formRef}
              variants={formVariants}
              initial="hidden"
              animate={formControls}
            >
            <div className="max-w-2xl mx-auto">
              <Card className="max-w-lg mx-auto bg-black selection:bg-transparent">
                <CardHeader>
                  <CardTitle className="text-4xl mb-4 text-center">
                    Book Your Event
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-l text-center">
                    Fill out the form below to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-5">
                  <form noValidate>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Input
                          id="name"
                          className="h-14 selection:text-pink-700"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Input
                          id="email"
                          className="h-14 selection:text-pink-700"
                          placeholder="Your Email"
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <DatePicker />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Select>
                          <SelectTrigger className="w-full h-12 focus:border-pink-700">
                            <SelectValue placeholder="Event" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="party">Party</SelectItem>
                            <SelectItem value="anniversary">
                              Anniversary
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Textarea
                          className="h-20 selection:text-pink-700"
                          id="message"
                          placeholder="Additional Details"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Button type="submit" className="w-full h-12">
                          <Send className="mr-2 h-8 w-4" /> Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                  <div className="flex flex-col mt-3">
                    {status && (
                      <p className="flex justify-center items-center text-pink-700">
                        {status}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-8">
          <motion.div
            ref={sectionRef}
            variants={sectionVariants}
            initial="hidden"
            animate={sectionControls}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion
                type="single"
                collapsible
                className="w-full max-w-2xl mx-auto"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What types of events do you cater to?
                  </AccordionTrigger>
                  <AccordionContent>
                    We cater to a wide range of events, including but not
                    limited to weddings, corporate events, birthday parties, anniversary events,
                    festivals, and private gatherings. Our services can be
                    customized to suit any type of events.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How far in advance should I book your services?
                  </AccordionTrigger>
                  <AccordionContent>
                    We recommend booking our services at least 2-3 weeks in
                    advance, especially for peak seasons. However, we also
                    accommodate last-minute bookings when possible. The earlier
                    you book, the better we can ensure availability and prepare
                    for your event.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Are your tattoo artists and their equipment safe?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely. All our tattoo artists are expert
                    professionals who adhere to strict health and safety
                    standards. We use only fabric paint, sterile, single-use equipment for
                    temporary tattoos, ensuring the highest level of hygiene and
                    safety for all our clients.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Can I customize the services for my event?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer customization options for our interactive
                    services. We can tailor the activities to fit your event theme,
                    incorporate your company branding, or create custom
                    challenges. Discuss your ideas with our event planners, and
                    we&apos;ll work to make your vision a reality.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
