import { retrieveCart } from "@lib/data/cart"
import CartDropdown from "../cart-dropdown"

export default async function CartButton() {
  // Fetch cart data
  const cart = await retrieveCart().catch(() => null)
  
  // Add any necessary error handling
  if (!cart) {
    return <CartDropdown cart={null} />
  }
  
  // Return CartDropdown with cart data
  return <CartDropdown cart={cart} />
}