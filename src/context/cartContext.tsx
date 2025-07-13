"use client";
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react"

interface CartContextType {
  isCartOpen: boolean
  setIsCartOpen: Dispatch<SetStateAction<boolean>>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cartState = useContext(CartContext)
  if (!cartState) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return cartState;
}
