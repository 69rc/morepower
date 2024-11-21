import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductCarousel({
  products,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={20} // Reduced space between slides for a more compact view
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      modules={[Navigation, Pagination]}
      className="!pb-[3rem] pc:!pb-[3rem]" // Reduced bottom padding for less height
    >
      {products.map((product, index) => (
        <SwiperSlide key={product.id}>
          <div className="text-center text-[1.8rem] pc:text-[2rem] text-dark"> {/* Adjusted font size and text color */}
            <Link
              href={product.link}
              className="relative block aspect-square p-[3rem]" // Reduced padding around image
            >
              <img
                src={product.image}
                alt={product.name}
                className="!relative mx-auto object-contain h-[200px] w-full" // Set fixed height for image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
            <div className="mt-[0.5rem] pc:mt-[0.5rem] truncate text-dark"> {/* Darker text */}
              {product.description}
            </div>
            <div className="font-semibold pc:mt-[0.5rem] text-orange-500">{product.name}</div> {/* Darker text */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
