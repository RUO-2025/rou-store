import type React from "react";
import { Suspense } from "react";
import type { HttpTypes } from "@medusajs/types";
import ImageGallery from "@modules/products/components/image-gallery";
import ProductActions from "@modules/products/components/product-actions";
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta";
import ProductTabs from "@modules/products/components/product-tabs";
import RelatedProducts from "@modules/products/components/related-products";
import ProductInfo from "@modules/products/templates/product-info";
import { Verified, Zap } from "lucide-react";
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products";
import { notFound } from "next/navigation";
import ProductActionsWrapper from "./product-actions-wrapper";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import FeatureSection from "../templates/features";
import { BeakerIcon, TruckIcon, ShieldCheckIcon } from "lucide-react";
import ProductDetails from "@modules/products/components/product-detail";
import Image from "next/image";
import ProductDescription from "../components/product-description";
import ShippingTimeDisplay from "./ShippingTimeDisplay";

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct;
  region: HttpTypes.StoreRegion;
  countryCode: string;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, region, countryCode }) => {
  if (!product || !product.id) {
    return notFound();
  }


  return (
    <>
      {/* Breadcrumb / Collection Link */}
      <div className="hidden md:block mt-4 ml-12">
  <LocalizedClientLink
    href="/"
    className="text-gray-500 hover:text-gray-700"
  >
    Home
  </LocalizedClientLink>
  <span className="text-gray-500 mx-2">&gt;</span>
  <LocalizedClientLink
    href="/store"
    className="text-gray-500 hover:text-gray-700"
  >
    Products
  </LocalizedClientLink>
  <span className="text-gray-500 mx-2">&gt;</span>
  {product.title}
</div>

      {/* Product Content */}
      <div className="content-container py-6 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Image and Badges */}
          <div className="relative">
            <div className="relative bg-white rounded-lg">
              <ImageGallery
                images={product?.images?.length ? [product.images[0]] : []}
                product={product}
                className="w-full max-w-[900px] mx-auto object-contain"
              />
              
              {/* Molecular Info */}
              <div className="hidden md:flex my-6 flex-col rounded-3xl bg-[#0033660A] px-6 py-5">
  <div className="gap-x-3 gap-y-3">
    <span className="relative top-[5px] mr-2 inline-block h-6 w-6 min-w-[1.5rem] max-w-[1.5rem]">ⓘ</span>
    <p className="text-sm text-gray-600 mt-2">
      Product Usage: This product is intended solely for use as a research chemical in vitro and laboratory experimentation by licensed, qualified professionals. It is not approved for human or animal consumption. Misuse, misbranding, or mislabeling as a drug, food, or cosmetic is strictly prohibited. All information provided is for educational purposes only.
    </p>
  </div>
</div>

            </div>
          </div>

          {/* Right Column - Product Info & Description */}
          <div className="flex flex-col gap-4">
            <ProductInfo product={product} />
            <ProductDescription product={product}/>
            <div className="max-w-[450px] relative">
                <ProductActionsWrapper id={product.id} region={region} />
            </div>

            {/* Shipping Information */}
            <div className="flex flex-col gap-y-3 py-4 border-t">
              <div className="flex items-center">
                <Zap />
                <ShippingTimeDisplay />
              </div>
              <div className="flex items-center">
                <Image src="/delivery.png" alt="logo" height={8} width={25} />
                <span className="text-ui-fg-base text-base ml-2">
                  Free FedEx next-day delivery within the US on orders over €200, with a tracking number provided.
                </span>
              </div>
              <div className="flex text-[#008080] items-center">
                <Verified />
                <span className="text-base ml-2">Third Party Tested</span>
              </div>
            </div>

            {/* Free Gift Promotion */}
            <div className="flex items-center rounded-lg bg-[#EFF6FF] p-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://powerpeptides.com/_next/image?url=https%3A%2F%2Fimages.powerpeptides.com%2Fimage.png&w=64&q=75"
                  alt="Bacteriostatic Water"
                  className="object-contain h-[100px] min-w-[50px]"
                />
                <div>
                  <h4 className="font-bold">FREE Bacteriostatic Water</h4>
                  <p className="text-sm">
                    For every $400 you spend, get 1 FREE bottle of Bacteriostatic Water to reconstitute your peptides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <ProductDetails product={product} />
      <FeatureSection product={product} />

      {/* Related Products */}
      <div className="content-container my-16 small:my-32" data-testid="related-products-container">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  );
};

export default ProductTemplate;