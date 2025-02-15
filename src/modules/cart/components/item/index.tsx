"use client"

import { Table, Text, clx } from "@medusajs/ui"
import { updateLineItem } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { useState, useRef, useEffect } from "react"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Spinner from "@modules/common/icons/spinner"
import Thumbnail from "@modules/products/components/thumbnail"
import { ChevronUp, ChevronDown, Check } from "lucide-react"

type CustomQuantitySelectorProps = {
  value: number
  onChange: (quantity: number) => void
  disabled: boolean
}

const CustomQuantitySelector = ({ value, onChange, disabled }: CustomQuantitySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState('bottom')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    const handleResize = () => {
      if (isOpen) {
        updateDropdownPosition()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleResize)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  const updateDropdownPosition = () => {
    if (!buttonRef.current) return

    const buttonRect = buttonRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const spaceBelow = windowHeight - buttonRect.bottom
    const spaceAbove = buttonRect.top
    const dropdownHeight = 250

    const newPosition = spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? 'top' : 'bottom'
    setDropdownPosition(newPosition)

    if (listRef.current) {
      const optionHeight = 36
      const scrollPosition = Math.max(0, (value - 3) * optionHeight)
      listRef.current.scrollTop = scrollPosition
    }
  }

  useEffect(() => {
    if (!isOpen || !buttonRef.current) return
    updateDropdownPosition()
  }, [isOpen, value])

  const getAllOptions = () => {
    return Array.from({ length: 100 }, (_, i) => i + 1)
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={clx(
          "w-full flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3",
          "bg-gray-100 rounded-lg sm:rounded-xl text-left",
          "transition-colors duration-200",
          {
            'opacity-50 cursor-not-allowed': disabled,
            'cursor-pointer hover:bg-gray-200 active:bg-gray-300': !disabled
          }
        )}
        disabled={disabled}
        data-testid="quantity-dropdown"
      >
        <span className="text-gray-900 text-xs sm:text-sm font-medium">{value}</span>
        {isOpen ? (
          <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 ml-1" />
        ) : (
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 ml-1" />
        )}
      </button>

      {isOpen && (
        <div 
          className={clx(
            "fixed z-50 bg-white border border-gray-200",
            "rounded-xl sm:rounded-2xl shadow-lg overflow-hidden",
            "transition-all duration-200 ease-in-out",
            {
              'mb-1 sm:mb-2': dropdownPosition === 'top',
              'mt-1 sm:mt-2': dropdownPosition === 'bottom'
            }
          )}
          style={{
            position: 'fixed',
            width: buttonRef.current?.offsetWidth,
            maxWidth: '90vw',
            ...(dropdownPosition === 'top' 
              ? { bottom: window.innerHeight - (buttonRef.current?.getBoundingClientRect().top || 0) } 
              : { top: buttonRef.current?.getBoundingClientRect().bottom || 0 }),
            left: Math.min(
              buttonRef.current?.getBoundingClientRect().left || 0,
              window.innerWidth - (buttonRef.current?.offsetWidth || 0) - 16
            )
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
                className={clx(
                  "w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm",
                  "hover:bg-gray-50 active:bg-gray-100",
                  "transition-colors duration-150",
                  "flex items-center justify-between",
                  {
                    'bg-gray-100': value === num
                  }
                )}
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

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  type?: "full" | "preview"
  currencyCode: string
}

const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const changeQuantity = async (quantity: number) => {
    setError(null)
    setUpdating(true)

    await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setUpdating(false)
      })
  }

  const maxQtyFromInventory = 10
  const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory
  const inStock = maxQuantity > 0

  return (
    <Table.Row 
      className="!bg-transparent !border-none !hover:bg-transparent !p-0" 
      data-testid="product-row"
    >
      <Table.Cell className="!pl-0 p-2 sm:p-4 w-16 sm:w-24">
        <LocalizedClientLink
          href={`/products/${item.product_handle}`}
          className={clx("flex", {
            "w-12 sm:w-16": type === "preview",
            "w-12 sm:w-24": type === "full",
          })}
        >
          <Thumbnail
            thumbnail={item.thumbnail}
            images={item.variant?.product?.images}
            size="square"
          />
        </LocalizedClientLink>
      </Table.Cell>

      <Table.Cell className="text-left">
        <Text
          className="txt-medium-plus text-ui-fg-base text-sm sm:text-base font-semibold line-clamp-2"
          data-testid="product-title"
        >
          {item.product_title}
        </Text>
        <LineItemOptions variant={item.variant} data-testid="product-variant" />
      </Table.Cell>

      {type === "full" && (
        <Table.Cell>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center">
            <DeleteButton id={item.id} data-testid="product-delete-button" />
            <div className="w-16 sm:w-20">
              <CustomQuantitySelector
                value={item.quantity}
                onChange={changeQuantity}
                disabled={updating || !inStock}
              />
            </div>
            {updating && <Spinner />}
          </div>
          <ErrorMessage error={error} data-testid="product-error-message" />
        </Table.Cell>
      )}

      {type === "full" && (
        <Table.Cell className="hidden small:table-cell">
          <LineItemUnitPrice
            item={item}
            style="tight"
            currencyCode={currencyCode}
          />
        </Table.Cell>
      )}

      <Table.Cell className="!pr-0">
        <span
          className={clx("!pr-0 text-sm sm:text-base", {
            "flex flex-col items-end h-full justify-center": type === "preview",
          })}
        >
          {type === "preview" && (
            <span className="flex gap-x-1">
              <Text className="text-ui-fg-muted">{item.quantity}x </Text>
              <LineItemUnitPrice
                item={item}
                style="tight"
                currencyCode={currencyCode}
              />
            </span>
          )}
          <LineItemPrice
            item={item}
            style="tight"
            currencyCode={currencyCode}
          />
        </span>
      </Table.Cell>
    </Table.Row>
  )
}

export default Item