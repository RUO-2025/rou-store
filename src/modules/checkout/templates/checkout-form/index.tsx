import { listCartShippingMethods } from "@lib/data/fulfillment"
import { listCartPaymentMethods } from "@lib/data/payment"
import { HttpTypes } from "@medusajs/types"
import Addresses from "@modules/checkout/components/addresses"
import Payment from "@modules/checkout/components/payment"
import Review from "@modules/checkout/components/review"
import Shipping from "@modules/checkout/components/shipping"

export default async function CheckoutForm({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) {
  if (!cart) {
    return null
  }

  const shippingMethods = await listCartShippingMethods(cart.id)
  // const paymentMethods = await listCartPaymentMethods(cart.region?.id ?? "")

  const paymentMethods = [
    { id: 'pp_stripe_stripe', is_enabled: true },
    { id: 'pp_system_default', is_enabled: true },
    { id: 'pp_zelle_default', is_enabled: true },
    { id: 'pp_crypto_default', is_enabled: true },
  ]

  if (!shippingMethods || !paymentMethods) {
    return null
  }

  // console.log("shipping methods", shippingMethods)
  // console.log("payment methods", paymentMethods)

  return (
    <div className="w-full grid grid-cols-1 gap-y-8">
      <Addresses cart={cart} customer={customer} />

      <Shipping cart={cart} availableShippingMethods={shippingMethods} />

      <Payment cart={cart} availablePaymentMethods={paymentMethods} />

      {/* <Review cart={cart} /> */}
    </div>
  )
}
