import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const OurApp = (props: Props) => {
  return (
    <section className="h-screen bg-slate-50 flex justify-center items-center w-full">
      <div className="relative w-1/2 flex justify-center">
        <div className="absolute rounded-full top-[60px] h-[400px] w-[400px] bg-gradient-to-tl from-blue-800 to-blue-600 " />
        <Image
          src={'/imgs/phn.png'}
          width={230}
          height={450}
          alt="Oye Trader App"
          className='relative'
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-[78px] font-black text-[#252525]">Download</h1>
        <h3 className="text-[52px] font-light text-[#252525] mt-[-30px] mb-[30px]">
          Our New App
        </h3>
        <p className="mt-[-30px] mb-[30px] text-gray-700 w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ipsa mollitia odit consequatur repellat eos nam qui! Tenetur quaerat
          iste sint sequi quia dolorem, incidunt repudiandae sapiente quis
          perspiciatis ut.
        </p>
        <Link
          href={'https://play.google.com/store/apps/details?id=co.diy17.wczoq'}
        >
          <div className="text-[48px] font-light bg-gradient-to-t from-lime-700 to-lime-600 w-[400px] rounded-2xl p-2 text-white flex items-center  justify-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 hover:drop-shadow-2xl">
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
