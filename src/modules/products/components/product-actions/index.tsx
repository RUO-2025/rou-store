'use client'

import { addToCart } from "@lib/data/cart"
import { useIntersection } from "@lib/hooks/use-in-view"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/product-actions/option-select"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import MobileActions from "./mobile-actions"

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductActions({
  product,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const countryCode = useParams().countryCode as string

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    } else if (product.options) {
      const sizeOption = product.options.find(option => option.title.toLowerCase() === 'size')
      if (sizeOption && sizeOption.values?.length) {
        const firstSize = sizeOption.values[0].value 
        setOptions((prev) => ({
          ...prev,
          [sizeOption.id]: firstSize,
        }))
      }
    }
  }, [product.variants, product.options])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  const inStock = useMemo(() => {
    if (!selectedVariant) return false
    if (!selectedVariant.manage_inventory || selectedVariant.allow_backorder) {
      return true
    }
    return (selectedVariant.inventory_quantity ?? 0) > 0
  }, [selectedVariant])

  const actionsRef = useRef<HTMLDivElement>(null)
  const inView = useIntersection(actionsRef, "0px")

  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null
    setIsAdding(true)

    await addToCart({
      variantId: selectedVariant.id,
      quantity, // Quantity from the state
      countryCode,
    })

    setIsAdding(false)
  }

  return (
    <div className="flex flex-col gap-y-2" ref={actionsRef}>
      <div>
        {(product.variants?.length ?? 0) >= 1 && (  // Changed from > 1 to >= 1
  <div className="flex flex-col gap-y-4">
    {(product.options || []).map((option) => {
      return (
        <div key={option.id}>
          <OptionSelect
            option={option}
            current={options[option.id]}
            updateOption={setOptionValue}
            title={option.title ?? ""}
            data-testid="product-options"
            disabled={!!disabled || isAdding}
          />
        </div>
      )
    })}
    <Divider  className="w-stretch"/>
  </div>
)}
</div>

      {/* Flex container for quantity and add-to-cart */}
      <div className="flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex flex-col gap-2 w-1/4">
          <select
            id="quantity-selector"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="bg-[#0033660A] rounded-xl px-6 py-2"
            disabled={isAdding || !inStock || !!disabled}
          >
            {[...Array(100)].map((_, idx) => (
              <option key={idx + 1} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!!disabled || isAdding || !isValidVariant || !inStock}
          className="w-full h-10 flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 font-medium"
          isLoading={isAdding}
          data-testid="add-product-button"
        >
          {isAdding ? "Adding..." : "Add to cart"}
        </Button>
      </div>

      <MobileActions
        product={product}
        variant={selectedVariant}
        options={options}
        updateOptions={setOptionValue}
        inStock={inStock}
        handleAddToCart={handleAddToCart}
        isAdding={isAdding}
        show={!inView}
        optionsDisabled={!!disabled || isAdding}
      />
    </div>
  )
}
