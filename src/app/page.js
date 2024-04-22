"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
import ContactForm from "./contactForm";

// Dynamically import ReactPlayer
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function Home() {
  const [showForm, setShowForm] = useState(true);

  const handleButtonClick = () => {
    setShowForm(false);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if running on the client side before rendering ReactPlayer
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {showForm ? (
        <main className="min-h-screen p-24 bg-gradient-to-b from-[rgba(0,5,26,0.95)] from-37% to-[#2B919F]">
          <div className="z-10 max-w-5xl w-full items-top justify-between  tp-2 font-mono text-sm lg:flex">
            <div className="absolute -top-[14rem] -left-[22rem]">
              <a className="" rel="noopener noreferrer">
                <Image
                  src="/globe.png"
                  alt="Globe Logo"
                  width={847}
                  height={287}
                  priority
                  className="md:w-[50rem] w-[38rem]"
                />
              </a>
            </div>
          </div>

          <div className="text-3xl font-bold text-right px-32 pt-24 bg-gradient-to-r from-[#2B919F] from-40% to-[#FFFFFF] text-transparent bg-clip-text md:text-7xl">
            Suffered
            <p className="text-3xl font-bold bg-gradient-to-r from-[#2B919F] from-40% to-[#FFFFFF] text-transparent bg-clip-text pt-4  md:text-7xl">
              A Breach ?
            </p>
          </div>
          <div className="text-xl font-semibold text-right px-32 pt-[1.5rem] text-white md:pt-[3rem] md:text-2xl">
            Assess. Detect. Investigate.
            <p>Remediate.</p>
          </div>
          <div className="text-white text-3xl font-bold pt-16 text-center md:pt-32">
            Introducing Infinity Platform
          </div>
          {/* Render ReactPlayer only on the client side */}
          {isClient && (
            <div className="flex justify-center items-center bg-black text-white mt-10 mx-auto rounded md:w-1/2">
              <ReactPlayer
                url="/Signalzero1.mp4"
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          )}
          <button
            className="flex justify-center items-center bg-white p-2 font-semibold text-black text-center mt-10 mx-auto rounded w-2/3 md:w-1/6"
            onClick={handleButtonClick}
          >
            Get Immediate Assistance
          </button>
        </main>
      ) : (
        <ContactForm setShowForm={setShowForm} />
      )}
    </div>
  );
}
