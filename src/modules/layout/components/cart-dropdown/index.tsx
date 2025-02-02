"use client"

import { Cart } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"
import { ShoppingCart, X, ChevronDown, ChevronLeft, ChevronRight, Trash2 } from "lucide-react"
import { formatAmount } from "@lib/util/prices"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { updateLineItem } from "@lib/data/cart"
import ProductStripPage from "app/[countryCode]/(main)/product-strip/page"

const SuggestedProduct = ({ title, variant, price, onAdd }) => (
  <div className="flex flex-col">
    <div className="relative aspect-square mb-2">
      <img src="/api/placeholder/150/150" alt={title} className="object-cover rounded" />
    </div>
    <h3 className="text-base">{title}</h3>
    <p className="text-sm text-gray-600">{variant}</p>
    <div className="flex justify-between items-center mt-2">
      <span className="text-base">${price}</span>
      <button 
        onClick={onAdd}
        className="flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 text-sm"
      >
        Add
      </button>
    </div>
  </div>
);

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTotalDetails, setShowTotalDetails] = useState(false)
  const pathname = usePathname()

  const totalItems = cartState?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0
  const uniqueItemCount = cartState?.items?.length || 0

  // Calculate progress
  const targetAmount = 400
  const currentAmount = cartState?.subtotal || 0
  const progress = Math.min((currentAmount / targetAmount) * 100, 100)

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative flex items-center py-2"
        aria-label="Cart"
      >
        <ShoppingCart size={20}/>
      </button>

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50 visible z-[999]' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
         className={`fixed top-0 right-0 h-full w-[35vw] min-w-[480px] max-w-[600px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[9999] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <h2 className="text-lg">Your Cart</h2>
              <span className="text-gray-600">({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-100 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="border-b">
            <div className="p-4">
              <div className="flex justify-between text-sm mb-1">
                <span>$200</span>
                <span>$400</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-teal-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-600">
                <div className="text-center">
                  <span>FREE</span><br />
                  <span>Shipping</span>
                </div>
                <div className="text-center">
                  <span>FREE</span><br />
                  <span>Bac Water</span>
                </div>
              </div>
            </div>
          </div>

          {cartState && cartState.items?.length ? (
            <>
              {/* Scrollable Content Area */}
              <div className="flex-grow overflow-y-auto">
                <div className="px-4 py-6">
                  {/* Cart Items */}
                  <div className="space-y-6">
                    {cartState.items.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-6 border-b">
                        <div className="w-[80px] h-[80px]">
                          <Thumbnail thumbnail={item.thumbnail} size="square" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-base font-medium">
                                {item.variant.product.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {item.variant.title}
                              </p>
                            </div>
                            <DeleteButton id={item.id} className="text-gray-400 hover:text-gray-600" />
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="relative">
                              <select
                                value={item.quantity}
                                onChange={(e) => updateLineItem({
                                  lineId: item.id,
                                  quantity: parseInt(e.target.value),
                                })}
                                className="appearance-none border rounded px-3 py-1 pr-8 min-w-[64px]"
                              >
                                {[...Array(10)].map((_, i) => (
                                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                            </div>
                            <span className="font-medium">
                              {formatAmount({
                                amount: item.unit_price * item.quantity,
                                region: cartState.region,
                                includeTaxes: false,
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bulk Discount - Only show for single product type */}
                  {uniqueItemCount === 1 && (
                    <div className="mt-6 p-4 bg-gray-50 rounded">
                      <ul className="space-y-1 text-sm">
                        <li>Buy 3+ for ${((cartState.items[0]?.unit_price * 0.95) / 100).toFixed(2)} each and save 5%</li>
                        <li>Buy 5+ for ${((cartState.items[0]?.unit_price * 0.92) / 100).toFixed(2)} each and save 8%</li>
                        <li>Buy 10+ for ${((cartState.items[0]?.unit_price * 0.90) / 100).toFixed(2)} each and save 10%</li>
                      </ul>
                    </div>
                  )}

                  {/* You May Also Like */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg">You May Also Like</h3>
                      <div className="flex gap-2">
                        <button className="p-1 rounded-full hover:bg-gray-100">
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-1 rounded-full hover:bg-gray-100">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* <SuggestedProduct
                        title="Product Name"
                        variant="5mg"
                        price="99.99"
                        onAdd={() => {}}
                      /> */}
                      {/* <SuggestedProduct
                        title="Product Name"
                        variant="30mg"
                        price="99.99"
                        onAdd={() => {}}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Section - Fixed at bottom */}
              <div className="border-t">
                <div className="p-4">
                  <button 
                    onClick={() => setShowTotalDetails(!showTotalDetails)}
                    className="w-full flex items-center justify-between"
                  >
                    <span className="text-lg">Total:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        {formatAmount({
                          amount: cartState.subtotal || 0,
                          region: cartState.region,
                          includeTaxes: false,
                        })}
                      </span>
                      <ChevronDown className={`w-4 h-4 transform transition-transform ${showTotalDetails ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {showTotalDetails && (
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Subtotal ({totalItems} items)</span>
                        <span>{formatAmount({
                          amount: cartState.subtotal || 0,
                          region: cartState.region,
                          includeTaxes: false,
                        })}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Tax</span>
                        <span>Calculated at checkout</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                      </div>
                      <div className="pt-2 text-gray-600">
                        Have a promo code? Apply during checkout
                      </div>
                    </div>
                  )}

                  <div className="mt-4 space-y-2">
                    <LocalizedClientLink href="/checkout?step=address">
                      <Button
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
                        onClick={() => setIsOpen(false)}
                      >
                        Secure Checkout
                      </Button>
                    </LocalizedClientLink>
                    <LocalizedClientLink href="/cart">
                      <button className="w-full text-center py-2 text-gray-600 hover:text-gray-800">
                        View Cart
                      </button>
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center p-4">
              <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                <div className="bg-gray-900 text-sm flex items-center justify-center w-6 h-6 rounded-full text-white">
                  <span>0</span>
                </div>
                <span>Your cart is empty</span>
                <LocalizedClientLink href="/store">
                  <Button 
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Explore products
                  </Button>
                </LocalizedClientLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDropdown