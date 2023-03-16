import Head from 'next/head'
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience'
import Works from '@/components/sections/Works'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar> </Navbar>
      <Hero> </Hero>
      <About> </About>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Contact></Contact>
      <Footer/>
    </>
  )
}
