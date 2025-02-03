// ProductPreview.tsx
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import AddToCartButton from "./AddToCartButton" // Reuse AddToCartButton Component

type ProductPreviewProps = {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}

export default function ProductPreview({
  product,
  isFeatured,
  region,
}: ProductPreviewProps) {
  const { cheapestPrice } = getProductPrice({
    product,
  });

  const defaultVariantId = product.variants?.[0]?.id || "";
  const countryCode = region?.country_code || "dk";

  return (
    <div className="group bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <LocalizedClientLink href={`/products/${product.handle}`} passHref>
        <div
          data-testid="product-wrapper"
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="w-full h-56 overflow-hidden rounded-tl-lg rounded-tr-lg relative">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>

          <div className="mt-4 text-center w-full">
            <div className="flex justify-center items-center w-full text-xl font-bold">
              <div className="text-ui-fg-subtle font-bold" data-testid="product-title">
                {product.title}
              </div>
            </div>
            <div className="mt-2 text-center text-xl font-bold text-gray-500">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
          </div>
        </div>
      </LocalizedClientLink>
   
      <div className="mt-4 w-full px-4 pb-4">
        <AddToCartButton variantId={defaultVariantId} countryCode={countryCode} />
      </div>
    </div>
  );
}