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

          {/* <Suspense>
            <span className="flex items-center gap-x-2">
            <CartButton />
            <span className="hidden sm:inline">Cart</span>
            </span>
          </Suspense> */}
         
<Suspense fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
        </div>
      </header>
    </>
  );
}
