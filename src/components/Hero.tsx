import React from 'react';
import Timer from './Timer';
import Button from '@mui/material/Button';

type Props = {};

const Hero = (props: Props) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600 * 3.5);

  return (
    <div className="pt-10 lg:pt-0 lg:h-[calc(100vh-100px)] w-full flex items-center justify-center bg-slate-50">
      <div className="flex flex-col lg:flex-row px-[20px]  md:px-[100px] md:gap-8 w-full justify-between ">
        {/* --------------Video--------------- */}
        <div>
          <div className="p-3 rounded-xl bg-white drop-shadow-xl border border-gray-100">
            <video
              autoPlay
              loop
              controls
              className="aspect-video w-full  lg:w-[600px] xl:w-[800px] rounded-lg"
            >
              <source src="/video/intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* ------------------Description------------ */}
        <div className="flex flex-col flex-1">
          <p className="text-sm text-slate-900 mt-10 md:mt-2">Basic to Advanced</p>
          <hr />
          <h1 className="text-[28px] font-light text-slate-900 mt-2">
            Learn
            <span className="text-blue-700 font-black">
              {' '}
              Professional Trading Skills{' '}
            </span>
            with India’s Most
            <span className="text-green-2 font-black ">
              {' '}
              Powerful Online Program
            </span>
            .
          </h1>
          <h4 className="text-[18px] text-slate-900 mt-5 mb-5">
            Become a
            <span className="font-bold capitalize text-blue-700">
              {' '}
              Profitable Trader{' '}
            </span>
            and generate your
            <span className="font-bold capitalize text-rose-500">
              {' '}
              Passive Income{' '}
            </span>
            through{' '}
            <span className=" font-bold">
              Trading
            </span>
            .
          </h4>
          {/* Timer */}

          <Timer expiryTimestamp={time} />
          {/* ---------------CTA BUTTON---------------- */}
          <Button className="!bg-green-1 hover:!bg-green-2 !mt-10 !py-4 !rounded-xl !flex !flex-col !text-[22px] md:!text-[24px] !text-[#252525] hover:!text-white !font-black hover:!drop-shadow-xl">
            Book your seat now
            <span className="text-xs font-normal capitalize text-black/50 ">
              offer expiring soon
            </span>
          </Button>
          <p className='text-center mt-5 text-xl animate-pulse'>Limited Time Offer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
