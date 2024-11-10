"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "EventCraft made our wedding day absolutely magical! The tattoo artists and sketch artists were a huge hit with our guests.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Corporate Event Planner",
    content:
      "The interactive games provided by EventCraft kept our team engaged and entertained throughout the entire company retreat.",
    rating: 4,
  },
  {
    name: "Emily Rodriguez",
    role: "Birthday Girl",
    content:
      "My 30th birthday party was unforgettable thanks to EventCraft. The custom decor and entertainment were perfect!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "EventCraft made our wedding day absolutely magical! The tattoo artists and sketch artists were a huge hit with our guests.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "EventCraft made our wedding day absolutely magical! The tattoo artists and sketch artists were a huge hit with our guests.",
    rating: 4,
  },
];

export function TestimonialCarousel() {
  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    if (sectionInView) sectionControls.start("visible");
  }, [sectionControls, sectionInView]);
  const sectionVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-muted ">
      <div className="py-10">
        <motion.div
          ref={sectionRef}
          variants={sectionVariants}
          initial="hidden"
          animate={sectionControls}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Our Client&apos;s Say&apos;s About Us!
          </h2>
        </motion.div>
        <motion.div
          ref={ref}
          variants={testimonialVariants}
          initial="hidden"
          animate={controls}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-xl sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4  selection:bg-transparent overflow-x-hidden transition-none"
          >
            <CarouselContent className="flex">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  {" "}
                  {/* Ensures one item is shown at a time */}
                  <div className="p-1">
                    <Card className="bg-transparent shadow-background">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-sm pt-2 font-semibold text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-center mt-4">
                          &ldquo; {testimonial.content} &rdquo;
                        </p>

                        <div className="flex mt-4 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-5 h-5  ${
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}
