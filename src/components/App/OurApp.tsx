import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const OurApp = (props: Props) => {
  return (
    <section className="flex flex-col md:items-center md:justify-center w-full md:h-screen md:flex-row bg-slate-50 px-[10px] md:px-0">
      <div className="relative flex justify-center hidden w-1/2 md:block">
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
        <h1 className="text-2xl md:text-[78px] font-black text-[#252525]">Download</h1>
        <h3 className="text-2xl md:text-[52px] font-light text-[#252525] md:mt-[-30px] md:mb-[30px]">
          Oye Trader App
        </h3>
        <p className="md:mt-[-30px] md:mb-[30px] text-gray-700 md:w-[80%] text-sm md:text-base mt-10 md:mt-0">
          Whether you&apos;re a seasoned trader or a novice investor, this app
          has something for everyone. With real-time market updates, expert
          analysis, and trading strategies, you can make informed investment
          decisions and stay ahead of the curve. Oye Trader offers a
          user-friendly interface, making it easy to navigate through various
          trading options and learn more about the stock market. So, what are
          you waiting for? Download Oye Trader now and take your trading game
          to the next level.
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
