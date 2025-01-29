import { FlaskRoundIcon as Flask, Verified, Truck } from "lucide-react"
import type { HttpTypes } from "@medusajs/types"

interface FeatureSectionProps {
  product: HttpTypes.StoreProduct
}

export default function FeatureSection({ product }: FeatureSectionProps) {
  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Heading Section */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Power Peptides is the best place to buy {product.title}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Power Peptides™ is more than just a trusted U.S. supplier of research peptides. We are a catalyst for
            scientific advancement, dedicated to providing the highest quality peptides that empower our clients to push
            the boundaries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Flask className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Unparalleled Quality</h3>
            <p className="text-gray-600">
              Our proprietary processes and meticulous sourcing of premium materials ensure that every peptide we offer
              meets the most stringent standards.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Verified className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Independently Verified</h3>
            <p className="text-gray-600">
              Every product undergoes extensive testing, both in-house and through independent, third-party
              laboratories.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Shipping & Support</h3>
            <p className="text-gray-600">
              We provide fast and reliable shipping, using the best couriers and high-quality packaging materials to
              ensure that your peptides arrive promptly and in optimal condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

