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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-pink/30 dark:bg-black/30 text-foreground">
        <div className="container flex h-18 items-center justify-between w-full px-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center p-4">
              <Image
                src="/logoipsum-297.svg"
                alt="EduSync Logo"
                width={150}
                height={150}
                className="rounded"
              />
            </Link>
          </div>
          <div>
            <NavigationMenu className="justify-center px-3">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-lg font-light">Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[250px] gap-3 p-3">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full hover:bg-gray-100 flex-col justify-end p-3 no-underline outline-none"
                              href="/"
                            >
                              <div className="p-2 text-md">
                                Student Management Software
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col hover:bg-gray-100 justify-end p-3 no-underline outline-none"
                              href="/"
                            >
                              <div className="p-2 text-md">
                                Staff Management Software
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col hover:bg-gray-100 justify-end p-3 no-underline outline-none"
                              href="/"
                            >
                              <div className="p-2 text-md">
                                Finance Tracking Software
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/features" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-light transition-colors disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Features
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-light transition-colors disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-light transition-colors disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Blog
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4 px-2">
            <Link
              href="/login"
              className="text-sm font-semibold hover:underline underline-offset-4"
            >
              Log In
            </Link>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>
  )
}

export default Navbar