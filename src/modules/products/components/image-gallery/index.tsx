import { HttpTypes } from "@medusajs/types";
import { Container } from "@medusajs/ui";
import Image from "next/image";

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[];
  product?: HttpTypes.StoreProduct;
  className?: string;
};

const ImageGallery = ({ images, product, className }: ImageGalleryProps) => {
  const productTags = product?.tags ?? [];
  const productIsNew = productTags.some(tag => tag.value === "New");
  const productIsPopular = productTags.some(tag => tag.value === "Popular");

  return (
    <div className={`flex items-start relative ${className || ''}`}>
      <div className="relative flex h-[302px] items-center justify-end overflow-hidden rounded-2xl md:h-[520px]"
        style={{
          backgroundImage: `radial-gradient(45.54% 52.4% at 50% 61.9%, 
            rgb(255, 255, 255) 0%, 
            rgb(246, 249, 255) 25%, 
            rgb(239, 244, 255) 100%)`
        }}>
        
        {/* Left side certification badges */}
        <div className="absolute left-[10px] top-1/2 flex -translate-y-1/2 flex-col lg:gap-4 md:left-[10px] xl:left-[60px]">
          <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center ">
            <Image
              src={"/3rd-party-ex.avif"}
              className="h-[50px] min-w-[50px] object-contain lg:h-[90px] lg:min-w-[90px]"
              alt={"3rd Party Lab Verified"}
              height={800}
              width={800}
            />
          </div>
          <div className="w-[90px] h-[90px]  rounded-full flex items-center justify-center">
            <Image
              src={"/purity-ex.avif"}
              className="h-[50px] min-w-[50px] object-contain lg:h-[90px] lg:min-w-[90px]"
              alt={"Purity Guaranteed"}
              height={800}
              width={800}
            />
          </div>
          <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center">
            <Image
              src={"/usa-ex.avif"}
              className="h-[50px] min-w-[50px] object-contain lg:h-[90px] lg:min-w-[90px]"
              alt={"USA Lab Verified"}
              height={800}
              width={800}
            />
          </div>
        </div>

        {/* Main product image */}
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[32/34] w-[70%] overflow-hidden"
              id={image.id}
            >
              {!!image.url && (
                <Image
                  src={image.url}
                  priority={index <= 2}
                  className="h-full w-[90%] rounded-lg object-contain p-4 pr-0"
                  alt={`Product image ${index + 1}`}
                  height={1000}
                  width={1000}
                />
              )}
            </div>
          ))}

        {/* NEW tag */}
        {productIsNew && (
          <div className="absolute left-0 top-6">
            <span className="text-[#008080] bg-white py-1 px-3 text-xs font-bold uppercase tracking-wider shadow"
                  style={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%, 90% 50%)" }}>
              NEW
            </span>
          </div>
        )}
        
        {/* Popular tag */}
        {productIsPopular && (
          <span className="absolute right-0 top-4 flex items-center gap-1 rounded-l-[4px] bg-white p-1 px-2 text-xs shadow-md">
            <img src="/star.png" alt="img" height={12} width={12} /> Popular
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;