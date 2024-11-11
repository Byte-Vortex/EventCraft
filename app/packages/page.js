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

const packageData = [
  {
    title: "Basic Package",
    description: "Perfect for small party/events",
    details: ["1 Tattoo Artist (3 hours)", "1 Sketch Artist (2 hours)"],
    price: "Rs. 2,999",
    delay: 0.3,
    className: "p-4 rounded-2xl", // Custom class for Basic Package
  },
  {
    title: "Premium Package",
    description: "Ideal for medium-sized events",
    details: [
      "2 Tattoo Artists (4 hours)",
      "2 Interactive Games",
      "2 Sketch Artists (3 hours)",
    ],
    price: "Rs. 5,999",
    delay: 0.6,
    className: "p-4 md:mt-8 rounded-2xl", // Custom class for Premium Package

  },
  {
    title: "Deluxe Package",
    description: "For large-scale events",
    details: [
      "3 Tattoo Artists (6 hours)",
      "4 Interactive Games",
      "3 Sketch Artists (4 hours)",
      "VIP experience add-ons",
    ],
    price: "Rs. 8,999",
    delay: 0.9,
    className: "p-4 md:mt-16 rounded-2xl", // Custom class for Deluxe Package

  },
];

const PackageCard = ({
  title,
  description,
  details,
  price,
  delay,
  className
}) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`text-center ${className}`}
  >
    <Card className="p-4 rounded-2xl shadow-lg shadow-pink-700">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-inside text-sm space-y-2">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <p className="mt-4 text-2xl font-bold">{price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full h-12">Book Now</Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export default function Packages() {
  return (
    <div className="bg-background text-foreground">
      <main className="py-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-pink-600 py-2">
              Our Event Packages
            </h1>
          </motion.div>

          <div className="hidden md:flex">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 px-8">
              {packageData.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>

          <div className="md:hidden pb-10 px-6 ">
            <div className="grid grid-cols-1 gap-8 pt-6">
              {packageData.map((pkg, index) => (
                <PackageCard
                  key={index}
                  title={pkg.title}
                  description={pkg.description}
                  details={pkg.details}
                  price={pkg.price}
                  delay={pkg.delay + 0.2} // Adjust delay for mobile view if needed
                  className={pkg.className}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
