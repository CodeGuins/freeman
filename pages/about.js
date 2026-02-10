import Head from 'next/head';
import Navbar from '../components/Navbar';
import About from '../components/About';
import MiniFooter from '../components/MiniFooter';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Freeman Trucking</title>
        <meta name="description" content="Learn about Freeman Trucking, one of Chicago's original drayage companies serving the Midwest since 1999" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <About />
        <MiniFooter />
      </main>
    </>
  );
}
