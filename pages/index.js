import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Freeman Trucking - Delivering Excellence Across America</title>
        <meta name="description" content="Your trusted partner in freight logistics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <ServicesGrid />
        <Footer />
      </main>
    </>
  )
}
