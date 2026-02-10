import Head from 'next/head';
import Navbar from '../components/Navbar';
import QuoteRequest from '../components/QuoteRequest';
import MiniFooter from '../components/MiniFooter';

export default function GetAQuotePage() {
  return (
    <>
      <Head>
        <title>Get a Quote - Freeman Trucking</title>
        <meta name="description" content="Request a quote for drayage and intermodal transportation services from Freeman Trucking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <QuoteRequest />
        <MiniFooter />
      </main>
    </>
  );
}
