// import Image from "next/image"
import {Link} from "react-router-dom"

export function ProductCard({
  imageUrl,
  title,
  description,
  link
}) {
  return (
    (<div className="text-center text-2xl">
      <Link href={link} className="block aspect-square p-20 relative">
        {/* <Image src={imageUrl} alt={title} fill className="object-contain" /> */}
      </Link>
      <div className="mt-4 truncate">{description}</div>
      <div className="font-semibold mt-2">{title}</div>
    </div>)
  );
}

