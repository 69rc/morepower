import { Link } from "react-router-dom";
import img1 from "../assets/bg.jpeg"; // Import the image

export function HeroSection() {
  return (
    <section
      className="relative w-full h-[calc(100vh-9.5rem)] overflow-hidden"
      style={{
        backgroundImage: `url(${img1})`, // Use the imported image here
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute left-0 right-0 bottom-40 mx-20 text-center">
        {/* <h1 className="text-6xl font-normal mb-4  text-white">Power Banks</h1>
        <p className="text-2xl font-light text-white mb-8">
          Stay powered up on the go with our high-quality power banks. Whether you're traveling or need extra power for your devices, our power banks provide reliable and portable charging solutions for all your needs.
        </p>
        <Link to="/products" className="text-xl font-semibold text-white bg-orange-500 py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
          Explore Our Collection
        </Link> */}
      </div>
    </section>
  );
}
