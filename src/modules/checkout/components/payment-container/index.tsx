// @ts-nocheck
import { Radio as RadioGroupOption } from "@headlessui/react"
import { Text, clx } from "@medusajs/ui"
import React, { useContext, useMemo, type JSX } from "react"

import Radio from "@modules/common/components/radio"

import { isManual } from "@lib/constants"
import SkeletonCardDetails from "@modules/skeletons/components/skeleton-card-details"
import { CardElement } from "@stripe/react-stripe-js"
import { StripeCardElementOptions } from "@stripe/stripe-js"
import PaymentTest from "../payment-test"
import { StripeContext } from "../payment-wrapper/stripe-wrapper"
import PaymentButton from "../payment-button"
import Spinner from "@modules/common/icons/spinner"

type PaymentContainerProps = {
  paymentMethods: any[]
  loading?: boolean
  cart: any
  paymentProviderId: string
  selectedPaymentOptionId: string | null
  disabled?: boolean
  paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>
  children?: React.ReactNode
}

// const PaymentContainer: React.FC<PaymentContainerProps> = ({
//   loading,
//   cart,
//   paymentProviderId,
//   selectedPaymentOptionId,
//   paymentInfoMap,
//   disabled = false,
//   children,
// }) => {
//   const isDevelopment = process.env.NODE_ENV === "development"
//   const isSelected = selectedPaymentOptionId === paymentProviderId

//   return (
//     <RadioGroupOption
//       key={paymentProviderId}
//       value={paymentProviderId}
//       disabled={disabled}
//       className={clx(
//         "flex flex-col gap-y-4 p-6 border transition-all duration-200",
//         {
//           "border-green-500 bg-gray-100": isSelected,
//           "border-gray-300 bg-white hover:shadow-md": !isSelected,
//         }
//       )}
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-x-4">
//           <Radio checked={isSelected} />
//           <Text className="font-semibold text-lg">
//             {paymentInfoMap[paymentProviderId]?.title || paymentProviderId}
//           </Text>
//         </div>
//         <div className="flex items-center gap-x-2">
//           <span>{paymentInfoMap[paymentProviderId]?.icon}</span>
//           {loading && isSelected && <span><Spinner /></span>}
//         </div>
//       </div>
//       {isSelected && !loading && (
//         <div className="text-gray-600 text-sm">
//           <p>
//             Complete your purchase securely with this payment method. After clicking
//             'Pay', you'll be redirected to the appropriate payment gateway.
//           </p>
//         </div>
//       )}
//       {children}
//       {isSelected && !loading && (
//         <div className="mt-4">
//           <PaymentButton cart={cart} data-testid="submit-order-button" />
//         </div>
//       )}
//     </RadioGroupOption>
//   )
// }

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentMethods,
  loading,
  cart,
  paymentProviderId,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false,
  children,
}) => {
  const isSelected = selectedPaymentOptionId === paymentProviderId

  return (
    <RadioGroupOption
      key={paymentProviderId}
      value={paymentProviderId}
      disabled={disabled}
      className={clx(
        "flex flex-col gap-y-4 p-6 border transition-all duration-200",
        {
          "border-green-500 bg-gray-100": isSelected,
          "border-gray-300 bg-white hover:shadow-md": !isSelected,
          "rounded-t-lg": paymentProviderId === paymentMethods[0].id, // First item
          "rounded-b-lg": paymentProviderId === paymentMethods[paymentMethods.length - 1].id, // Last item
        }
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Radio checked={isSelected} />
          <Text className="font-semibold text-lg">
            {paymentInfoMap[paymentProviderId]?.title || paymentProviderId}
          </Text>
        </div>
        <div className="flex items-center gap-x-2">
          <span>{paymentInfoMap[paymentProviderId]?.icon}</span>
          {loading && isSelected && <span><Spinner /></span>}
        </div>
      </div>
      {isSelected && !loading && (
        <div className="text-gray-600 text-sm">
          <p>
            Complete your purchase securely with this payment method. After clicking
            'Pay', you'll be redirected to the appropriate payment gateway.
          </p>
        </div>
      )}
      {children}
      {isSelected && !loading && (
        <div className="mt-4">
          <PaymentButton cart={cart} data-testid="submit-order-button" />
        </div>
      )}
    </RadioGroupOption>
  )
}


export default PaymentContainer

export const StripeCardContainer = ({
  paymentMethods,
  loading,
  cart,
  paymentProviderId,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false,
  setCardBrand,
  setError,
  setCardComplete,
}: Omit<PaymentContainerProps, "children"> & {
  setCardBrand: (brand: string) => void
  setError: (error: string | null) => void
  setCardComplete: (complete: boolean) => void
}) => {
  const stripeReady = useContext(StripeContext)

  const useOptions: StripeCardElementOptions = useMemo(() => {
    return {
      style: {
        base: {
          fontFamily: "Inter, sans-serif",
          color: "#424270",
          "::placeholder": {
            color: "rgb(107 114 128)",
          },
        },
      },
      classes: {
        base: "pt-3 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover transition-all duration-300 ease-in-out",
      },
    }
  }, [])

  return (
    <PaymentContainer
      paymentMethods={paymentMethods}
      loading={loading}
      cart={cart}
      paymentProviderId={paymentProviderId}
      selectedPaymentOptionId={selectedPaymentOptionId}
      paymentInfoMap={paymentInfoMap}
      disabled={disabled}
    >
      {selectedPaymentOptionId === paymentProviderId &&
        (stripeReady ? (
          <div className="my-4 transition-all duration-150 ease-in-out">
            <Text className="txt-medium-plus text-ui-fg-base mb-1">
              Enter your card details:
            </Text>
            <CardElement
              options={useOptions as StripeCardElementOptions}
              onChange={(e) => {
                setCardBrand(
                  e.brand && e.brand.charAt(0).toUpperCase() + e.brand.slice(1)
                )
                setError(e.error?.message || null)
                setCardComplete(e.complete)
              }}
            />
            {/* <div>
              <PaymentButton cart={cart} data-testid="submit-order-button" />
            </div> */}
          </div>
        ) : (
          !loading && <SkeletonCardDetails />
        ))}
    </PaymentContainer>
  )
}
