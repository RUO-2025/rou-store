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

const CustomQuantitySelector = ({ value, onChange, disabled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState('bottom')
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div className="relative w-full" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-xl ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-200'
        }`}
        disabled={disabled}
        data-testid="quantity-dropdown"
      >
        <span className="text-gray-900 text-sm">{value}</span>
        {isOpen ? (
          <ChevronUp className="w-3 h-3 text-gray-600" />
        ) : (
          <ChevronDown className="w-3 h-3 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div 
          className={`fixed z-50 w-[inherit] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden
            ${dropdownPosition === 'top' ? 'mb-2' : 'mt-2'}`}
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
            className="max-h-[250px] overflow-y-auto scrollbar-hide"
          >
            {getAllOptions().map((num) => (
              <button
                key={num}
                onClick={() => {
                  onChange(num)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 text-sm flex items-center justify-between ${
                  value === num ? 'bg-gray-100' : ''
                }`}
              >
                <span>{num}</span>
                {value === num && <Check className="w-4 h-4 text-gray-600" />}
              </button>
            ))}
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
    <Table.Row className="!bg-transparent !border-none !hover:bg-transparent !p-0" data-testid="product-row">
      <Table.Cell className="!pl-0 p-4 w-24">
        <LocalizedClientLink
          href={`/products/${item.product_handle}`}
          className={clx("flex", {
            "w-16": type === "preview",
            "small:w-24 w-12": type === "full",
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
          className="txt-medium-plus text-ui-fg-base font-semibold"
          data-testid="product-title"
        >
          {item.product_title}
        </Text>
        <LineItemOptions variant={item.variant} data-testid="product-variant" />
      </Table.Cell>

      {type === "full" && (
        <Table.Cell>
          <div className="flex gap-2 items-center">
            <DeleteButton id={item.id} data-testid="product-delete-button" />
            <div className="w-20">
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
          className={clx("!pr-0", {
            "flex flex-col items-end h-full justify-center": type === "preview",
          })}
        >
          {type === "preview" && (
            <span className="flex gap-x-1 ">
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