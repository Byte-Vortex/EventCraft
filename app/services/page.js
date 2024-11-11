"use client";
import Link from "next/link";
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
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      name: "Tattoo Artists",
      description:
        "Professional artists for unique event tattoos with temporary colours.",
      image: "/4.jpg",
      link: "/services/tattoo-artists",
    },
    {
      name: "Interactive Games",
      description: "Engaging entertainment for all ages espicially for kids.",
      image: "/5.jpg",
      link: "/services/games",
    },
    {
      name: "Sketch Artists",
      description: "Talented artists to capture moments in sketches",
      image: "/6.jpg",
      link: "/services/sketch-artists",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Our Services
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
              Discover our wide range of services designed to make your event
              truly unforgettable. From interactive entertainment to stunning
              visuals, we&apos;ve got everything you need to create a
              one-of-a-kind experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.5 * index }} // Delay each card's animation
                className="flex flex-col"
              >
                <Card className="h-full">
                  <CardHeader>
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-48 mb-4"
                    />
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full h-12 rounded-sm">
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
