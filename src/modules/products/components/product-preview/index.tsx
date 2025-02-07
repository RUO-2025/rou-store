import { getProductPrice } from "@lib/util/get-product-price"
import type { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PreviewPrice from "./price"
import AddToCartButton from "./AddToCartButton"

type ProductPreviewProps = {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
  isNew?: boolean
  isPopular?: boolean
}

export default function ProductPreview({
  product,
  isFeatured,
  region,
  isNew = false,
  isPopular = false,
}: ProductPreviewProps) {
  const { cheapestPrice } = getProductPrice({ product })

  const defaultVariantId = product.variants?.[0]?.id || ""
  const countryCode = region?.country_code || "dk"
  const price = cheapestPrice?.amount || 0

  // Ensure that we pass isNew and isPopular as true if they are set on product tags
  const productIsNew = product.tags?.some(tag => tag.value === "New") || isNew;
  const productIsPopular = product.tags?.some(tag => tag.value === "Popular") || isPopular;

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-200 transition-shadow shadow-md">
      {/* Product Link Wrapper */}
      <LocalizedClientLink href={`/products/${product.handle}`} className="flex-1 group"> {/* Added 'group' here */}
        <div
          className="rounded-t-xl relative h-[208px]"
          style={{
            backgroundImage: `radial-gradient(45.54% 52.4% at 50% 61.9%, 
              rgb(255, 255, 255) 0%, 
              rgb(246, 249, 255) 25%, 
              rgb(239, 244, 255) 100%), 
              linear-gradient(360deg, 
              rgba(255, 255, 255, 0.376) -0.12%, 
              rgba(255, 255, 255, 0.75) 99.88%)`
          }}
        >
          {/* Image with hover zoom effect */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="bg-transparent h-full w-full object-contain p-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />


            {/* Product Tags */}
            {productIsPopular && (
             <span
             className="absolute right-0 top-4 flex items-center gap-1 rounded-l-[4px] bg-white p-1 px-2 text-xs"
             style={{ boxShadow: "0px 2px 30px 0px rgba(0, 0, 0, 0.08)" }}
           >
                <img src="/star.png" alt="img" height={12} width={12} /> Popular
              </span>
            )}
            <div className="absolute -bottom-[12px] left-0 drop-shadow-lg">
            {productIsNew && (
             <span
             className="bg-white p-1 pr-4 text-xs font-bold uppercase tracking-wider text-[#008080] shadow"
             style={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%, 90% 50%)" }}
           >           
              NEW
              </span>
            )}
            </div>
          </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col gap-1 text-center w-full">
          <h3 className="line-clamp-2 text-base font-medium text-black-0">{product.title}</h3>
          <p className="text-center text-xs text-gray-600">{product.collection?.title || "Category"}</p>
          <div className="mt-4 text-center text-lg font-semibold text-gray-700">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </LocalizedClientLink>
      {/* Add to Cart Button */}
      <div className="mt-2 w-full px-4 pb-4">
        <AddToCartButton variantId={defaultVariantId} countryCode={countryCode} />
      </div>
    </div>
  )
}
