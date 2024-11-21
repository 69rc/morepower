import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OraimoStoreSection() {
  return (
    (<section className="relative mt-20 grid overflow-hidden">
      <picture className="mx-auto">
        <source
          media="(max-width: 799px)"
          srcSet="https://cloud-img.oraimo.com/statics/2024/06/19/store-m.png 1x, https://cloud-img.oraimo.com/statics/2024/06/19/store-m.png 2x" />
        <Image
          src="https://cloud-img.oraimo.com/statics/2024/06/19/store-pc_1.png"
          alt="Oraimo Store"
          width={1920}
          height={700}
          className="w-full"
          priority />
      </picture>
      <div className="absolute bottom-36 left-0 right-0 text-center sm:bottom-20">
        <div className="space-y-5 sm:space-x-6 sm:space-y-0">
          <Button
            asChild
            variant="outline"
            className="block w-[calc(100%-4.5rem)] rounded-full border-primary px-9 py-4 text-2xl font-semibold tracking-widest text-primary sm:inline-block sm:w-auto sm:px-[4.25rem] sm:py-4 sm:text-lg">
            <Link href="/shopping/exclusive-stores">
              <span className="text-box-trim-black">FIND STORE</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="mt-5 block w-[calc(100%-4.5rem)] rounded-full border-primary px-9 py-4 text-2xl font-semibold tracking-widest text-primary sm:mt-0 sm:inline-block sm:w-auto sm:px-[4.25rem] sm:py-4 sm:text-lg">
            <Link href="/shopping/shop-online">
              <span className="text-box-trim-black">SHOP ONLINE</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>)
  );
}

