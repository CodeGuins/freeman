import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import MiniFooter from '../components/MiniFooter';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Freeman Trucking</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center px-4 sm:px-6 lg:px-8 py-16 max-w-3xl mx-auto">
            <h1 className="text-9xl font-bold text-truck-orange-500 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-truck-blue-900 mb-6">Page Not Found</h2>
            
            <div className="mb-8">
              <img 
                src="/assets/vincent.gif" 
                alt="Confused" 
                className="mx-auto rounded-lg shadow-lg max-w-md w-full"
              />
            </div>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Well, this is awkward. Either Biv messed something up in the code, or there's a typo in the link you followed.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Either way, you've reached a page that doesn't exist. But don't worry, we've got options!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/"
                className="bg-truck-orange-500 hover:bg-truck-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
              >
                Go Back Home
              </Link>
              <Link 
                href="/contact"
                className="bg-transparent border-2 border-truck-blue-900 hover:bg-truck-blue-900 hover:text-white text-truck-blue-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 w-full sm:w-auto"
              >
                Contact Us (Fire Biv?)
              </Link>
            </div>
          </div>
        </div>
        <MiniFooter />
      </main>
    </>
  );
}
