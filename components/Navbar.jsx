import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 text-foreground mx-auto container">
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
            <NavigationMenu className="justify-center ml-72 px-3">
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
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-lg transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Features
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-lg transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-lg transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
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
  )
}

export default Navbar