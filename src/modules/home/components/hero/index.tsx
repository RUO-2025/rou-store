import Image from "next/image"
import { CheckCircle, Archive, FlaskConical } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <>
    {/* desktop view */}
    <div className="relative w-full overflow-hidden hidden lg:flex min-h-screen"
    style={{ background: 'linear-gradient(102.84deg, #E1EFFF 26.12%, #B5D7F8 66.91%, #D3EAFF 93.51%)' }}>
      <div className="container relative py-12 min-h-[75vh] flex mt-20">
        {/* Left Content - Fixed Width Container */}
        <div className="fixed-width-container z-20 px-8 lg:px-12">
          <p className="text-gray-500 text-base font-semibold mb-4">Buy Online</p>
          <h1 className="pb-3 text-6xl font-semibold tracking-tight bg-gradient-to-r from-[#1e2c60] to-[#3c53a8] bg-clip-text text-transparent whitespace-nowrap">
            High-Purity Peptides
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#11181C] max-w-[750px]">
            Explore our wide <strong>selection of 99% + purified peptides</strong>, such as Semaglutide, Tirzepatide, GHK-CU, TB-500, Ipamorelin and more.
          </p>

          {/* Feature Boxes - Fixed Width Grid */}
          <div className="mt-6 grid grid-cols-3 gap-4 pb-10 max-w-[900px]">
            <div className="bg-white pl-4 pr-8 py-4 rounded-xl shadow-sm flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-teal-600 shrink-0" />
              <span className="text-base text-gray-700 font-semibold font-sans whitespace-nowrap">Third Party<br/>Tested for Quality</span>
            </div>
            <div className="bg-white pl-4 pr-8 py-4 rounded-xl shadow-sm flex items-center space-x-3">
              <Archive className="w-6 h-6 text-teal-600 shrink-0" />
              <span className="text-base text-gray-700 font-semibold font-sans whitespace-nowrap">Vacuum-Sealed<br/>for Optimal Storage</span>
            </div>
            <div className="bg-white pl-4 pr-8 py-4 rounded-xl shadow-sm flex items-center space-x-3">
              <FlaskConical className="w-6 h-6 text-blue-600 shrink-0" />
              <span className="text-base text-gray-700 font-semibold font-sans whitespace-nowrap">Verified Purity<br/>and Concentration</span>
            </div>
          </div>
          
          <LocalizedClientLink
          href="/store"
          data-testid="nav-store-link"
           >
          <button className="block w-full rounded-[16px] bg-[#008080] py-4 text-center font-medium text-white transition-colors duration-200 hover:bg-[#028186] lg:max-w-[290px]">
            Buy Peptides
          </button>
          </LocalizedClientLink>
    </div>

        {/* Right Content - Product Image & Badges with Dynamic Positioning */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full z-10 transition-transform duration-500 ease-in-out"
          style={{
            transform: 'translateX(calc(max(0px, 58vw - 800px)))'
          }}
        >
          <div className="relative h-[500px] w-full max-w-[550px]">
            <Image
              src="/pic.avif"
              alt="Peptide Product with Certification Badges"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>



{/* mobile view */}
<div
      className="relative w-full overflow-hidden lg:hidden"
      style={{ background: "linear-gradient(102.84deg, #E1EFFF 26.12%, #B5D7F8 66.91%, #D3EAFF 93.51%)" }}
    >
      <div className="py-4 min-h-[75vh] flex flex-col lg:flex-row items-start relative">
        {/* Left Content */}
        <div className="w-full text-left z-20 px-2 lg:pl-12 lg:pr-0">
          <p className="text-gray-500 text-sm font-semibold mb-2">Buy Online</p>
          <h1 className="pb-3 text-4xl font-semibold tracking-tight md:text-4xl lg:text-6xl bg-gradient-to-r from-[#1e2c60] to-[#3c53a8] bg-clip-text text-transparent">
            High-Purity Peptides
          </h1>
          <p className="mt-3 text-lg leading-7 text-[#11181C] md:leading-8">
            Explore our wide <strong className="font-semibold">selection of 99% + purified peptides</strong>, such as Semaglutide, Tirzepatide,
            GHK-CU, TB-500, Ipamorelin and more.
          </p>


          {/* Feature Boxes */}
          <div className="mt-16 flex flex-col items-start gap-8 md:flex-row pb-10">
        <div className="bg-white px-6 py-4 rounded-3xl shadow-sm flex items-center space-x-3 w-full md:w-1/2 max-w-[50%]">
          <CheckCircle className="w-12 h-12 text-teal-600" />
          <span className="text-2xl text-gray-700 font-semibold font-sans">
            Third Party <br /> Tested for <br /> Quality
          </span>
        </div>
        <div className="bg-white px-6 py-4 rounded-3xl shadow-sm flex items-center space-x-3 w-full md:w-1/2 max-w-[50%]">
          <FlaskConical className="w-12 h-12 text-teal-600" />
          <span className="text-2xl text-gray-700 font-semibold font-sans">
            Verified <br /> Purity and <br /> Concentration
          </span>
        </div>
      </div>
        </div>

        {/* Right Content - Product Image & Badges */}
        <div className="ml-4 absolute right-[0%] lg:right-0 top-[35%] z-10 w-[180%] lg:w-[70%] h-[600px] transition-all duration-300 ease-in-out mt-16">
          <div className="relative h-full w-full">
            <Image
              src="/pic.avif"
              alt="Peptide Product"
              width={600}
              height={600}
              className="object-contain absolute right-0 top-0"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mt-80 flex justify-center w-full pb-4">
        <LocalizedClientLink href="/store" className="w-full flex justify-center">
          <button className="w-full max-w-[800px] rounded-[16px] bg-[#008080] py-4 text-center font-medium text-white transition-colors duration-200 hover:bg-[#028186]">
            Buy Peptides
          </button>
        </LocalizedClientLink>
      </div>
    </div>
</>
  )
}

export default Hero

