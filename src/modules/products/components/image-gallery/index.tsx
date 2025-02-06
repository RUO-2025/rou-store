import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { Star } from "lucide-react" // Import a star icon from lucide-react

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[],
  product?: { tags?: { value: string }[] }, // Adjusted tags to be an array of objects with value property
  className?: string // Add className as an optional prop
}

const ImageGallery = ({ images, product, className }: ImageGalleryProps) => {
  console.log(product?.tags); // Debugging output to check tags

  // Ensure 'Popular' tag is added if not present
  if (!product?.tags?.some(tag => tag.value === "Popular")) {
    product = {
      ...product,
      tags: [...(product?.tags || []), { value: "Popular" }]
    };
  }

  // Ensure 'New' tag is added if not present
  if (!product?.tags?.some(tag => tag.value === "New")) {
    product = {
      ...product,
      tags: [...(product?.tags || []), { value: "New" }]
    };
  }

  if (product?.tags?.length) {
    console.log("Tags are available");
  }

  return (
    <div className={`flex items-start relative ${className || ''}`}>
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4 relative">
        {images.map((image, index) => {
          return (
            <Container
              key={image.id}
              className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
              id={image.id}
            >
              {!!image.url && (
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="absolute inset-0 rounded-rounded"
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{
                    objectFit: "cover", // Ensure image covers the space well
                  }}
                />
              )}
              {product?.tags?.some(tag => tag.value === "Popular") && (
                <span className="absolute top-2 right-2 flex items-center gap-x-1 bg-yellow-300 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                  <Star className="w-4 h-4 text-yellow-600" /> Popular
                </span>
              )}
              {product?.tags?.some(tag => tag.value === "New") && (
                <span className="absolute top-2 left-2 flex items-center gap-x-1 bg-blue-300 text-blue-900 text-xs font-bold px-2 py-1 rounded-md shadow-lg z-10">
                  <Star className="w-4 h-4 text-blue-600" /> New
                </span>
              )}
            </Container>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
