"use client"

import { addToCart } from "@lib/data/cart"
import { Button } from "@medusajs/ui"
import { useState } from "react"

type AddToCartButtonProps = {
  variantId: string
  countryCode: string // Directly pass the countryCode instead of region data
}

export default function AddToCartButton({ variantId, countryCode }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    if (!variantId || !countryCode) {
      console.error("Variant ID or Country Code is missing.")
      return
    }

    setIsAdding(true)

    try {
      await addToCart({
        variantId,
        quantity: 1,
        countryCode, // Use selected countryCode
      })
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <Button
      onClick={handleAddToCart}
      variant="primary"
      className="w-full h-10"
      isLoading={isAdding}
      disabled={isAdding}
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  )
}
