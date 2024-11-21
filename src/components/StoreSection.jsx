import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import storeImage from "../assets/store.jpeg"; // Import the image

export default function OraimoStoreSection() {
  return (
    <section
      className="relative mt-20 grid overflow-hidden h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${storeImage})`, // Use the imported image here
      }}
    >
      <div className="absolute bottom-36 left-0 right-0 text-center sm:bottom-20">
        <div className="space-y-5 sm:space-x-8 sm:space-y-0">
          {/* Styled text for the power bank */}
          <div className="text-white text-3xl font-bold mb-8 sm:text-4xl md:text-5xl px-6 sm:px-12 leading-tight">
            <span className="block">
              130W Multi-Device
            </span>
            <span className="block">
              27600mAh Power Bank
            </span>
          </div>
          
          {/* Styled FIND STORE button */}
          <Button
            asChild
            variant="outline"
            className="block w-[calc(100%-4.5rem)] rounded-full border-white bg-transparent px-9 py-6 p text-2xl font-semibold tracking-widest text-white border-2 sm:inline-block sm:w-auto sm:px-[4.25rem] sm:py-4 sm:text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Link to="/shopping/exclusive-stores">
              <span className="text-box-trim-black">FIND STORE</span>
            </Link>
          </Button>
          
          {/* Styled SHOP ONLINE button */}
          <Button
            asChild
            variant="outline"
            className="mt-5 block w-[calc(100%-4.5rem)] rounded-full border-white bg-transparent px-9 py-4 text-2xl font-semibold tracking-widest text-white border-2 sm:mt-0 sm:inline-block sm:w-auto sm:px-[4.25rem] sm:py-4 sm:text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Link to="/shopping/shop-online">
              <span className="text-box-trim-black">SHOP ONLINE</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
