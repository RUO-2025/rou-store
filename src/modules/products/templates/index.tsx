import type React from "react"
import { Suspense } from "react"
import type { HttpTypes } from "@medusajs/types"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import FeatureSection from "../templates/features"
import { BeakerIcon, TruckIcon, ShieldCheckIcon } from "lucide-react"
import ProductDetails from "@modules/products/components/product-detail"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, region, countryCode }) => {
  if (!product || !product.id) {
    return notFound()
  }
  console.log("ssdsd");
  console.log(JSON.stringify(product.metadata));
  return (
    <>
      <div className="mt-4 ml-12">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
      </div>
      <div className="content-container py-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Image and Badges */}
          <div className="relative">


            {/* Main Product Image */}
            <div className="relative bg-white rounded-lg p-8">
              <ImageGallery
                images={product?.images[0] ? [product?.images[0]] : []}
                className="w-full max-w-[900px] mx-auto object-contain"
              />

              {/* Molecular Info */}
              <div className="mt-6 pl-8 pr-8 pt-2 pb-2 bg-gray-100 rounded-xl">
                <span>ⓘ</span>
                <p className="text-sm text-gray-600 font-mono">Product Usage: This product is intended solely for use as a garment for personal wear. It is not intended for any other purpose, including but not limited to industrial or hazardous environments. Misuse or alteration of the product outside of its intended purpose is strictly prohibited. All information provided is for general guidance on wear and care.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="flex flex-col gap-6">
            <ProductInfo product={product} />
            <div className="max-w-[300px] relative">
            <ProductActionsWrapper id={product.id} region={region} />
            </div>

            {/* Shipping Info */}
            <div className="flex flex-col gap-4 py-4 border-t mt-6">
              <div className="flex items-center">
                <span className="text-xl font-semibold">⚡︎</span>
                <span className="text-ui-fg-base text-xl ml-2">
                  <span className="font-bold">Ships </span>
                  <span className="font-bold">Today</span>
                  <span className="font-normal"> if ordered within </span>
                  <span className="font-bold">6 hrs 48 min</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 text-xl font-semibold">🚚</span>
                <span className="text-ui-fg-base text-xl ml-2">
                  Free Next-Day Delivery within the US on orders over €200
                </span>
              </div>
              <div className="flex">
                <span className="text-blue-600 text-xl font-semibold">✅</span>
                <span className="text-green-800 text-xl ml-2">Third Party Tested</span>
              </div>
            </div>

            {/* Free Gift Promotion */}
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://powerpeptides.com/_next/image?url=https%3A%2F%2Fimages.powerpeptides.com%2Fimage.png&w=64&q=75"
                  alt="Bacteriostatic Water"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h4 className="font-bold mb-1">FREE Bacteriostatic Water</h4>
                  <p className="text-sm text-gray-600">
                    For every $400 you spend, get 1 FREE bottle of Bacteriostatic Water to reconstitute your peptides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
  <ProductDetails product={product} />
</div>
      <FeatureSection product={product} />

      <div className="content-container my-16 small:my-32" data-testid="related-products-container">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate

