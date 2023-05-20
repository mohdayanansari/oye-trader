import { Footer } from 'flowbite-react';
import React from 'react';

type Props = {};

const FooterSection = (props: Props) => {
  const year = new Date().getUTCFullYear();
  return (
    <Footer container={true} className="">
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between px-[20px] md:px-[100px] py-5">
          <div>
            <Footer.Brand
              // href="https://flowbite.com"
              src="/logo/logo-hr-black.png"
              alt="Flowbite Logo"
              name="Flowbite"
            />
            <div className="flex flex-col items-start text-gray-700">
              <p className="text-xs">
                <strong>Address:</strong> Suman Chowk, Chhatarpur Extension,
                110074
              </p>
              <p className="text-xs">
                <strong>Phone:</strong> +91 9115325925
              </p>
              <p className="text-xs">
                <strong>Email:</strong> support@oyetrader.com
              </p>
            </div>
          </div>
          <Footer.LinkGroup className="gap-5 mt-5 md:mt-0">
            {/* <Footer.Link href="#">About</Footer.Link> */}
            <Footer.Link href="/privacy_statement">Privacy Policy</Footer.Link>
            <Footer.Link href="/refund_policy">Refund Policy</Footer.Link>
            <Footer.Link href="/terms_and_condition">
              Terms and Condition
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by=" Oye Trader™"
          year={year}
          className="px-[20px] md:px-[100px] h-[40px] flex items-center justify-center"
        />
      </div>
    </Footer>
  );
};

export default FooterSection;
