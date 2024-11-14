"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { cva } from "class-variance-authority";

// Card Data Array
const cardData = [
  {
    imgSrc: "/1.jpg",
    title: "Tattoo Artists",
    description: "Professional event tattoos",
    content:
      "Our skilled tattoo artists bring a unique flair to your event, offering custom designs and temporary tattoos.",
    animationVariant: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    link: "/services/tattoo-artists",
  },
  {
    imgSrc: "/2.jpg",
    title: "Interactive Games",
    description: "Engaging entertainment for all",
    content:
      "From high-tech VR experiences to classic party games, we have something for everyone to enjoy.",
    animationVariant: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    link: "/services/games",
  },
  {
    imgSrc: "/3.jpg",
    title: "Sketch Artists",
    description: "Capture moments in art",
    content:
      "Our talented sketch artists create beautiful, on-the-spot portraits and caricatures for your guests.",
    animationVariant: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    link: "/services/sketch-artists",
  },
];

const TitleStyle = cva("text-center text-2xl ");
const DescriptionStyle = cva("text-center text-base ");

// AnimatedCard Component
const AnimatedCard = ({ card }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
    delay: 0.5,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={card.animationVariant}
      initial="hidden"
      animate={controls}
    >
      <Card className="h-auto">
        <CardHeader>
          <CardTitle className={cn(TitleStyle())}><Link href={card.link}>{card.title}</Link></CardTitle>
          <CardDescription className={cn(DescriptionStyle())}>
            {card.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={card.link}>
          <div class="overflow-hidden h-48 rounded-md w-full md:w-1/2 lg:w-full mb-4">
            <Image
              src={card.imgSrc}
              alt={card.title}
              height="200"
              width="400"
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
            />
            </div>
          </Link>
          <p className="text-muted-foreground">{card.content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function OurServicesSection() {
  // Section Animation
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8, triggerOnce: true });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const TitleControls=useAnimation();
  const [titleref,titleinView] = useInView({ threshold: 0.2, triggerOnce:true });
  useEffect(() => {
    if (titleinView) TitleControls.start("visible");
  }, [TitleControls,titleinView]);
  
  return (
    <div>
      {/* Our Services Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto w-full px-7">
          <motion.div
            ref={titleref}
            variants={titleVariants}
            initial="hidden"
            animate={TitleControls}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our Services
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <AnimatedCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
