import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex flex-col md:flex-row items-center md:py-5 md:py-0 max-h-max md:h-[100px] justify-between md:px-[100px] drop-shadow-lg w-full border-b bg-white ">
      <Link href="/">
        <div className="relative ">
          <Image
            src="/logo/logo-hr-black.png"
            //   fill
            width={200}
            height={200}
            className="object-cover"
            alt="Oye Trader Logo"
          />
        </div>
      </Link>
      <div className="hidden mt-5 md:mt-0 md:block">
        <p className="flex gap-1">
          <span className="flex items-center gap-1 font-bold text-blue-600">
            <FiHelpCircle className="text-[20px] text-blue-600" />
            Need Help?
          </span>
          Call or Email Now!
        </p>
        <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x mt-[10px] md:mt-[5px]">
          <Link
            href={'mailto:sumittiwari630@gmail.com'}
            className="mb-[10px] md:mb-0 md:mr-[10px] hover:text-blue-600 transition-all duration-200 ease-in-out hover:animate-pulse"
          >
            sumittiwari630@gmail.com
          </Link>
          <Link
            href={'tel:9115325925'}
            className="pt-[10px] md:pt-0  md:pl-[10px] hover:text-blue-600 transition-all duration-200 ease-in-out hover:animate-pulse"
          >
            +91 911 5325 925
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
