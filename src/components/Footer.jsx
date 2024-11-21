import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

// Font Awesome icons (Make sure you've installed it or include it in your project)
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const OraimoLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="logo_svg___\u56FE\u5C42_2"
    fill="currentColor"
    data-name="\u56FE\u5C42 2"
    viewBox="0 0 11.6 2.4"
    className="w-full h-full"
  >
    <defs>
      <style>{`.logo_svg__cls-logo-1{fill-rule:evenodd}`}</style>
    </defs>
    <g id="logo_svg___\u56FE\u5C42_1-2" data-name="\u56FE\u5C42 1">
      <path
        d="M3.2.8c.05 0 .1 0 .15.02.07-.12.16-.24.27-.33a1.003 1.003 0 0 0-1.42.91v.99h.4V1.4c0-.33.27-.6.6-.6M5.8 0c.22 0 .4.18.4.4s-.18.4-.4.4-.4-.18-.4-.4.18-.4.4-.4M5.8.98A.6.6 0 0 1 5.5.9l.3 1.5.3-1.5a.6.6 0 0 1-.3.08M1 .4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 .4c-.33 0-.6.27-.6.6s.27.6.6.6.6-.27.6-.6S1.33.8 1 .8M4.4.4c.55 0 1 .45 1 1v1H5v-.2a1.003 1.003 0 0 1-1.6-.8c0-.55.45-1 1-1m0 .4c-.33 0-.6.27-.6.6s.27.6.6.6.6-.27.6-.6-.27-.6-.6-.6M10.6.4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 .4c-.33 0-.6.27-.6.6s.27.6.6.6.6-.27.6-.6-.27-.6-.6-.6M7.2.4c.22 0 .43.07.6.2a1.003 1.003 0 0 1 1.6.8v1H9v-1a.602.602 0 0 0-1-.45V2.4h-.4V.95a.602.602 0 0 0-1 .45v1h-.4v-1c0-.55.45-1 1-1"
        className="logo_svg__cls-logo-1"
      ></path>
    </g>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-oraimo-dark-gray text-[#484B4B] text-center pt-20 pb-28 tracking-widest">
      <div className="text-4xl font-semibold">MORE POWER TECHNOLOGY LIMITED</div>
      <div className="grid justify-center text-lg leading-relaxed pt-12">
        <div>Address: Beirut road Dankoli Plaza no 28/29 Kano</div>
        <div>Phone: 0701 502 6930</div>
        <div>Email: morepower.business@gmail.com</div>
      </div>
      <div className="py-20 px-28">
        <div className="flex items-center justify-center before:w-[50%] before:border-solid before:border-b before:border-[#484B4B] after:w-[50%] after:border-solid after:border-b after:border-[#484B4B]">
          <div className="px-12">
            <div className="relative w-[15.6rem]">
              {/* Logo or any other element */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center text-lg pt-8">
        <div className="flex justify-center items-center font-semibold">
          <Link
            to="/privacy-policy"
            className="hover:text-oraimo-primary active:text-oraimo-primary"
          >
            PRIVACY POLICY
          </Link>
          <Separator orientation="vertical" className="mx-11 h-8 bg-[#484b4b]" />
          <Link
            to="/user-agreement"
            className="hover:text-oraimo-primary active:text-oraimo-primary"
          >
            TERMS OF USE
          </Link>
          <Separator orientation="vertical" className="mx-11 h-8 bg-[#484b4b]" />
          <a
            href="mailto:hello.ab@oraimo.com"
            className="hover:text-oraimo-primary active:text-oraimo-primary"
          >
            BULK ORDER
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <a
            href="https://www.instagram.com/more_power7?igsh=cTZyNXR6YzloN2Zk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-orange-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/morepower7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-orange-500 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.tiktok.com/@more.power8?_t=8rZl7ao1eBL&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-orange-500 transition duration-300"
          >
            <FaTiktok />
          </a>
        </div>

        <div className="mt-6">Copyright © 2024 btech. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
