'use client'
import { HttpTypes } from "@medusajs/types"
import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import { useState } from "react"

type ProductPreviewProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}

export default function ProductStripPreview({
  product,
  region,
}: ProductPreviewProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { cheapestPrice } = getProductPrice({ product })
  const defaultVariantId = product.variants?.[0]?.id || ""
  
  const handleAddToCart = async () => {
    if (!defaultVariantId || !region.country_code) return
    setIsAdding(true)
    try {
      await addToCart({
        variantId: defaultVariantId,
        quantity: 1,
        countryCode: region.country_code,
      })
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-grow">
          <LocalizedClientLink 
            href={`/products/${product.handle}`}
            className="block"
          >
            <h3 className="font-semibold text-gray-800 mb-1">
              {product.title}
            </h3>
            <div className="text-sm">
              {cheapestPrice?.calculated_price && (
                <span className="font-bold">
                  {cheapestPrice.calculated_price}
                </span>
              )}
            </div>
          </LocalizedClientLink>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors disabled:bg-teal-400"
        >
          {isAdding ? "..." : "Add"}
        </button>
      </div>
    </div>
  )
}