import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#071C31] opacity-95 h-[15rem] text-white pt-6  flex flex-col text-center items-center  ">
      <div className="flex gap-2 p-14">
        <a
          className=""
          href="https://in.linkedin.com/company/signalzero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin.png"
            alt="Linkedin Logo"
            width={40}
            height={40}
            priority
          />
        </a>
        <a
          className=""
          href="https://twitter.com/signalzeroint"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/twitter.png"
            alt="Twitter Logo"
            width={40}
            height={40}
            priority
          />
        </a>
        <a
          href="mailto:business@signal
 zero."
          rel="noopener noreferrer"
        >
          <Image
            src="/mail.png"
            alt="Mail Logo"
            width={40}
            height={40}
            priority
          />
        </a>
      </div>
      <p>© 2024 Signalzero Technologies Private Limited. All rights reserved.</p>
    </div>
  );
};

export default Footer;
