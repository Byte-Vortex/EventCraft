"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main id="lastupdated" className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Terms & Conditions
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-left"
          >
            <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
              <p className="font-semibold">
                Last updated :{" "}
                <span className="font-light">1 November 2024</span>
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using our website and services, you agree to
                these Terms and Conditions. If you do not agree, please
                discontinue use of our site and services.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Use of Services
              </h2>
              <p>
                You agree to use our services only for lawful purposes and in a
                manner that does not infringe the rights of, restrict, or
                inhibit anyone else&apos;s use of the website.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Account Registration
              </h2>
              <p>
                To book services, you may need to register for an account. You
                agree to provide accurate and complete information during
                registration and to keep your account credentials secure.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Booking and Payment
              </h2>
              <p>
                When booking an event, you must provide payment details. All
                bookings are subject to availability and confirmation. Payments
                must be made as outlined in the booking process.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Cancellation Policy
              </h2>
              <p>
                If you need to cancel an event booking, the following conditions
                apply:
              </p>
              <div className="pl-2">
                <p>
                  Cancellations 30 Days or More Before Event Date :
                  <ul className="list-disc pl-8 py-1">
                    <li>
                      Full refund, minus any non-refundable deposit or
                      processing fees.
                    </li>
                  </ul>
                </p>
                <p>
                  Cancellations Between 14 to 20 Days Before Event Date :
                  <ul className="list-disc pl-8 py-1">
                    <li>
                      75% refund of the total booking amount, minus any
                      non-refundable deposit or processing fees.
                    </li>
                  </ul>
                </p>
                <p>
                  Cancellations Less than 10 Days Before Event Date :
                  <ul className="list-disc pl-8 py-1">
                    <li>
                      25% refund will be issued. However, you may be eligible to
                      reschedule the event, depending on availability and at the
                      discretion of EventCraft.
                    </li>
                  </ul>
                </p>
                <p>
                  Cancellations Less than 4-5 Days Before Event Date :
                  <ul className="list-disc pl-8 py-1">
                    <li>
                      No refund will be issued. However, you may be eligible to
                      reschedule the event, depending on availability and at the
                      discretion of EventCraft.
                    </li>
                  </ul>
                </p>
                <p>
                  No-Show :
                  <ul className="list-disc pl-8 py-1">
                    <li>
                      If you do not show up for the event or fail to inform us
                      of a cancellation, no refund will be issued.
                    </li>
                  </ul>
                </p>
              </div>

              <p>
                Please note that some bookings may have additional cancellation
                restrictions based on the specific event or vendor. These will
                be clearly outlined in the booking confirmation and
                cancellation.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Refund Policy
              </h2>
              <p>
                Refunds are processed according to the cancellation terms
                outlined above. Please note:
              </p>
              <ul className="list-disc pl-8 py-1">
                <li>
                  Refunds will be credited to the original payment method within
                  5 business days of cancellation confirmation.
                </li>
                <li>
                  Certain non-refundable deposits or processing fees may apply.
                </li>
                <li>
                  For rescheduled events, no refund is provided, but the payment
                  can be applied toward the rescheduled date.
                </li>
                <li>
                  EventCraft reserves the right to deny refund requests that do
                  not comply with our cancellation policy.
                </li>
              </ul>
              <p className="mt-8">
                If we need to cancel an event due to unforeseen circumstances or
                external factors, we will offer a full refund or an opportunity
                to reschedule the event, depending on user preference.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos,
                and software, is the property of EventCraft and protected by
                copyright laws. Unauthorized use of our content is prohibited.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p>
                To the extent permitted by law, [EventPlanner Website] is not
                liable for any damages arising out of or in connection with the
                use or inability to use our services.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any
                time. Updated terms will be posted on this page with a new
                <Button
                  variant="ghost"
                  className="text-pink-600 hover:bg-transparent hover:text-pink-700 -mx-2"
                  onClick={() => {
                    const lastupdated = document.getElementById("lastupdated");
                    if (lastupdated) {
                      lastupdated.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Last updated
                </Button>
                date.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us at .
                <Link href="mailto:akshatanwar24@gmail.com">
                  <Button
                    variant="ghost"
                    className="text-pink-600 hover:bg-transparent hover:text-pink-700 -mx-2"
                  >
                    akshatanwar24@gmail.com
                  </Button>
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
