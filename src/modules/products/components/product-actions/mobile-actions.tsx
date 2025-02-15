import { Dialog, Transition } from "@headlessui/react"
import { Button, clx } from "@medusajs/ui"
import React, { Fragment, useMemo, useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp, Check } from "lucide-react"
import X from "@modules/common/icons/x"
import { getProductPrice } from "@lib/util/get-product-price"
import OptionSelect from "./option-select"
import { HttpTypes } from "@medusajs/types"
import { useCart } from "context/cartContext"

const useToggleState = (initialState = false) => {
  const [state, setState] = useState(initialState)
  const open = () => setState(true)
  const close = () => setState(false)
  const toggle = () => setState(!state)
  return { state, open, close, toggle }
}

const CustomQuantitySelector = ({ value, onChange, disabled }: { 
  value: number, 
  onChange: (val: number) => void, 
  disabled?: boolean 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('bottom')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const { isCartOpen } = useCart();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isOpen || !buttonRef.current) return

    const buttonRect = buttonRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const spaceBelow = windowHeight - buttonRect.bottom
    const spaceAbove = buttonRect.top
    const dropdownHeight = 250

    const position = spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? 'top' : 'bottom'
    setDropdownPosition(position)

    if (listRef.current) {
      const optionHeight = 36
      const scrollPosition = Math.max(0, (value - 3) * optionHeight)
      requestAnimationFrame(() => {
        if (listRef.current) {
          listRef.current.scrollTop = scrollPosition
        }
      })
    }
  }, [isOpen, value])

  const getAllOptions = () => {
    return Array.from({ length: 100 }, (_, i) => i + 1)
  }

  return (
    <div className={`relative w-full ${isCartOpen && 'hidden'}`} ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg sm:rounded-xl ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-200'
        }`}
        disabled={disabled}
        data-testid="quantity-dropdown"
      >
        <span className="text-gray-900 text-xs sm:text-sm">{value}</span>
        {isOpen ? (
          <ChevronUp className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600" />
        ) : (
          <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div 
          className={`fixed z-[1001] w-[inherit] bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden
            ${dropdownPosition === 'top' ? 'mb-1 sm:mb-2' : 'mt-1 sm:mt-2'}`}
          style={{
            position: 'fixed',
            width: buttonRef.current?.offsetWidth,
            ...(dropdownPosition === 'top' 
              ? { bottom: window.innerHeight - (buttonRef.current?.getBoundingClientRect().top || 0) } 
              : { top: buttonRef.current?.getBoundingClientRect().bottom || 0 }),
            left: buttonRef.current?.getBoundingClientRect().left
          }}
        >
          <div 
            ref={listRef}
            className="max-h-[200px] sm:max-h-[250px] overflow-y-auto scrollbar-hide"
          >
            {getAllOptions().map((num) => (
              <button
                key={num}
                onClick={() => {
                  onChange(num)
                  setIsOpen(false)
                }}
                className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-left hover:bg-gray-50 text-xs sm:text-sm flex items-center justify-between ${
                  value === num ? 'bg-gray-100' : ''
                }`}
              >
                <span>{num}</span>
                {value === num && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

type MobileActionsProps = {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
  options: Record<string, string | undefined>
  updateOptions: (title: string, value: string) => void
  inStock?: boolean
  handleAddToCart: (quantity: number) => void
  isAdding?: boolean
  show: boolean
  optionsDisabled: boolean
}

const MobileActions: React.FC<MobileActionsProps> = ({
  product,
  variant,
  options,
  updateOptions,
  inStock,
  handleAddToCart,
  isAdding,
  show,
  optionsDisabled,
}) => {
  const { isCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1)
  const { state, open, close } = useToggleState()

  const price = getProductPrice({
    product: product,
    variantId: variant?.id,
  })

  const selectedPrice = useMemo(() => {
    if (!price) {
      return null
    }
    const { variantPrice, cheapestPrice } = price
    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <>
      <div
        className={clx(`w-full bg-white border-t border-gray-200 transition-all duration-200 ${isCartOpen && 'hidden'}`, {
          "fixed inset-x-0 bottom-0 z-[999] shadow-lg": true,
          "pointer-events-none transform translate-y-full": !show,
          "transform translate-y-0": show
        })}
      >
        <Transition
          as={Fragment}
          show={show}
          enter="transform transition ease-out duration-200"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition ease-in duration-200"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
        >
          <div
            className="flex items-center justify-between p-3 sm:p-4 w-full px-4 sm:px-6"
            data-testid="mobile-actions"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <img 
                  src={product.thumbnail || "/api/placeholder/48/48"} 
                  alt={product.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium text-sm sm:text-base">{product.title}</span>
                  <div className="block sm:hidden">
                    {selectedPrice && (
                      <div className="text-gray-600 text-xs sm:text-sm">
                        {selectedPrice.price_type === "sale" && (
                          <span className="line-through mr-2">
                            {selectedPrice.original_price}
                          </span>
                        )}
                        <span className={selectedPrice.price_type === "sale" ? "text-ui-fg-interactive" : ""}>
                          {selectedPrice.calculated_price}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
                <div className="hidden sm:block">
                  {selectedPrice && (
                    <div className="text-gray-900 font-bold text-sm sm:text-base whitespace-nowrap">
                      {selectedPrice.calculated_price}
                    </div>
                  )}
                </div>
                
                <div className="w-12 sm:w-16">
                  <CustomQuantitySelector
                    value={quantity}
                    onChange={setQuantity}
                    disabled={isAdding || !inStock || !!optionsDisabled}
                  />
                </div>
                <Button
                  onClick={() => handleAddToCart(quantity)}
                  disabled={!inStock || !variant}
                  className="flex-1 sm:flex-none bg-[#008080] hover:bg-teal-600 text-white py-2 sm:py-3 px-4 sm:px-8 rounded-lg flex items-center gap-2 justify-center text-sm sm:text-base"
                  isLoading={isAdding}
                  data-testid="mobile-cart-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span>Add</span>
                </Button>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Transition appear show={state} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed bottom-0 inset-x-0">
            <div className="flex min-h-full h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel
                  className="w-full h-full transform overflow-hidden text-left flex flex-col gap-y-2 sm:gap-y-3"
                  data-testid="mobile-actions-modal"
                >
                  <div className="w-full flex justify-end pr-4 sm:pr-6">
                    <button
                      onClick={close}
                      className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full text-ui-fg-base flex justify-center items-center"
                      data-testid="close-modal-button"
                    >
                      <X />
                    </button>
                  </div>
                  <div className="bg-white px-4 sm:px-6 py-8 sm:py-12">
                    {(product.variants?.length ?? 0) > 1 && (
                      <div className="flex flex-col gap-y-4 sm:gap-y-6">
                        {(product.options || []).map((option) => {
                          return (
                            <div key={option.id}>
                              <OptionSelect
                                option={option}
                                current={options[option.title ?? ""]}
                                updateOption={updateOptions}
                                title={option.title ?? ""}
                                disabled={optionsDisabled}
                              />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileActions