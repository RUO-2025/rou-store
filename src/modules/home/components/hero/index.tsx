import Image from "next/image"
import { CheckCircle, Package, Shield } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-4 py-12 min-h-[75vh] flex flex-col lg:flex-row items-center mt-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-left z-10 ml-12 mr-12">
          <p className="text-gray-600 text-lg font-semibold">Buy Online</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a]">High-Purity Peptides</h1>
          <p className="text-gray-700 text-lg max-w-xl">
            Explore our wide <strong>selection of 99% + purified peptides</strong>, such as Semaglutide, Tirzepatide, GHK-CU, TB-500,
            Ipamorelin and more.
          </p>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 font-semibold">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-600" />
              <span className="text-sm text-gray-700">Third Party Tested for Quality</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center space-x-3">
              <Package className="w-6 h-6 text-teal-600" />
              <span className="text-sm text-gray-700">Vacuum-Sealed for Optimal Storage</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-center space-x-3">
              <Shield className="w-6 h-6 text-teal-600" />
              <span className="text-sm text-gray-700">Verified Purity and Concentration</span>
            </div>
          </div>
          
          <LocalizedClientLink
              href="/store"
              data-testid="nav-store-link"
            >
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-24 py-3  text-lg transition-colors duration-200 mt-4 rounded-2xl">
            Buy Peptides
          </button>
          </LocalizedClientLink>
        </div>

        {/* Right Content - Product Image & Badges */}
        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
          <div className="relative h-[400px] w-full">
            <Image
              src="/pic.avif"
              alt="Peptide Product"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

