import { HeroSection } from "./hero-section"
import ProductSection from "./ProductCarousel"
// import { StatsSection } from "./stats-section"
// import { NewsSection } from "./news-section"
// import { StoreLocator } from "./store-locator"
import TestimonialsSection from "./TestimonialCarousel"
import Footer2 from './Footer'
import StoreSection from "./StoreSection"
// import { PartnersSection } from "./partners-section"
import HomeSection  from './homeSection'
import AboutUs from './about-us'
import Productc2 from './productc2'

export default function HomePage() {
  return (
    <main className="text-white">
      <section id="home">
        <HeroSection />
      </section>
      <section id="products">
        <ProductSection />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="newproduct">
        <Productc2 />
      </section>
      <section id="explore-with-us">
        <HomeSection />
      </section>
      <section id="shopping">
        <StoreSection />
      </section>
    
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      

      <Footer2 />
    </main>
  );
}
