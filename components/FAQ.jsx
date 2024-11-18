'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is a school management system, and how does it help my school?",
      answer: " A school management system is an all-in-one platform that simplifies administrative tasks, improves communication, and enhances classroom management. It helps schools save time, stay organized, and focus on student success."
    },
    {
      question: "Is your platform suitable for small schools?",
      answer: "Absolutely! Our Starter plan is designed specifically for smaller schools, offering essential features like attendance tracking, basic reporting, and gradebook management."
    },
    {
      question: "How easy is it to get started?",
      answer: "Very easy! Our onboarding process is streamlined, and we provide tutorials and dedicated support to help your school start using the platform right away."
    },
    {
      question: "Can parents and teachers communicate directly through the platform?",
      answer: "Yes! Our communication tools enable direct messaging between parents and teachers, along with automated updates about attendance, grades, and school events."
    },
    {
      question: " Is my school’s data secure?",
      answer: "Absolutely. We prioritize your security with advanced encryption, regular data backups, and strict access controls to ensure your data is always safe."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! We provide email support for all plans, with priority and 24/7 support available for Professional and Enterprise plans."
    }
  ]

  return (
    <section className="w-full py-8 md:py-16 lg:py-20 bg-[#F7F7F7]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Frequently<br />
              <span className="text-4xl">Asked</span> Questions
            </h2>
            <p className="text-gray-500 mb-8">
              Find answers to the most common questions about our platform, features, and services. If you need more help, feel free to reach out to our support team.
            </p>
            <Button className="bg-[#37D1AA] text-lg p-4 hover:bg-[#2bb090] text-white">
              Contact Us
            </Button>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  className="flex justify-between items-center w-full py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}