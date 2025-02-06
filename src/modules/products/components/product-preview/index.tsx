import { getProductPrice } from "@lib/util/get-product-price"
import type { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PreviewPrice from "./price"
import AddToCartButton from "./AddToCartButton"
import { Star } from "lucide-react" // Import Star icon for tags

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
    <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Product Link Wrapper */}
      <LocalizedClientLink href={`/products/${product.handle}`} className="flex-1">
        <div className="relative h-[250px]">
          <div className="w-full overflow-hidden p-4"
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
            {/* Directly use img tag to display the product image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-56 w-full object-cover bg-transparent"
            />

            {/* Product Tags */}
            {productIsPopular && (
              <span className="absolute top-2 right-2 flex items-center gap-x-1 bg-yellow-300 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md shadow-lg z-20">
                <Star className="w-4 h-4 text-yellow-600" /> Popular
              </span>
            )}
            {productIsNew && (
              <span className="absolute top-2 left-2 flex items-center gap-x-1 bg-blue-300 text-blue-900 text-xs font-bold px-2 py-1 rounded-md shadow-lg z-20">
                <Star className="w-4 h-4 text-blue-600" /> New
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col gap-1 text-center w-full">
          <h3 className="text-base font-semibold text-gray-900">{product.title}</h3>
          <p className="text-sm text-gray-600">{product.collection?.title || "Category"}</p>
          <div className="mt-4 text-center text-xl font-bold text-gray-500">
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
