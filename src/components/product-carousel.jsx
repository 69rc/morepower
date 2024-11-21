import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductCarousel({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={16} // Compact spacing for small screens
      slidesPerView={1} // Start with one slide per view
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 }, // Two slides for tablets
        1024: { slidesPerView: 3, spaceBetween: 24 }, // Three slides for desktops
        1280: { slidesPerView: 4, spaceBetween: 32 }, // Four slides for larger screens
      }}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      modules={[Navigation, Pagination]}
      className="!pb-12 sm:!pb-16" // Padding adjusts for screen sizes
    >
      {products.map((product, index) => (
        <SwiperSlide key={product.id}>
          <div className="text-center">
            {/* Product Image */}
            <Link
              to={product.link}
              className="relative block p-4 sm:p-6 lg:p-8"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-40 w-full object-contain sm:h-48 lg:h-56" // Responsive image height
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>

            {/* Product Description */}
            <div className="mt-2 text-sm text-gray-600 sm:text-base truncate">
              {product.description}
            </div>

            {/* Product Name */}
            <div className="mt-1 text-lg font-semibold text-orange-500 sm:mt-2 sm:text-xl">
              {product.name}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
