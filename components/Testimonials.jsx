'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "We’ve reduced paperwork by 80%. The platform is a game-changer for our administrative team.",
      author: "Sarah Johnson",
      role: "School Director",
      avatar: "https://github.com/shadcn.png"
    },
    {
      quote: "Communication with parents is so much faster now. I can focus on teaching while keeping parents informed",
      author: "Michael Lee",
      role: "Grade 4 Teacher",
      avatar: "https://github.com/shadcn.png"
    },
    {
      quote: "The insights we get from this system are incredible—it helps us make better decisions every day.",
      author: "Priya Sharma",
      role: " Principal",
      avatar: "https://github.com/shadcn.png"
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full items-center justify-center py-8 md:py-16 lg:py-18 bg-[#F7F7F7]">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="w-full max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-white border-none shadow-none">
              <div className="p-8 md:p-12">
                <div className="relative space-y-4">
                  <div className="text-6xl font-serif text-[#C5F82A] absolute top-0 -mt-5 left-0">"</div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#1C322D] mt-8 mb-6">
                      {testimonials[currentIndex].quote}
                    </p>
                  <div className="flex items-center justify-center space-x-4 pt-4">
                    <img
                      alt={`${testimonials[currentIndex].author} avatar`}
                      className="rounded-full"
                      height="40"
                      src={testimonials[currentIndex].avatar}
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-[#1C322D]">{testimonials[currentIndex].author}</div>
                      <div className="text-sm text-gray-500">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="flex justify-center space-x-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#1C322D] text-[#1C322D]"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#1C322D] text-[#1C322D]"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-[#1C322D] py-16 items-center w-full justify-center mt-10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-white">2021</p>
                <p className="text-sm text-gray-400">EduSync Founded</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">50K+</p>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">1k+</p>
                <p className="text-sm text-gray-400">Company Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}