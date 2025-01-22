'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tiles } from "@/components/ui/tiles"

export default function Hero() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-orange-100 via-orange-50 to-transparent">
      <div className="relative z-10 flex flex-col container mx-auto">
        <main className="flex-1">
          <section className="relative">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="container relative flex flex-col items-center justify-center gap-4 py-20 text-center md:py-32">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  One tool To{" "}
                  <span className="relative">
                    Transform
                    <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  </span>
                  <br />
                  The Way Your School Runs
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Empower administrators, teachers, and parents with a seamless platform for efficient school management and enhanced student success.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-[#015847] hover:bg-[#015847]/90">
                  Start for Free
                </Button>
                <Button size="lg" variant="outline">
                  Get a Demo
                </Button>
              </div>
              <div className="mt-12 items-center justify-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">More than 100+ schools partner with us</p>
                <div className="mt-2 flex items-center w-16 justify-center gap-8 grayscale ml-20">
                  <Image
                    src="/hubspot.svg"
                    alt="HubSpot"
                    width={30}
                    height={20}
                    className="h-10 w-auto"
                  />
                  <Image
                    src="/dropbox.svg"
                    alt="Dropbox"
                    width={30}
                    height={20}
                    className="h-10 w-auto object-fit"
                  />
                  <Image
                    src="/hubspot.svg"
                    alt="Square"
                    width={30}
                    height={20}
                    className="h-10 w-auto object-fit"
                  />
                  <Image
                    src="/dropbox.svg"
                    alt="Intercom"
                    width={30}
                    height={20}
                    className="h-10 w-auto object-fit"
                  />
                  <Image
                    src="/hubspot.svg"
                    alt="Grammarly"
                    width={30}
                    height={20}
                    className="h-10 w-auto object-fit"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}