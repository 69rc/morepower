import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Card, CardContent } from '@/components/ui/card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import local images for each product
import productImage1 from '../assets/product1.jpeg';
import productImage2 from '../assets/product2.jpeg';
import productImage3 from '../assets/product3.jpeg';
import productImage4 from '../assets/product4.jpeg';
import productImage5 from '../assets/product5.jpeg';
import productImage6 from '../assets/product6.jpeg';

const products = [
  {
    id: 1,
    name: "power bank",
    description: "₦ 14000",
    image: productImage1,
    link: "/product/product-1"
  },
  {
    id: 2,
    name: "Wireless and solar",
    description: "₦32500",
    image: productImage2,
    link: "/product/product-2"
  },
  {
    id: 3,
    name: "TOW in one",
    description: "₦26500",
    image: productImage3,
    link: "/product/product-3"
  },
  {
    id: 4,
    name: "Power bank",
    description: "₦66570",
    image: productImage4,
    link: "/product/product-4"
  },
  {
    id: 5,
    name: "Power bank",
    description: "28500",
    image: productImage5,
    link: "/product/product-5"
  },
  {
    id: 6,
    name: "Power bank",
    description: "₦7500",
    image: productImage6,
    link: "/product/product-6"
  }
];

export default function ProductCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="!pb-16"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <Link to={product.link} className="block">
                  <div className="aspect-square relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 text-center truncate">{product.description}</p>
                </Link>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
