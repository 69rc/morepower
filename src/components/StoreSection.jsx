import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import storeImage from "../assets/store.jpeg"; // Import the image

export default function OraimoStoreSection() {
  return (
    <section
      className="relative mt-20 grid h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${storeImage})`, // Use the imported image here
      }}
    >
      <div className="absolute bottom-20 left-0 right-0 text-center sm:bottom-16">
        <div className="space-y-5 sm:flex sm:justify-center sm:space-y-0 sm:space-x-6">
          {/* Styled text for the power bank */}
          <div className="text-white text-2xl font-bold mb-6 sm:mb-8 sm:text-3xl md:text-4xl lg:text-5xl px-6 sm:px-12 leading-tight">
            <span className="block">130W Multi-Device</span>
            <span className="block">27600mAh Power Bank</span>
          </div>

          {/* Styled FIND STORE button */}
          <Button
            asChild
            variant="outline"
            className="block w-[90%] sm:w-auto rounded-full border-white bg-transparent px-6 py-4 text-base sm:px-10 sm:py-3 sm:text-lg lg:px-12 lg:py-4 lg:text-xl font-semibold tracking-wide text-white border-2 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Link to="/shopping/exclusive-stores">
              FIND STORE
            </Link>
          </Button>

          {/* Styled SHOP ONLINE button */}
          <Button
            asChild
            variant="outline"
            className="mt-4 block w-[90%] sm:mt-0 sm:w-auto rounded-full border-white bg-transparent px-6 py-4 text-base sm:px-10 sm:py-3 sm:text-lg lg:px-12 lg:py-4 lg:text-xl font-semibold tracking-wide text-white border-2 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Link to="/shopping/shop-online">
              SHOP ONLINE
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
