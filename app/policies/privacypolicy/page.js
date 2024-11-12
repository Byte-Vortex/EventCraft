"use client"
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Privacy Policy
          </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-left"
          >
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
            <p>
              At EventCraft, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </p>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect personal information that you provide to us, such as your name, email address, phone number, and any other details you share when booking our services or contacting us.
            </p>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you about your bookings and inquiries</li>
              <li>To send you updates and promotional materials (with your consent)</li>
              <li>To analyze and improve our website and services</li>
            </ul>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services to process payments or analyze website traffic. These services have their own privacy policies, and we encourage you to review them.
            </p>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights or have any questions about our privacy practices.
            </p>
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our website.
            </p>
            <p className="mt-8">
              If you have any questions or concerns about our Privacy Policy, please contact us at privacy@eventcraft.com.
            </p>
          </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}