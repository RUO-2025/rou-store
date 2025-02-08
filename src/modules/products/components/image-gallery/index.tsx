"use client";

import { HttpTypes } from "@medusajs/types";
import { Container } from "@medusajs/ui";
import Image from "next/image";

// Define the type for ImageGalleryProps
type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[];
  product?: { tags?: { value: string }[] };
  className?: string;
};

const ImageGallery = ({ images, product, className }: ImageGalleryProps) => {
  const productTags = product?.tags?.length ? product.tags : [{ value: "New" }, { value: "Popular" }];
  const productIsNew = productTags.some(tag => tag.value === "New");
  const productIsPopular = productTags.some(tag => tag.value === "Popular");

  return (
    <div className={`flex items-start relative ${className || ''}`}>
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4 relative">
        {images.map((image, index) => (
          <Container
            key={image.id}
            className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
            id={image.id}
          >
            {!!image.url && (
              <Image
                src={image.url}
                priority={index <= 2}
                className="absolute inset-0 rounded-rounded object-cover"
                alt={`Product image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
              />
            )}
            {/* New Tag - Now on the right side */}
            {productIsPopular && (
             <span
             className="absolute right-0 top-4 flex items-center gap-1 rounded-l-[4px] bg-white p-1 px-2 text-xs"
             style={{ boxShadow: "0px 2px 30px 0px rgba(0, 0, 0, 0.08)" }}
           >
                <img src="/star.png" alt="img" height={12} width={12} /> Popular
              </span>
            )}
            <div className="absolute  left-0 drop-shadow-lg">
            {productIsNew && (
             <span
             className="bg-white p-1 pr-4 text-xs font-bold uppercase tracking-wider text-[#008080] shadow"
             style={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%, 90% 50%)" }}
           >           
              NEW
              </span>
            )}
            </div>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
