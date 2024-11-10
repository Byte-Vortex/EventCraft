"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "./ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { motion, useAnimation } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { DatePicker } from "./ui/datepicker";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function BookingSection() {
    const formControls = useAnimation();
    const [formRef, formInView] = useInView({ threshold: 0.2, triggerOnce: true });
    useEffect(() => {
      if (formInView) formControls.start('visible');
    }, [formControls, formInView]);
    const formVariants = {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
  
  return (
    <div>
      {/* Booking Section */}
      <section className="py-20 bg-muted/50" id="bookingsection">
        <div className="container mx-auto">
          <motion.div
            ref={formRef}
            variants={formVariants}
            initial="hidden"
            animate={formControls}
          >
            <div className="max-w-2xl mx-auto">
              <Card className="max-w-lg mx-auto bg-background selection:bg-transparent">
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
                            <SelectValue placeholder="Event"></SelectValue>
                          </SelectTrigger>
                          <SelectContent className="absolute z-50 bg-background">
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
    </div>
  );
}
