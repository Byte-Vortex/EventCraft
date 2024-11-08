"use client";
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

export default function Packages() {
  return (
    <div className="bg-background text-foreground">
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-pink-600">
              Our Event Packages
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} // Add delay here (in seconds)
              className="text-center"
            >
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="text-4xl">Basic Package</CardTitle>
                  <CardDescription className="text-base">
                    Perfect for small gatherings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside space-y-2">
                    <li>1 Tattoo Artist (3 hours)</li>
                    <li>1 Sketch Artist (2 hours)</li>
                  </ul>
                  <p className="mt-4 text-2xl font-bold">$999</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-12">Book Now</Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }} // Add delay here (in seconds)
              className="text-center"
            >
              <Card className="p-4 mt-8">
                <CardHeader>
                  <CardTitle className="text-4xl">Premium Package</CardTitle>
                  <CardDescription className="text-base">
                    Ideal for medium-sized events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside space-y-2">
                    <li>2 Tattoo Artists (4 hours)</li>
                    <li>2 Interactive Games</li>
                    <li>2 Sketch Artists (3 hours)</li>
                  </ul>
                  <p className="mt-4 text-2xl font-bold">$1,999</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-12">Book Now</Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }} // Add delay here (in seconds)
              className="text-center"
            >
              <Card className="py-4 mt-16">
                <CardHeader>
                  <CardTitle className="text-4xl">Deluxe Package</CardTitle>
                  <CardDescription className="text-base">
                    For large-scale events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside space-y-2">
                    <li>3 Tattoo Artists (6 hours)</li>
                    <li>4 Interactive Games</li>
                    <li>3 Sketch Artists (4 hours)</li>
                    <li>VIP experience add-ons</li>
                  </ul>
                  <p className="mt-4 text-2xl font-bold">$3,999</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-12">Book Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
