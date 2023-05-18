import { Footer } from 'flowbite-react';
import React from 'react';

type Props = {};

const FooterSection = (props: Props) => {
  const year = new Date().getUTCFullYear();
  return (
    <Footer container={true} className="">
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between px-[20px] md:px-[100px] h-[100px]">
          <Footer.Brand
            // href="https://flowbite.com"
            src="/logo/logo-hr-black.png"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <Footer.LinkGroup className="gap-5">
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
