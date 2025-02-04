
import { getProductPrice } from "@lib/util/get-product-price"
import type { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import AddToCartButton from "./AddToCartButton"

type ProductPreviewProps = {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
  isNew?: boolean
  isPopular?: boolean
}

export default function ProductPreview({ product, isFeatured, region, isNew, isPopular }: ProductPreviewProps) {
  const { cheapestPrice } = getProductPrice({ product })

  const defaultVariantId = product.variants?.[0]?.id || ""
  const countryCode = region?.country_code || "dk"
  const price = cheapestPrice?.amount || 0

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Product Link Wrapper */}
      <LocalizedClientLink href={`/products/${product.handle}`} className="flex-1">
      <div
  className="relative h-[250px]"
  style={{
    backgroundImage: `
      radial-gradient(45.54% 52.4% at 50% 61.9%, 
        rgb(255, 255, 255) 0%, 
        rgb(246, 249, 255) 25%, 
        rgb(239, 244, 255) 100%
      ), 
      linear-gradient(360deg, 
        rgba(255, 255, 255, 0.376) -0.12%, 
        rgba(255, 255, 255, 0.75) 99.88%
      )
    `,
  }}
>
          <div className="w-full aspect-auto overflow-hidden p-4">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
              className="h-56 w-full object-contain p-4 transition-[transform] group-hover:scale-110"
            />
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
