import OurApp from '@/components/App/OurApp';
import Curriculum from '@/components/Curriculum';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing/Pricing';
import Testimonials from '@/components/Testimonials/Testimonials';
import FooterSection from '@/layouts/Footer/FooterSection';
import Header from '@/layouts/Header/Header';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Oye Trader</title>
        <link rel="icon" href="/fff.png" />
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
      <main className={`${inter.className} w-full bg-slate-50`}>
        <Header />
        <Hero />
        <Testimonials />
        <Pricing />
        <section className="flex flex-col md:flex-row justify-center w-full bg-[#f2f2f2] drop-shadow-xl mt-20">
          <div className="w-full md:w-[70%]  flex flex-col md:flex-row justify-center p-10 items-center md:h-[300px]">
            <div className="flex items-center justify-center ">
              <div>
                <Image
                  src="/icons/lock.png"
                  alt="Oye Trader Payment"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-[32px] text-rose-600 font-black ">
                  Secure Processing
                </h1>
                <p className="text-gray-600 md:w-[60%]">
                  Each order is processed through a secure, 256-bit encrypted
                  payment processing gateway to ensure your privacy.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-10 md:mt-0">
              <div>
                <Image
                  src="/icons/guar.png"
                  alt="Oye Trader Payment"
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-[32px] text-rose-600 font-black ">
                  100% Satisfaction Guarantee
                </h1>
                <p className="text-gray-600 ">
                  Get your amount refunded within 7 days if you are not
                  satisfied by the Workshop.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Curriculum />
        <OurApp />
        {/* <FAQ /> */}
        <FooterSection />
      </main>
    </>
  );
}
