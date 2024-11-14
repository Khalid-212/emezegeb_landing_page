"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DollarSign,
  BarChart3,
  PieChart,
  Smartphone,
  Shield,
  Cloud,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <Link className="flex items-center justify-center" href="#">
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 text-transparent bg-clip-text">
            E-MEZGEB
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden ml-auto text-teal-600 hover:text-teal-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <nav
          className={`lg:flex ml-auto gap-4 sm:gap-6 ${
            isMenuOpen
              ? "flex flex-col absolute top-16 left-0 right-0 px-4 backdrop-blur-sm space-y-4 lg:static lg:space-y-0 lg:px-0 lg:flex-row bg-white/90 "
              : "hidden"
          }`}
        >
          <Link
            className="text-sm font-medium hover:text-teal-600 transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-teal-600 transition-colors"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:text-teal-600 transition-colors"
            href="#faq"
          >
            FAQ
          </Link>
          <Link
            className="text-sm font-medium hover:text-teal-600 transition-colors"
            href="#waitlist"
          >
            Join Waitlist
          </Link>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-12 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center items-center space-y-4"
                {...fadeIn}
              >
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Revolutionize Your Bookkeeping with E-MEZGEB
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto">
                    Experience the future of financial management. E-MEZGEB is
                    your all-in-one mobile solution for effortless bookkeeping
                    and insightful financial analysis.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-center">
                  <Button
                    className="bg-teal-600 text-white hover:bg-teal-700 transition-colors rounded-xl"
                    onClick={() =>
                      document
                        .getElementById("waitlist")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Join the Waitlist
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 transition-colors rounded-xl"
                    onClick={() =>
                      document
                        .getElementById("features")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Features
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  alt="E-MEZGEB App Preview"
                  className="width-[400px] overflow-hidden rounded-xl object-cover object-center"
                  height="800"
                  src="/iphone.png"
                  width="600"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-gradient-to-r from-teal-600 to-emerald-600 text-transparent bg-clip-text"
              {...fadeIn}
            >
              Powerful Features Await You
            </motion.h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: BarChart3,
                  title: "Real-time Expense Tracking",
                  description:
                    "Log and categorize expenses instantly for up-to-date financial insights.",
                },
                {
                  icon: PieChart,
                  title: "Comprehensive Financial Reports",
                  description:
                    "Generate detailed reports to visualize your financial health at a glance.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-First Design",
                  description:
                    "Access your finances anytime, anywhere with our intuitive mobile interface.",
                },
                {
                  icon: Shield,
                  title: "Bank-Grade Security",
                  description:
                    "Rest easy knowing your financial data is protected by state-of-the-art encryption.",
                },
                {
                  icon: Cloud,
                  title: "Cloud Syncing",
                  description:
                    "Seamlessly sync your data across all your devices for consistent access.",
                },
                {
                  icon: Users,
                  title: "Multi-User Support",
                  description:
                    "Collaborate with your team or accountant with granular permission controls.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-6 bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <feature.icon className="h-12 w-12 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white"
              {...fadeIn}
            >
              What Early Testers Are Saying
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  name: "Mekonen Asres",
                  role: "Small Business Owner",
                  quote:
                    "E-MEZGEB has simplified my bookkeeping process immensely. I can't wait for the full release!",
                },
                {
                  name: "Tesfaye Abebe",
                  role: "Small Business Owner",
                  quote:
                    "The real-time expense tracking feature is a game-changer for managing my Stores finances.",
                },
                {
                  name: "Mohammed Seid",
                  role: "Small Business Owner",
                  quote:
                    "The insights from E-MEZGEB's financial reports have been crucial for my planning.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-6 bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-gray-600 text-center italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-gradient-to-r from-teal-600 to-emerald-600 text-transparent bg-clip-text"
              {...fadeIn}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  question: "When will E-MEZGEB be available?",
                  answer:
                    "We're working hard to launch E-MEZGEB soon. Join our waitlist to be notified about our release date and early access opportunities.",
                },
                {
                  question: "Is my financial data secure with E-MEZGEB?",
                  answer:
                    "Absolutely. We use bank-grade encryption and follow industry best practices to ensure your data is always protected.",
                },
                {
                  question: "Can I use E-MEZGEB for my small business?",
                  answer:
                    "Yes! E-MEZGEB is designed to cater to individuals, freelancers, and small to medium-sized businesses.",
                },
                {
                  question:
                    "Will E-MEZGEB integrate with other financial tools?",
                  answer:
                    "We're planning integrations with popular accounting software and banks. Stay tuned for more details as we approach launch.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Waitlist Section */}
        <section
          id="waitlist"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-600 to-emerald-600 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div className="space-y-2" {...fadeIn}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Be the First to Experience E-MEZGEB
                </h2>
                <p className="max-w-[900px] text-teal-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our exclusive waitlist and get early access when E-MEZGEB
                  launches. Don't miss out on the future of mobile bookkeeping!
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-sm space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-gray-800 placeholder:text-gray-400 rounded-xl outline-none border-none py-4"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-emerald-500 text-white hover:bg-emerald-600 transition-colors rounded-xl"
                  >
                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs text-teal-100">
                  By joining, you agree to receive updates about E-MEZGEB. We
                  respect your privacy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the content */}
      </main>

      <footer className="w-full py-6 bg-white border-t flex justify-center">
        <div className="container flex flex-col gap-2 sm:flex-row items-center justify-between px-4 md:px-6">
          <p className="text-sm text-gray-600">
            © 2023 E-MEZGEB. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-teal-600 transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-teal-600 transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-600 hover:text-teal-600 transition-colors"
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
