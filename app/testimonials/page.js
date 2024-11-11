"use client"
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      image: "/6.jpg",
      content:
        "EventCraft made our wedding day absolutely magical! The tattoo artists and sketch artists were a huge hit with our guests.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Corporate Event Planner",
      image: "/5.jpg",
      content:
        "The interactive games provided by EventCraft kept our team engaged and entertained throughout the entire company retreat.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Birthday Girl",
      image: "/4.jpg",
      content:
        "My 30th birthday party was unforgettable thanks to EventCraft. The custom decor and entertainment were perfect!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Non-Profit Director",
      image: "/3.jpg",
      content:
        "EventCraft helped us create a unique fundraising event that our donors are still talking about. Highly recommended!",
      rating: 4,
    },
    {
      name: "Lisa Patel",
      role: "Mother of the Groom",
      image: "/2.jpg",
      content:
        "The attention to detail and professionalism of the EventCraft team made my son's wedding reception stress-free and enjoyable.",
      rating: 5,
    },
    {
      name: "Alex Nguyen",
      role: "Festival Organizer",
      image: "/1.jpg",
      content:
        "EventCraft's diverse range of services allowed us to create multiple engaging attractions at our community festival.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Client Testimonials
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients
              have to say about their experiences with EventCraft.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 * index }} // Delay each card's animation
                className="flex flex-col"
              >
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle className="text-lg">
                          {testimonial.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                      &ldquo; {testimonial.content} &rdquo;
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
