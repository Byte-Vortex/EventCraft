"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutUs() {
  const teamMembers = [
    { name: "Jane Doe", role: "Founder & CEO", image: "/1.jpg" },
    { name: "John Smith", role: "Creative Director", image: "/2.jpg" },
    { name: "Emily Johnson", role: "Event Coordinator", image: "/6.jpg" },
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
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About EventCraft
            </h1>
          </motion.div>
          <div className="max-w-3xl mx-auto py-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg mb-6 text-justify">
                EventCraft is a premier event planning company specializing in
                creating unique and unforgettable experiences. We combine the
                talents of tattoo artists, game designers, and sketch artists to
                bring a new level of excitement and personalization to your
                events.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-lg mb-6">
                Founded in 2024, we&apos;ve quickly become the go-to choice for
                those seeking to add a touch of creativity and interactivity to
                their gatherings. Whether it&apos;s a corporate event, wedding,
                or birthday party, we tailor our services to meet your specific
                needs and exceed your expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p className="text-lg">
                Our team of professionals is passionate about what they do and
                committed to ensuring that every event we touch becomes a
                cherished memory for all involved.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,delay:0.3}}
            className="text-center"
          >
          <h2 className="text-4xl font-bold py-8 text-center">Meet Our Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.5, // Increment delay based on index
                }}
                className="text-center p-4"
              >
                <Card>
                  <CardHeader>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="rounded-full mx-auto mb-4"
                    />
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
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
