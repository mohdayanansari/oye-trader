import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const OurApp = (props: Props) => {
  return (
    <section className="flex flex-col md:items-center md:justify-center w-full md:h-screen md:flex-row bg-slate-50 px-[10px] md:px-0">
      <div className="relative items-center justify-center hidden w-1/2 md:flex">
        <div className="absolute rounded-full top-[60px] h-[400px] w-[400px] bg-gradient-to-tl from-blue-800 to-blue-600 " />
        <Image
          src={'/imgs/phn.png'}
          width={230}
          height={450}
          alt="Oye Trader App"
          className="relative"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-[78px] font-black text-[#252525]">
          Download
        </h1>
        <h3 className="text-4xl md:text-[52px] font-light text-[#252525] mt-10">
          Oye Trader App
        </h3>
        <p className=" md:mb-[30px] text-gray-700 md:w-[80%] text-sm md:text-base mt-10 ">
          Unlock the secrets of successful trading with Oye Trader. We offer
          live and recorded classes on market analysis, risk management, and
          trading psychology. Join to start your journey towards financial
          success!
        </p>
        <Link
          href={'https://play.google.com/store/apps/details?id=co.diy17.wczoq'}
        >
          <div className="text-2xl md:text-[48px] font-light bg-gradient-to-t from-lime-700 to-lime-600 md:w-[400px] rounded-2xl p-2 text-white flex items-center  justify-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 hover:drop-shadow-2xl my-10 md:mt-0">
            <Image
              src={'/icons/playstore.png'}
              width={80}
              height={80}
              alt="Oye Trader App"
            />
            Oye Trader
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OurApp;
