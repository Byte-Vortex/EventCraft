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

export default function Games() {
  const games = [
    {
      name: "Virtual Reality Experience",
      description: "Immersive VR games for all ages",
      image: "/1.jpg",
    },
    {
      name: "Interactive Trivia",
      description: "Customizable trivia games for your event theme",
      image: "/2.jpg",
    },
    {
      name: "Giant Board Games",
      description: "Oversized classic games for group fun",
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
              Interactive Games
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
              Elevate your event with our selection of interactive games. From
              high-tech VR experiences to classic favorites, we have something
              to entertain guests of all ages and interests.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
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
                      src={game.image}
                      alt={game.name}
                      width={400}
                      height={400}
                      className="rounded-lg object-cover w-full h-64 mb-4"
                    />
                    <CardTitle>{game.name}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-sm">Learn More</Button>
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
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-10">
              Why Choose Our Interactive Games?
            </h2>
            <ul className="list-inside text-justify-center text-lg max-w-2xl mx-auto justify-center">
              <li className="mb-2">
                Suitable for all age groups and event types
              </li>
              <li className="mb-2">Customizable to match your event theme</li>
              <li className="mb-2">Experienced game hosts and facilitators</li>
              <li className="mb-2">
                State-of-the-art equipment and technology
              </li>
              <li>Promotes guest interaction and memorable experiences</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
