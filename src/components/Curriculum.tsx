import React from 'react';
import SectionHeading from './SectionHeading';
import Image from 'next/image';

type Props = {};

const Curriculum = (props: Props) => {
  return (
    <section className="h-screen bg-slate-50">
      <div className="pt-16">
        <SectionHeading title="What you are going to learn..." />
      </div>
      <div className='flex justify-center w-full mt-10'>
        <div className="relative  w-[100vw] h-[250px] md:w-[800px] md:h-[400px] lg:w-[1200px] lg:h-[520px] ">
          <Image
            src="/imgs/currr.png"
            alt="Oye Trader Curriculum"
            fill
            className="object-contain object-center drop-shadow-xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
