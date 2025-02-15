import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import CartProgressBars from "../components/cart-progress-bar"
import { HttpTypes } from "@medusajs/types"
import ProductSlider from "../components/product-slider"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  const currentAmount = cart?.subtotal || 0;

  return (
    <div className="py-12">
      <div className="content-container" data-testid="cart-container">
        {cart?.items?.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
            <div className="flex flex-col bg-white py-6 gap-y-6">
              {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )}
              <div className="mb-10 mt-6">
                <CartProgressBars currentAmount={currentAmount} />
              </div>
              <ItemsTemplate cart={cart} />
              <div className="w-full">
                <ul className="list-inside list-disc bg-[#F5F6F8] p-6 lg:p-8">
                          <li className={`text-[#52525B] lg:text-base text-xs`}>
                            Buy <span className="font-bold"> 3 +</span>and get<span className="font-bold"> 5% </span>OFF!
                          </li>
                          <li className={`text-[#52525B] lg:text-base text-xs`}>
                            Buy <span className="font-bold"> 5+ </span>and get<span className="font-bold"> 8% </span>OFF!
                          </li>
                          <li className={`text-[#52525B] lg:text-base text-xs`}>
                            Buy <span className="font-bold"> 10+ </span>and get<span className="font-bold"> 10% </span>OFF!
                          </li>
                        </ul>
                </div>
                <div className="relative">
                <div className="flex flex-col gap-y-2 sticky top-12">
                  <Divider/>
                  <ProductSlider />
                </div>
              </div>
              <div className="flex items-center rounded-lg bg-[#EFF6FF] p-6">
              <div className="flex items-center gap-4">
                <img
                  src="/image.png"
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
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {cart && cart.region && (
                  <>
                    <div className="bg-white py-6">
                      <Summary cart={cart as any} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate