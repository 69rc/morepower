import {Link} from "react-router-dom"
import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"

// You would typically fetch this data from an API
const productData = {
  "Audio": [
    { imageUrl: "/placeholder.svg", title: "SpaceBuds", description: "50dB Hybrid ANC TWS Earphones", link: "/product/beyond-sound-spacebuds" },
    { imageUrl: "/placeholder.svg", title: "OpenPods", description: "Open-ear Wireless Earphones", link: "/product/truly-open-natural-comfort-openpods" },
    { imageUrl: "/placeholder.svg", title: "Necklace Pro", description: "ANC Wireless Headphones", link: "/product/zero-noise-pure-sound-necklace-pro" },
    { imageUrl: "/placeholder.svg", title: "Boom", description: "30W Wireless Speaker", link: "/product/bass-go-boom-boom" },
  ],
  // Add other categories here...
}

export default function ProductSection({
  title
}) {
  return (
    (<section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productData[title].map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href={`/collections/${title.toLowerCase()}`}>
              EXPLORE {title.toUpperCase()}
            </Link>
          </Button>
        </div>
      </div>
    </section>)
  );
}

