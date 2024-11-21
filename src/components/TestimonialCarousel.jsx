import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images from the assets folder
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/im2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';

const testimonials = [
  {
    id: 1,
    name: "Unbox Therapy",
    quote: "OpenCirclet is the ultimate gym companion, from intense workouts to training sessions.",
    image: img1
  },
  {
    id: 2,
    name: "Fisayo Fosudo",
    quote: "Vocals and the instrumentals were very outstanding and I'm not trying to use colorful words, here I was impressed.",
    image: img2
  },
  {
    id: 3,
    name: "Aji nsewlek",
    quote: "The Watch 4 Plus simply offers you the best battery life in its category: up to 7 days for typical use.",
    image: img3
  },
  {
    id: 4,
    name: "Chouaib Reviews",
    quote: "I tested the oraimo FreePods 4 and I can confirm that the sound in music is impressive and the bass is very good and rich.",
    image: img4
  },
  {
    id: 5,
    name: "Rick Aqua",
    quote: "For the best and most affordable gadgets, oraimo is all you need.",
    image: img5
  }
];

export default function TestimonialCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="saying-section pc:px-[1.5rem]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={8}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="!pb-[4.8rem] pc:!pb-[5.2rem]">
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                width={520}
                height={520}
                className="mx-auto"
              />
              <div
                className="absolute leading-relaxed opacity-0 bottom-0 saying-text-box transition-all duration-300 left-[3.5rem] right-[3.5rem] pc:left-[4rem] pc:right-[4rem]">
                <div className="text-[3.5rem] font-semibold pc:text-[3rem]">{testimonial.name}</div>
                <div className="text-[3rem] pc:text-[2.5rem]">"{testimonial.quote}"</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
