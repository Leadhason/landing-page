import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Demo from '../components/Demo'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import BusinessTypes from '../components/BusinessTypes'
import FAQ from '../components/FAQ'


export default function Home() {
  return (
    <div className="container mx-auto">
      <main className="">
        <Hero />
        <Features />
        <Demo />
        <BusinessTypes />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </div>
  )
}