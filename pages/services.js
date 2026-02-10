import Head from 'next/head';
import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import ServicesSections from '../components/ServicesSections';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Freeman Trucking</title>
        <meta name="description" content="Comprehensive drayage and logistics services in the Chicago region and Midwest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <ServicesHero />
        <ServicesSections />
        <Footer />
      </main>
    </>
  );
}
