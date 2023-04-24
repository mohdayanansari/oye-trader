import { Button } from '@mui/material';
import React from 'react';

type Props = {};

const Pricing = (props: Props) => {
  return (
    <section className="h-screen bg-slate-50 flex flex-col items-center justify-center ">
      <div className="relative flex flex-col items-end text-[32px] font-black text-[#252525]">
        <div className="z-20">Ready to get started?</div>
        <div className="w-[120px] h-[15px] bg-green-1 rounded-xl mt-[-20px] " />
      </div>
      <p className="text-center text-gray-500 text-[14px] mt-2">
        Choose our plan tailored to your needs!
      </p>

      {/* --------------------CARDS----------------- */}
      <div className="w-full md:w-[70%] bg-gradient-to-tl from-blue-800 to-blue-700 h-[500px] rounded-3xl drop-shadow-lg mt-10 p-2 md:p-10">
        <h4 className="text-[18px] text-white font-bold text-center border-b border-white/30 pb-2">
          Here&apos;s what you&apos;ll get!
        </h4>
        <div className="mt-10 flex gap-5">
          {/* Desc col */}
          <div className="text-white flex flex-col gap-3">
            {planData.map((item, index) => (
              <p key={index}>
                ✅<span className="text-white/80"> {item}</span>
              </p>
            ))}
          </div>
          {/* pricing col */}
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="text-center text-white flex flex-col gap-3 ">
              <p className="text-lg line-through">Total Value: 14, 494 ₹</p>
              <p className="text-xl line-through">Only: 7,999 ₹</p>
              <div className="text-3xl font-black bg-green-2 p-5 rounded-xl animate-bounce mt-5">
                Now <br /> 1999 ₹ <br />
                <span className="text-xs text-white/50 font-normal mt-[-20px]">
                  Limited time offer!
                </span>
              </div>
            </div>
            {/* payment btn */}
            <Button
              variant="outlined"
              className="!border-2  !border-white !w-[80%] !h-[80px] !rounded-2xl !text-white !font-bold !capitalize !text-[24px] mt-5 hover:!bg-green-2 !flex !flex-col !items-center !justify-center !pb-2"
            >
              Book your seat now
              <p className='text-sm font-normal'>offer expiring soon!!</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const planData = [
  'Live Classes : One month alternate live sessions - MWF (Value Rs 999₹)',
  'Weekly Doubt Sessions: Every Sunday (499₹)',
  'Private Telegram Community Access (399₹)',
  'BONUS: Call and Whatsapp chat support (99₹)',
  'BONUS: Premium Trading Ebooks & PDFs worth Rs 10000₹',
  'BONUS: Premium Trading Checklist (1999₹) ',
  'BONUS: Self made short revision notes',
  'BONUS: Certificate of completion (Priceless)',
];

export default Pricing;
