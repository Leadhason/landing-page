'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Hero() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col">
      <header className={`top-0 sticky z-50 w-full transition-colors duration-200 ${
        scrolled ? "bg-white/30 backdrop-blur-sm" : "bg-transparent"
      }`}>
        <div className="container flex h-18 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center p-4">
              <Image
                src="/logoipsum-297.svg"
                alt="EduSync Logo"
                width={150}
                height={150}
                className="rounded"
              />
            </Link>
            <NavigationMenu className="justify-center ml-72 px-4">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-3">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none hover:bg-gray-200 flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-sm font-sm">
                              Student Management Software
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Comprehensive solution for modern educational institutions
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col hover:bg-gray-200 justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-sm font-sm">
                              Staff Management Software
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Comprehensive solution for modern educational institutions
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col hover:bg-gray-200 justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-sm font-sm">
                              Finance Tracking Software
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Comprehensive solution for modern educational institutions
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/features" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Features
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Log In
            </Link>
            <Button>Start Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="container relative flex flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                One tool To{" "}
                <span className="relative">
                  Transform
                  <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-sm" />
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
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
            <div className="mt-12">
              <p className="text-sm text-gray-500 dark:text-gray-400">More than 100+ schools partner with us</p>
              <div className="mt-6 flex items-center justify-center gap-8 grayscale">
                <Image
                  src="/hubspot.svg"
                  alt="HubSpot"
                  width={30}
                  height={20}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/dropbox.svg"
                  alt="Dropbox"
                  width={30}
                  height={20}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/hubspot.svg"
                  alt="Square"
                  width={30}
                  height={20}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/dropbox.svg"
                  alt="Intercom"
                  width={30}
                  height={20}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/hubspot.svg"
                  alt="Grammarly"
                  width={30}
                  height={20}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}