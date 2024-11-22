import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
// import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const OraimoLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 11.6 2.4"
    className="w-full h-full"
  >
    {/* Add your SVG paths */}
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-oraimo-dark-gray text-[#484B4B] text-center py-10 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="text-2xl sm:text-4xl font-semibold">
        MORE POWER TECHNOLOGY LIMITED
      </div>
      <div className="grid justify-center text-sm sm:text-lg leading-relaxed pt-8 sm:pt-12 gap-2">
        <div>Address: Beirut road Dankoli Plaza no 28/29 Kano</div>
        <div>Phone:07066666130 <br />
        09077777680</div>
        <div>Email: morepower.business@gmail.com</div>
      </div>
      <div className="py-10 sm:py-20">
        <div className="flex items-center justify-center">
          <div className="relative w-48 sm:w-64">
          <div className="flex space-x-4 ml-6 sm-d-grid  justify-content-center">
        <a href="https://www.instagram.com/more_power7?igsh=cTZyNXR6YzloN2Zk" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-9 w-9 text-dark hover:text-orange-500 transition-colors" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61568294131146" target="_blank" rel="noopener noreferrer">
          <CiFacebook className="h-9 w-9 text-dark hover:text-orange-500 transition-colors" />
        </a>
        <a href="https://www.tiktok.com/@more.power8?_t=8rZl7ao1eBL&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="h-9 w-9 text-dark hover:text-orange-500 transition-colors" />
        </a>
      </div>
        
          </div>
        </div>
      </div>
      <div className="grid justify-center text-sm sm:text-lg pt-6 sm:pt-8 gap-4">
        <div className="flex flex-col sm:flex-row justify-center items-center font-semibold gap-2 sm:gap-6">
          <Link
            to="/privacy-policy"
            className="hover:text-oraimo-primary active:text-oraimo-primary"
          >
            PRIVACY POLICY
          </Link>
          <Separator
            orientation="vertical"
            className="hidden sm:block mx-11 h-8 bg-[#484b4b]"
          />
          <Link
            to="/user-agreement"
            className="hover:text-oraimo-primary active:text-oraimo-primary"
          >
            TERMS OF USE
          </Link>
          <Separator
            orientation="vertical"
            className="hidden sm:block mx-11 h-8 bg-[#484b4b]"
          />
          <a
            href="mailto:hello.ab@oraimo.com"
            className="hover:text-oraimo-primary active:text-oraimo-primary"
          >
            BULK ORDER
          </a>
          
        </div>
       
        <div className="mt-6 text-xs sm:text-sm lg:text-base">
          Copyright © 2024 btech. All Rights Reserved.
        </div>
        
      </div>
    </footer>
  );
}
