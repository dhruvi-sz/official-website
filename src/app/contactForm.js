import React, { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import Image from "next/image";

const ContactForm = ({setShowForm}) => {
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  const onSubmitForm = () => {
    console.log("Form submitted");

    // Perform the PDF download
    if (!pdfDownloaded) {
      const pdfUrl = "/Flyer.pdf"; // Path to your PDF file in the public folder
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Flyer.pdf"; // Specify the desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setPdfDownloaded(true);
      setShowForm(true);
    }
  };
  return (
    <div className="min-h-screen">
      <div className=" h-[38rem] bg-gradient-to-l from-[rgba(0,5,26)] to-[#2B919F] flex flex-col">
        <div className="z-10 w-full">
          <div className="absolute top-16 left-2 md:left-20">
              <Image
                src="/sigFlyerFront.jpg"
                alt="Flyer"
                width={280}
                height={280}
                priority
                className=" rounded-md md:w-[20rem] w-[12rem]"
              />
          </div>
        </div>
        <div className="text-3xl font-bold text-right px-10 pt-32 bg-gradient-to-r from-[#2B919F] from-50% to-[#FFFFFF] text-transparent bg-clip-text md:text-7xl md:px-48">
          Experienced{" "}
          <p className="text-3xl font-bold bg-gradient-to-r from-[#2B919F] from-40% to-[#FFFFFF] text-transparent bg-clip-text pt-4  md:text-7xl">
            A Breach ?
          </p>
        </div>
        <div className="text-white px-10 pt-[10rem] text-center md:px-48 md:pt-[3rem] md:text-right">
          At SignalZero, we act fast. Our expert team 
          swiftly evaluates <br /> breaches within hours,
          offering important insights <br /> for
          effective countermeasures.{" "}
        </div>
      </div>
      <div className="bg-[#E5E5E5] py-20">
      <div className="flex justify-center items-center bg-[#FFFFFF] text-white text-center mx-auto rounded w-4/5 md:w-1/2">
          <div className="w-full">
            <FormfacadeEmbed
              formFacadeURL="https://formfacade.com/include/106485910742767639940/form/1FAIpQLSe6jPZ7gzMXPgvTJET47Q6xFxo_tBsjTgq0sxJnXvfx9GVDHA/classic.js/?div=ff-compose"
              onSubmitForm={() => onSubmitForm()}
            />
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default ContactForm;
