import { Button } from '@mui/material';
import React from 'react';

type Props = {};

const Pricing = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-slate-50 ">
      <div className="relative flex flex-col items-end text-[32px] font-black text-[#252525]">
        <div className="z-20">Ready to get started?</div>
        {/* <div className="w-[120px] h-[15px] bg-green-1 rounded-xl mt-[-20px] " /> */}
      </div>
      <p className="text-center text-gray-500 text-[14px] mt-2">
        Enroll Now!
      </p>

      {/* --------------------CARDS----------------- */}
      <div className="w-full md:w-[70%] bg-gradient-to-tl from-blue-800 to-blue-900 h-[550px] rounded-3xl drop-shadow-lg mt-10 p-2 md:p-10">
        <h4 className="text-[28px] text-white font-bold text-center border-b border-white/30 pb-2">
          Here&apos;s what you&apos;ll get!
        </h4>
        <p></p>

        <div className="flex gap-5 mt-10">
          {/* Desc col */}
          <div className="text-white flex flex-col gap-4 w-[65%]">
            <p>
              ✅
              <span className="text-lg text-white/90 ">
                Live Classes : One month alternate live sessions - MWF :
                Starting from 15th May, 09:00 PM onwards
                <strong> (Value ₹999)</strong>
              </span>
            </p>
            <p>
              ✅
              <span className="text-lg text-white/90 ">
                Weekly Doubt Sessions: Every Sunday
                <strong> (₹499)</strong>
              </span>
            </p>
            <p>
              ✅
              <span className="text-lg text-white/90 ">
                Private Telegram Community Access
                <strong> (₹399)</strong>
              </span>
            </p>
            <p>
              ✅
              <span className="text-lg text-white/90 ">
                <strong>BONUS: </strong>
                Call and Whatsapp chat support
                <strong> (₹99)</strong>
              </span>
            </p>
            <p>
              ✅
              <span className="text-lg text-white/90 ">
                <strong>BONUS: </strong>
                Premium Trading Ebooks & PDFs worth
                <strong>{" "}₹10000</strong>
              </span>
            </p>
            <p>
              ✅
              <span className="text-lg text-white/90 ">
                <strong>BONUS: </strong>
                Premium Trading Checklist
                <strong>{" "}(₹1999)</strong>
              </span>
            </p>
            <p>
              ✅
              <span className="text-lg text-white/90 ">
                <strong>BONUS: </strong>
                Self made short revision notes
                <strong>{" "}(₹499)</strong>
              </span>
            </p>
            <p>
              ✅
              <span className="text-lg text-white/90 ">
                <strong>BONUS: </strong>
                Certificate of completion (Priceless)
              </span>
            </p>
          </div>
          {/* pricing col */}
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="flex flex-col gap-3 text-center text-white ">
              <p className="text-2xl line-through">Total Value: ₹14, 494/- </p>
              <p className="text-2xl line-through">Only: ₹7,999/-</p>
              <div className="p-5 mt-5 text-3xl font-black bg-green-2 rounded-xl animate-bounce">
                Now ₹1999/-  <br />
                <span className="text-xs text-white/80 font-normal mt-[-20px]">
                  Limited time offer!
                </span>
              </div>
            </div>
            {/* payment btn */}
            <Button
              variant="outlined"
              className="!border-2  !border-white !w-[100%] !h-[80px] !rounded-2xl !text-white !font-bold !capitalize !text-[24px] mt-5 hover:!bg-green-2 !flex !flex-col !items-center !justify-center !pb-2"
            >
              Book your seat now
              <p className="text-sm font-normal">offer expiring soon!</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
