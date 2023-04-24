import { Inter } from 'next/font/google';
import Header from '@/layouts/Header/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials/Testimonials';
import Pricing from '@/components/Pricing/Pricing';
import Image from 'next/image';
import Curriculum from '@/components/Curriculum';
import OurApp from '@/components/App/OurApp';
import FAQ from '@/components/FAQ';
import FooterSection from '@/layouts/Footer/FooterSection';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Oye Trader</title>
        <link rel="icon" href="/logo/logo-wot-white.png" />
        <meta
          name="description"
          content="Learn Professional Trading Skills with India’s Most Powerful Online Program."
        />
        {/* <meta property="og:url" content="your url" /> */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oye Trader" />
        <meta
          property="og:description"
          content="Learn Professional Trading Skills with India’s Most Powerful Online Program.
          Become a Profitable Trader and generate your Passive Income through Trading."
        />
        <meta property="og:image" content={'/imgs/og.png'} />

      </Head>
      <main className={`${inter.className} w-full `}>
        <Header />
        <Hero />
        <Testimonials />
        <Pricing />
        <section className="flex justify-center w-full bg-[#f2f2f2] drop-shadow-xl ">
          <div className="w-full md:w-[70%]  flex justify-center p-10 items-center h-[300px]">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  src="/icons/lock.png"
                  alt="Oye Trader Payment"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h1 className="text-[32px] text-rose-600 font-black ">
                  Secure Processing
                </h1>
                <p className="text-gray-600 w-[60%]">
                  Each order is processed through a secure, 256-bit encrypted
                  payment processing gateway to ensure your privacy.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <Image
                  src="/icons/guar.png"
                  alt="Oye Trader Payment"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h1 className="text-[32px] text-rose-600 font-black ">
                  100% Satisfaction Guarantee
                </h1>
                <p className="text-gray-600 ">
                  Get your amount refunded within 7 days if you are not
                  satisfied by the workshop
                </p>
              </div>
            </div>
          </div>
        </section>
        <Curriculum />
        <OurApp />
        <FAQ />
        <FooterSection />
      </main>
    </>
  );
}
