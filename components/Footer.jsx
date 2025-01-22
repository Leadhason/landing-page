import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C322D] text-white">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-gray-700">
          <h2 className="text-2xl md:text-2xl font-semibold mb-4 md:mb-0">
            Discover the full scale of <br />
            <span className="underline decoration-[#C5F82A]">EduSync capabilities</span>
          </h2>
          <div className="space-x-4">
            <Button variant="outline" className="bg-white text-[#1C322D] hover:bg-gray-100">
              Get a Demo
            </Button>
            <Button className="bg-[#C5F82A] text-[#1C322D] hover:bg-[#b3e626]">
              Start for Free
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">EduSync</span>
            </Link>
            <div className="space-y-2">
              <Link href="mailto:hello@clause.com" className="block hover:underline">
                hello@edusync.com
              </Link>
              <Link href="tel:+621987654321" className="block hover:underline">
                +621 987 654 321
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Solution</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Why Cequence</Link></li>
              <li><Link href="#" className="hover:underline">Features</Link></li>
              <li><Link href="#" className="hover:underline">OpenAI</Link></li>
              <li><Link href="#" className="hover:underline">Technology</Link></li>
              <li><Link href="#" className="hover:underline">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customers</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Procurement</Link></li>
              <li><Link href="#" className="hover:underline">Sales</Link></li>
              <li><Link href="#" className="hover:underline">Legal</Link></li>
              <li><Link href="#" className="hover:underline">Medium</Link></li>
              <li><Link href="#" className="hover:underline">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Pricing</Link></li>
              <li><Link href="#" className="hover:underline">Contact Sales</Link></li>
              <li><Link href="#" className="hover:underline">Changelog</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© Copyright 2024 EduSync. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}