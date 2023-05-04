import { Rating } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
  img: string;
  desc: string;
  rating: boolean[];
};

const Cards = ({ name, img, desc, rating }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 gap-3 md:w-[400px] md:h-[450px] border border-gray-100 bg-white drop-shadow-xl rounded-2xl hover:scale-105 transition-all ease-in-out duration-300">
      {/* Image */}
      <div className="relative w-[100px] h-[100px] rounded-full  bg-white drop-shadow-lg">
        <Image
          src={img}
          fill
          className="object-cover object-center rounded-full"
          alt={name}
        />
      </div>
      {/* Name */}
      <div>{name}</div>
      {/* rating */}
      <Rating className="text-yellow-300 text-[30px]">
        {rating.map((item, index) => {
          return (
            <Rating.Star
              key={index}
              filled={item}
              className={`${
                item ? `` : `text-gray-300`
              } animate-pulse duration-100`}
            />
          );
        })}
      </Rating>

      {/* description */}
      <p className='text-justify px-[20px] text-gray-600'>{desc}</p>
    </div>
  );
};

export default Cards;
