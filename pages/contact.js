import Head from 'next/head';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import MiniFooter from '../components/MiniFooter';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Freeman Trucking</title>
        <meta name="description" content="Get in touch with Freeman Trucking for all your drayage and intermodal transportation needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
        <main>
          <Navbar />
          <Contact />
          <MiniFooter />
        </main>
      </GoogleReCaptchaProvider>
    </>
  );
}
