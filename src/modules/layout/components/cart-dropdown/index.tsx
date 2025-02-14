'use client';
import React, { useState, useEffect } from 'react';
import { Cart } from "@medusajs/medusa";
import { Button } from "@medusajs/ui";
import { usePathname } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { formatAmount } from "@lib/util/prices";
import DeleteButton from "@modules/common/components/delete-button";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Thumbnail from "@modules/products/components/thumbnail";
import { updateLineItem } from "@lib/data/cart";
import ProductStripPreview from "@modules/products/components/product-strip-preview";

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTotalDetails, setShowTotalDetails] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch by waiting until after mounting
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Disable body scrolling when the cart dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
   
   // Return null until the component has mounted on the client
   if (!hasMounted) return null;


  const totalItems = cartState?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  const targetAmount = 400;
  const currentAmount = cartState?.subtotal || 0;
  const progress = Math.min((currentAmount / targetAmount) * 100, 100);

  const isSingleProductType = cartState?.items?.length === 1;

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative flex items-center gap-2"
      >
        {/* Cart Icon with Badge */}
        <div className="relative">
          <div className="relative inline-flex shrink-0">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              aria-hidden="true" 
              className="h-6 w-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            
            {/* Cart Badge */}
            {totalItems > 0 && (
              <span 
                className="flex z-10 absolute box-border rounded-full whitespace-nowrap place-content-center origin-center items-center 
                  select-none font-regular scale-100 opacity-100 subpixel-antialiased px-0 border-2 border-background 
                  w-5 h-5 min-w-5 min-h-5 top-[5%] right-[5%] translate-x-1/2 -translate-y-1/2 
                  bg-[#008080] text-[14px] text-white"
              >
                {totalItems}
              </span>
            )}
          </div>
        </div>

        {/* Cart Label (Hidden on smaller screens) */}
        {/* <span className="hidden sm:block">Cart</span> */}
      </button>

      <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${
        isOpen ? 'opacity-50 visible z-[999]' : 'opacity-0 invisible'
      }`} onClick={() => setIsOpen(false)} />

      {/* Updated panel container for responsiveness: full width on mobile, original width on larger screens */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[36vw] sm:min-w-[480px] max-w-[600px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[9999] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b px-[12px] py-[12px] sm:px-[24px]">
            <p className="xs:text-2xl text-xl font-medium text-[#181E22]">
              Your Cart
              {totalItems > 0 &&  <span className="ml-2 text-sm font-normal text-[#5A5A62]">
                ({totalItems} item{totalItems !== 1 ? 's' : ''})
              </span>}
            </p>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {(!cartState || !cartState.items || cartState.items.length === 0) ? (
            <div className="px-[12px] py-[30px] sm:px-[24px]">
              <div className=" text-[#11181C] ">
                <p className="w-[350px] h-[24px] text-base sm:text-lg">
                  You have no items in your shopping cart.
                </p>
                <LocalizedClientLink
                  className="w-[228px] h-[21px] text-sm sm:text-base underline underline-offset-4 text-center mt-2"
                  href="/store"
                >
                  Click here to continue shopping.
                </LocalizedClientLink>
              </div>
            </div>
          ) : (
            <>
              <div className="relative -left-4 my-10 flex items-center justify-between gap-2 px-[32px] text-xs text-[#000] lg:px-[40px]">
                {/* Free Shipping (Always shown if total > €40) */}
                {currentAmount > 1 && (
                  <>
                    <div className="h-2 w-full overflow-hidden rounded-lg bg-[#C4C4C4]">
                      <div
                        className="h-full bg-[#008080]"
                        style={{ width: `${Math.min((currentAmount / 200) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[6px] -top-[18px] font-normal">€200</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>
                      <span className="absolute -bottom-[36px] -left-[14px] text-center font-normal">FREE Shipping</span>
                    </div>
                  </>
                )}

                {currentAmount > 1 && (
                  <>
                    <div className="h-2 w-full overflow-hidden rounded-lg bg-[#C4C4C4]">
                      <div
                        className={`h-full ${
                          currentAmount >= 200 ? "bg-[#008080]" : "bg-transparent"
                        }`}
                        style={{ 
                          width: `${
                            currentAmount < 400 
                              ? Math.min((currentAmount / 400) * 100, 100)
                              : 100
                          }%`
                        }}
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute -left-2 -top-[20px] font-normal">
                        €{currentAmount < 400 ? 400 : Math.floor(currentAmount / 400) * 400}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        stroke="#000"
                      >
                        <path d="M316.9 157.8H195.1c-48 0-87.1 39.1-87.1 87.1v235.7c0 11.3 9.1 20.4 20.4 20.4h255.2c11.3 0 20.4-9.1 20.4-20.4V244.9c0-48-39-87.1-87.1-87.1zm-121.8 40.8H317c25.5 0 46.3 20.8 46.3 46.3v41.5H148.8v-41.5c0-25.5 20.8-46.3 46.3-46.3zm-46.3 261.6v-133h214.4v132.9H148.8zM182.6 132.1h149.2c11.3 0 20.4-9.1 20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4H182.6c-11.3 0-20.4 9.1-20.4 20.4v80.3c0 11.3 9.1 20.4 20.4 20.4zM203 51.8h108.4v39.5H203V51.8z" />
                      </svg>
                      <span className="absolute -bottom-[36px] -left-[28px] whitespace-nowrap text-center font-normal">
                        FREE<br />
                        Bac Water x{currentAmount < 400 ? 1 : Math.floor(currentAmount / 400)}
                      </span>
                    </div>
                  </>
                )}

                {/* Additional Free Bac Water (Shown when total >= €400) */}
                {currentAmount >= 400 && (
                  <>
                    <div className="h-2 w-full overflow-hidden rounded-lg bg-[#C4C4C4]">
                      <div
                        className="h-full bg-[#008080]"
                        style={{ 
                          width: `${Math.min(
                            ((currentAmount % 400) / 400) * 100,
                            100
                          )}%`
                        }}
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute -left-2 -top-[20px] font-normal">
                        €{Math.ceil(currentAmount / 400) * 400}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        <path d="M316.9 157.8H195.1c-48 0-87.1 39.1-87.1 87.1v235.7c0 11.3 9.1 20.4 20.4 20.4h255.2c11.3 0 20.4-9.1 20.4-20.4V244.9c0-48-39-87.1-87.1-87.1zm-121.8 40.8H317c25.5 0 46.3 20.8 46.3 46.3v41.5H148.8v-41.5c0-25.5 20.8-46.3 46.3-46.3zm-46.3 261.6v-133h214.4v132.9H148.8zM182.6 132.1h149.2c11.3 0 20.4-9.1 20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4H182.6c-11.3 0-20.4 9.1-20.4 20.4v80.3c0 11.3 9.1 20.4 20.4 20.4zM203 51.8h108.4v39.5H203V51.8z" />
                      </svg>
                      <span className="absolute -bottom-[36px] -left-[28px] whitespace-nowrap text-center font-normal">
                        FREE<br />
                        Bac Water x{Math.floor(currentAmount / 400) + 1}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <hr className="mt-4" />

              <div className="flex-grow overflow-y-auto overflow-x-hidden">
                <div className="divide-y">
                  {cartState.items.map((item) => (
                    <React.Fragment key={item.id}>
                      <div className="px-[12px] py-4 sm:px-[24px]">
                        <div className="mb-4 flex items-center gap-x-4 sm:gap-x-4">
                          <div className="block h-[60px] w-[40px] min-w-[40px] sm:h-[96px] sm:w-[96px] sm:min-w-[96px]">
                            <Thumbnail thumbnail={item.thumbnail} size="square" />
                          </div>
                          <div className="relative flex flex-grow">
                            <div className="flex flex-grow flex-col">
                              <p className="text-base-regular overflow-hidden text-ellipsis bg-[#008080] text-sm sm:text-base">
                                {item.variant.product.title}
                              </p>
                              <div className="text-[#5A5A62]">
                                <p className="txt-medium relative top-0 inline-block w-full overflow-hidden text-ellipsis font-sans text-sm font-normal text-ui-fg-subtle sm:text-base">
                                  {item.variant.title}
                                </p>
                              </div>
                              <div className="mt-auto flex flex-grow items-center gap-2">
                                <div className="relative inline-block mr-2 w-full max-w-[80px]">
                                  <select
                                    value={item.quantity}
                                    onChange={(e) =>
                                      updateLineItem({
                                        lineId: item.id,
                                        quantity: parseInt(e.target.value, 10),
                                      })
                                    }
                                    className="w-full appearance-none rounded-lg bg-[#F4F4F5] px-3 py-2 text-sm cursor-pointer no-scrollbar hover:bg-[#F9F9FA] pr-10"
                                  >
                                    {[...Array(49)].map((_, i) => (
                                      <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                      </option>
                                    ))}
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                                    <ChevronDown className="w-4 h-4" />
                                  </div>
                                </div>

                                <div className="flex items-end gap-2">
                                  <span className="self-center text-xs text-[#5A5A62] sm:text-base">x</span>
                                  <div>
                                    <p className="whitespace-nowrap text-right text-xs text-[#5A5A62] sm:text-base">
                                      {formatAmount({
                                        amount: item.unit_price * 100,
                                        region: cartState.region,
                                        includeTaxes: false,
                                      })}
                                    </p>
                                  </div>
                                </div>
                                <div className="ml-auto text-right text-xs sm:text-base">
                                  {formatAmount({
                                    amount: (item.unit_price * 100) * item.quantity,
                                    region: cartState.region,
                                    includeTaxes: false,
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="absolute right-0 top-0">
                              <DeleteButton id={item.id} />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tiered Pricing Banner */}
                      {isSingleProductType && (
                        <ul className="list-inside list-disc rounded-lg bg-[#F5F6F8] p-2 lg:p-4 mx-[12px] sm:mx-[24px]">
                          <li className={`text-[#52525B] lg:text-base text-xs ${item.quantity >= 3 ? 'line-through' : ''}`}>
                            Buy <span className="font-bold">3+</span> for <span className="font-bold">$51.29</span> each and <span className="font-bold">save 5%</span>
                          </li>
                          <li className={`text-[#52525B] lg:text-base text-xs ${item.quantity >= 5 ? 'line-through' : ''}`}>
                            Buy <span className="font-bold">5+</span> for <span className="font-bold">$49.67</span> each and <span className="font-bold">save 8%</span>
                          </li>
                          <li className={`text-[#52525B] lg:text-base text-xs ${item.quantity >= 10 ? 'line-through' : ''}`}>
                            Buy <span className="font-bold">10+</span> for <span className="font-bold">$48.59</span> each and <span className="font-bold">save 10%</span>
                          </li>
                        </ul>
                      )}
                    </React.Fragment>
                  ))}
                </div>  
                <hr  />
                {/* Free Bac Water Banner */}
                {(cartState.subtotal || 0) >= 400 && (() => {
  // Calculate the free gift quantity based on the subtotal in €.
  const freeGiftQty = Math.floor(cartState.subtotal / 400);
  return (
    <div className="flex items-start gap-x-4 px-[12px] py-4 sm:gap-x-4 sm:px-[24px]">
      <div className="block h-[60px] w-[40px] min-w-[40px] sm:h-[96px] sm:w-[96px] sm:min-w-[96px]">
        <img
          alt="Bacteriostatic Water"
          loading="lazy"
          width="96"
          height="96"
          decoding="async"
          className="h-[60px] w-[40px] min-w-[40px] rounded-xl border bg-[#FAFAFA] object-contain sm:h-[96px] sm:w-[96px] sm:min-w-[96px]"
          src="https://powerpeptides.com/_next/image?url=https%3A%2F%2Fimages.powerpeptides.com%2Fimage.png&w=128&q=75"
          style={{ color: 'transparent' }}
        />
      </div>
      <div className="relative flex flex-grow">
        <div className="flex flex-grow flex-col">
          <p className="text-base-regular overflow-hidden text-ellipsis text-sm sm:text-base">
            Bacteriostatic Water (Gift)
          </p>
          <div className="text-[#5A5A62]">
            <p className="txt-medium relative top-0 inline-block w-full overflow-hidden text-ellipsis font-sans text-sm font-normal text-ui-fg-subtle sm:text-base">
              30ml
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex h-[40px] w-[80px] items-center justify-between rounded-lg bg-[#F9F9FA] px-3 text-[14px] text-[#7F7F7F]">
              {freeGiftQty}
              <ChevronDown className="w-5 h-5" />
            </p>
            <p className="text-xs sm:text-base">Free</p>
          </div>
        </div>
      </div>
    </div>
  );
})()}

              {/* You May Also Like Section */}
            {/* <section className="border-t px-[12px] py-4 sm:px-[24px]">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-semibold sm:text-lg">You May Also Like</h4>
              </div>
              <div className="overflow-x-auto pb-2">
                 <ProductStripPreview /> 
              </div>
            </section> */}
            </div>
            
              {/* Total Details */}
              <div className="border-t bg-[#F3F4F6] px-[12px] py-4 sm:px-[24px]">
                <div className="space-y-1">
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <button 
                      onClick={() => setShowTotalDetails(!showTotalDetails)}
                      className="flex items-center gap-2 text-left"
                    >
                      <span className="font-bold sm:text-lg">Total:</span>
                      see details
                      <ChevronDown className={`transform transition-transform ${showTotalDetails ? 'rotate-180' : ''}`} />
                    </button>
                    <div className="items-center gap-2 text-right sm:text-left flex">
                      <p className="font-semibold sm:text-base">
                        {formatAmount({
                          amount: (cartState.total || 0) * 100,  // Multiply by 100 to convert from cents to euros
                          region: cartState.region,
                          includeTaxes: false,
                        })}
                      </p>
                    </div>
                  </div>

                  <div className={`overflow-hidden text-sm font-normal transition-[height] duration-400 ${
                    showTotalDetails ? 'h-auto' : 'h-0'
                  }`}>
                    <p className="mt-2 flex items-center justify-between sm:text-base">
                      Subtotal ({totalItems} items)
                      <span>
                        {formatAmount({
                          amount: (cartState.subtotal || 0) * 100,  // Multiply by 100 to convert from cents to euros
                          region: cartState.region,
                          includeTaxes: false,
                        })}
                      </span>
                    </p>
                    <p className="flex items-center justify-between sm:text-base">
                      Tax
                      <span>Calculated at checkout</span>
                    </p>
                    <p className="flex items-center justify-between sm:text-base">
                      Shipping
                      <span>Free</span>
                    </p>
                    <p className="mt-4 text-xs text-[#5A5A62] sm:text-base">
                      Have a promo code? Apply during checkout
                    </p>
                  </div>
                </div>

                <LocalizedClientLink href="/checkout?step=address" className="mb-2 flex h-[40px] w-full items-center justify-center rounded-[10px] bg-[#008080] text-sm text-white sm:h-[50px] sm:text-base">
                  Secure Checkout
                </LocalizedClientLink>
                
                <LocalizedClientLink href="/cart" className="mb-2 block text-center text-sm underline underline-offset-2">
                  View Cart
                </LocalizedClientLink>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDropdown;


