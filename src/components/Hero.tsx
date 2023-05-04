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
          <div className="p-3 bg-white border border-gray-100 rounded-xl drop-shadow-xl">
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
          <p className="mt-10 text-sm text-slate-900 md:mt-2">
            Basic to Advanced
          </p>
          <hr />
          <h1 className="text-[18px] md:text-[28px] font-light text-slate-900 mt-2">
            Learn
            <span className="font-black text-blue-700">
              {' '}
              Professional Trading Skills{' '}
            </span>
            with India’s Most
            <span className="font-black text-green-2 ">
              {' '}
              Powerful Online Program
            </span>
            .
          </h1>

          <div className="my-5 mb-5 md:mb-10 text-[18px] md:text-[28px]  font-light text-gray-900">
            <h1>
              Starting from
              <span className="font-black text-blue-700">
                {' '}
                15
                <span className='text-xs mb-[-20px]'>th</span>{" "}
                may 2023, 09:00-PM Onwards
              </span>
            </h1>
          </div>
          {/* Timer */}

          <Timer expiryTimestamp={time} />
          {/* ---------------CTA BUTTON---------------- */}
          <Button className="!bg-green-1 hover:!bg-green-2 !mt-5 md:!mt-10 !py-4 !rounded-xl !flex !flex-col !text-[22px] md:!text-[24px] !text-[#252525] hover:!text-white !font-black hover:!drop-shadow-xl">
            Book your seat now
            <span className="text-xs font-normal capitalize text-black/50 ">
              offer expiring soon
            </span>
          </Button>
          <p className="mt-5 text-xl text-center animate-pulse">
            Limited Time Offer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
