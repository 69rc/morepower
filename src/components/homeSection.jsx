import { Link } from "react-router-dom";
import ProductCarousel from "./product-carousel";
import { Button } from "@/components/ui/button";

// Importing images
import imgPowerJet130 from "../assets/p.jpeg";
import imgTravelerLink27 from "../assets/p8.jpeg";
import imgPilot15Flash from "../assets/p9.jpeg";
import imgPowerGan65 from "../assets/p9.jpeg";

const products = [
  {
    id: "1",
    name: "PowerJet 130",
    description: "27600mAh Power Bank for Laptops",
    image: imgPowerJet130,
    link: "/product/multi-device-type-c-fast-charging-triple-outputs-100w-recharge-9-times-faster-smart-led-display-low-current-charging-mode-flight-friendly-compatible-with-apple-samsung-hp-and-more-pd30-qc30-compatible-powerjet-130",
  },
  {
    id: "2",
    name: "Traveler Link 27",
    description: "12W 27000mAh Power Bank",
    image: imgTravelerLink27,
    link: "/product/27000mah-power-bank-3-built-in-charging-cables-traveler-link-27",
  },
  {
    id: "3",
    name: "Pilot 15 Flash",
    description: "15W 20000mAh Power Bank",
    image: imgPilot15Flash,
    link: "/product/fast-charge-high-capacity-pilot-15-flash",
  },
  {
    id: "4",
    name: "PowerGaN 65",
    description: "65W GaN Ultra Speed",
    image: imgPowerGan65,
    link: "/product/65w-ultra-speed-supports-laptop-charging-powergan-65",
  },
];

export default function OraimoHomeSection() {
  return (
    <section className="home-section px-4 sm:px-8 lg:px-16">
      {/* Only Product Carousel */}
      <div className="mt-8 lg:mt-12">
        <ProductCarousel products={products} />
      </div>

      {/* Explore Power Button */}
      <div className="my-12 text-center lg:my-16">
        <Button
          asChild
          variant="outline"
          className="w-full sm:w-auto rounded-full border-primary px-6 py-3 text-lg font-semibold tracking-widest text-primary sm:px-8 sm:py-4 sm:text-xl"
        >
          <Link to="/collections/power">
            <span className="text-box-trim-black">EXPLORE POWER</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
