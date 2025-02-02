import { Suspense } from "react";
import { listRegions } from "@lib/data/regions";
import { StoreRegion } from "@medusajs/types";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";
import { Search, User } from "lucide-react";
import Image from "next/image";

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions);

  return (
    <>
      {/* Free Shipping Banner: scrolls normally */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-center text-sm py-3 flex font-medium items-center justify-center gap-x-2">
        <Image src="/delivery.png" alt="Delivery" width={20} height={20} />
        Free US shipping for orders above $200
      </div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 h-16 mx-auto border-b bg-white bg-opacity-60 backdrop-blur-lg border-gray-200 flex items-center justify-between px-6">
        {/* Left Side - Logo and Navigation Links */}
        <div className="flex items-center h-full">
          {/* Side Menu: visible on all screens except extra-large (≥1280px) */}
          <div className="block xl:hidden">
            <SideMenu regions={regions} />
          </div>
          <LocalizedClientLink href="/" className="text-lg font-bold flex items-center">
            <img src="/logo.png" alt="Power Peptides Logo" className="h-10 mr-2" />
          </LocalizedClientLink>
          {/* Desktop navigation links */}
          <nav className="hidden lg:flex gap-x-6 text-gray-700">
            <LocalizedClientLink href="/store" className="hover:opacity-50">
              Buy Peptides
            </LocalizedClientLink>
            <LocalizedClientLink href="/contact" className="hover:opacity-50">
              Contact
            </LocalizedClientLink>
            <LocalizedClientLink href="/why-us" className="hover:opacity-50">
              Why Us
            </LocalizedClientLink>
          </nav>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center gap-x-4">
          <LocalizedClientLink href="/search" className="hover:opacity-50">
            <span className="flex items-center">
              <Search size={20} />
              <span className="hidden sm:inline ml-2">Search</span>
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink href="/account" className="hover:opacity-50 hidden sm:inline">
            <span className="flex items-center">
              <User size={20} />
              <span className="ml-2">Log in</span>
            </span>
          </LocalizedClientLink>
          <Suspense>
            <span className="flex items-center gap-x-2">
            <CartButton />
            <span className="hidden sm:inline">Cart</span>
            </span>
          </Suspense>
        </div>
      </header>
    </>
  );
}
