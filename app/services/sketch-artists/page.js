"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BookingSection from "@/components/BookingSection";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function SketchArtists() {
  const artists = [
    { name: "Emma Wilson", specialty: "Caricatures", image: "/1.jpg" },
    { name: "David Chen", specialty: "Realistic Portraits", image: "/2.jpg" },
    {
      name: "Olivia Martinez",
      specialty: "Fashion Illustrations",
      image: "/3.jpg",
    },
  ];

  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    if (sectionInView) sectionControls.start("visible");
  }, [sectionControls, sectionInView]);
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <section className="py-10 px-6">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Sketch Artists
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
              Our talented sketch artists bring a unique and personal touch to
              your event, creating beautiful, on-the-spot portraits and
              caricatures that your guests will cherish.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.5 * index }} // Delay each card's animation
                className="flex flex-col"
              >
                <Card key={index}>
                  <CardHeader>
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={400}
                      height={400}
                      className="rounded-lg object-cover w-full h-64 mb-4"
                    />
                    <CardTitle>{artist.name}</CardTitle>
                    <CardDescription>{artist.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-sm">
                      Book This Artist
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BookingSection />
      <section className="bg-background py-10">
        <motion.div
          ref={sectionRef}
          variants={sectionVariants}
          initial="hidden"
          animate={sectionControls}
        >
          <h2 className="text-4xl font-bold mb-10">
            Why Choose Our Sketch Artists?
          </h2>
          <ul className="list-inside text-lg text-justify-center max-w-2xl mx-auto ">
            <li className="mb-2">Skilled artists with diverse styles</li>
            <li className="mb-2">Quick, high-quality sketches in minutes</li>
            <li className="mb-2">Personalized mementos for your guests</li>
            <li className="mb-2">
              Adds an interactive and entertaining element to your event
            </li>
            <li>Customizable to match your event theme</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
