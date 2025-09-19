import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedCampaigns from '@/components/FeaturedCampaigns'
import LocalFeatures from '@/components/LocalFeatures'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCampaigns />
      <LocalFeatures />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  )
}
