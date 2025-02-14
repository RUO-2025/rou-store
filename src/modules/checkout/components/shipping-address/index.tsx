// @ts-nocheck

// import { HttpTypes } from "@medusajs/types"
// import { Container } from "@medusajs/ui"
// import Checkbox from "@modules/common/components/checkbox"
// import Input from "@modules/common/components/Input"
// import { mapKeys } from "lodash"
// import React, { useEffect, useMemo, useState } from "react"
// import AddressSelect from "../address-select"
// import CountrySelect from "../country-select"

// const ShippingAddress = ({
//   customer,
//   cart,
//   checked,
//   onChange,
// }: {
//   customer: HttpTypes.StoreCustomer | null
//   cart: HttpTypes.StoreCart | null
//   checked: boolean
//   onChange: () => void
// }) => {
//   const [formData, setFormData] = useState<Record<string, any>>({
//     "shipping_address.first_name": cart?.shipping_address?.first_name || "",
//     "shipping_address.last_name": cart?.shipping_address?.last_name || "",
//     "shipping_address.address_1": cart?.shipping_address?.address_1 || "",
//     "shipping_address.company": cart?.shipping_address?.company || "",
//     "shipping_address.postal_code": cart?.shipping_address?.postal_code || "",
//     "shipping_address.city": cart?.shipping_address?.city || "",
//     "shipping_address.country_code": cart?.shipping_address?.country_code || "",
//     "shipping_address.province": cart?.shipping_address?.province || "",
//     "shipping_address.phone": cart?.shipping_address?.phone || "",
//     email: cart?.email || "",
//   })

//   const countriesInRegion = useMemo(
//     () => cart?.region?.countries?.map((c) => c.iso_2),
//     [cart?.region]
//   )

//   // check if customer has saved addresses that are in the current region
//   const addressesInRegion = useMemo(
//     () =>
//       customer?.addresses.filter(
//         (a) => a.country_code && countriesInRegion?.includes(a.country_code)
//       ),
//     [customer?.addresses, countriesInRegion]
//   )

//   const setFormAddress = (
//     address?: HttpTypes.StoreCartAddress,
//     email?: string
//   ) => {
//     address &&
//       setFormData((prevState: Record<string, any>) => ({
//         ...prevState,
//         "shipping_address.first_name": address?.first_name || "",
//         "shipping_address.last_name": address?.last_name || "",
//         "shipping_address.address_1": address?.address_1 || "",
//         "shipping_address.company": address?.company || "",
//         "shipping_address.postal_code": address?.postal_code || "",
//         "shipping_address.city": address?.city || "",
//         "shipping_address.country_code": address?.country_code || "",
//         "shipping_address.province": address?.province || "",
//         "shipping_address.phone": address?.phone || "",
//       }))

//     email &&
//       setFormData((prevState: Record<string, any>) => ({
//         ...prevState,
//         email: email,
//       }))
//   }

//   useEffect(() => {
//     // Ensure cart is not null and has a shipping_address before setting form data
//     if (cart && cart.shipping_address) {
//       setFormAddress(cart?.shipping_address, cart?.email)
//     }

//     if (cart && !cart.email && customer?.email) {
//       setFormAddress(undefined, customer.email)
//     }
//   }, [cart]) // Add cart as a dependency

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLInputElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   return (
//     <>
//       {customer && (addressesInRegion?.length || 0) > 0 && (
//         <Container className="mb-6 flex flex-col gap-y-4 p-5">
//           <p className="text-small-regular">
//             {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
//           </p>
//           <AddressSelect
//             addresses={customer.addresses}
//             addressInput={
//               mapKeys(formData, (_, key) =>
//                 key.replace("shipping_address.", "")
//               ) as HttpTypes.StoreCartAddress
//             }
//             onSelect={setFormAddress}
//           />
//         </Container>
//       )}
//       <div className="grid grid-cols-2 gap-4">
//         <Input
//           label="First name"
//           name="shipping_address.first_name"
//           autoComplete="given-name"
//           value={formData["shipping_address.first_name"]}
//           onChange={handleChange}
//           required
//           data-testid="shipping-first-name-Input"
//         />
//         <Input
//           label="Last name"
//           name="shipping_address.last_name"
//           autoComplete="family-name"
//           value={formData["shipping_address.last_name"]}
//           onChange={handleChange}
//           required
//           data-testid="shipping-last-name-Input"
//         />
//         <Input
//           label="Address"
//           name="shipping_address.address_1"
//           autoComplete="address-line1"
//           value={formData["shipping_address.address_1"]}
//           onChange={handleChange}
//           required
//           data-testid="shipping-address-Input"
//         />
//         <Input
//           label="Company"
//           name="shipping_address.company"
//           value={formData["shipping_address.company"]}
//           onChange={handleChange}
//           autoComplete="organization"
//           data-testid="shipping-company-Input"
//         />
//         <Input
//           label="Postal code"
//           name="shipping_address.postal_code"
//           autoComplete="postal-code"
//           value={formData["shipping_address.postal_code"]}
//           onChange={handleChange}
//           required
//           data-testid="shipping-postal-code-Input"
//         />
//         <Input
//           label="City"
//           name="shipping_address.city"
//           autoComplete="address-level2"
//           value={formData["shipping_address.city"]}
//           onChange={handleChange}
//           required
//           data-testid="shipping-city-Input"
//         />
//         <CountrySelect
//           name="shipping_address.country_code"
//           autoComplete="country"
//           region={cart?.region}
//           value={formData["shipping_address.country_code"]}
//           onChange={handleChange}
//           required
//           data-testid="shipping-country-select"
//         />
//         <Input
//           label="State / Province"
//           name="shipping_address.province"
//           autoComplete="address-level1"
//           value={formData["shipping_address.province"]}
//           onChange={handleChange}
//           data-testid="shipping-province-Input"
//         />
//       </div>
//       <div className="my-8">
//         <Checkbox
//           label="Billing address same as shipping address"
//           name="same_as_billing"
//           checked={checked}
//           onChange={onChange}
//           data-testid="billing-address-checkbox"
//        />
//       </div>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <Input
//           label="Email"
//           name="email"
//           type="email"
//           title="Enter a valid email address."
//           autoComplete="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           data-testid="shipping-email-Input"
//         />
//         <Input
//           label="Phone"
//           name="shipping_address.phone"
//           autoComplete="tel"
//           value={formData["shipping_address.phone"]}
//           onChange={handleChange}
//           data-testid="shipping-phone-Input"
//         />
//       </div>
//     </>
//   )
// }

// export default ShippingAddress


"use client"

import type { HttpTypes } from "@medusajs/types"
import type React from "react"
import Checkbox from "@modules/common/components/checkbox"
import CountrySelect from "../country-select"
import Input from "@modules/common/components/input"
import { useState } from "react"

const ShippingAddress = ({
  customer,
  cart,
  checked,
  terms,
  toggleTerms,
  onChange,
}: {
  customer: HttpTypes.StoreCustomer | null
  cart: HttpTypes.StoreCart | null
  checked: boolean
  terms: boolean
  toggleTerms: () => void
  onChange: () => void
}) => {
  const [formData, setFormData] = useState({
    "shipping_address.first_name": cart?.shipping_address?.first_name || "",
    "shipping_address.last_name": cart?.shipping_address?.last_name || "",
    "shipping_address.address_1": cart?.shipping_address?.address_1 || "",
    "shipping_address.address_2": cart?.shipping_address?.address_2 || "",
    "shipping_address.company": cart?.shipping_address?.company || "",
    "shipping_address.postal_code": cart?.shipping_address?.postal_code || "",
    "shipping_address.city": cart?.shipping_address?.city || "",
    "shipping_address.country_code": cart?.shipping_address?.country_code || "US",
    "shipping_address.province": cart?.shipping_address?.province || "",
    "shipping_address.phone": cart?.shipping_address?.phone || "",
    email: cart?.email || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }



  return (
    <div className="max-w-[800px] mx-auto">
      {/* <h1 className="text-2xl font-medium mb-6">Shipping Address</h1> */}
      <div className="space-y-4">
        <CountrySelect
          aria-label="Country"
          name="shipping_address.country_code"
          autoComplete="country"
          region={cart?.region}
          value={formData["shipping_address.country_code"]}
          onChange={handleChange}
          required
          data-testid="shipping-country-select"
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              label="First name"
              type="text"
              name="shipping_address.first_name"
              value={formData["shipping_address.first_name"]}
              onChange={handleChange}
              data-testid="billing-first-name-input"
              // className="w-full p-3 bg-[#f5f5f5] rounded border-0"
              required
            />
          </div>
          <div>
            <Input
              label="Last name"
              type="text"
              name="shipping_address.last_name"
              value={formData["shipping_address.last_name"]}
              onChange={handleChange}
              data-testid="billing-last-name-input"
              // className="w-full p-3 bg-[#f5f5f5] rounded border-0"
              required
            />
          </div>
        </div>

        <div>
          <Input
            label="Company"
            type="text"
            name="shipping_address.company"
            value={formData["shipping_address.company"]}
            onChange={handleChange}
            data-testid="billing-company-input"
            // className="w-full p-3 bg-[#f5f5f5] rounded border-0"
          />
        </div>

        <div>
          <Input
            label="Address"
            type="text"
            name="shipping_address.address_1"
            value={formData["shipping_address.address_1"]}
            onChange={handleChange}
            data-testid="billing-address-input"
            // className="w-full p-3 bg-[#f5f5f5] rounded border-0"
            required
          />
        </div>

        <div>
          {/* <label className="block text-sm mb-2">Apartment, suite, etc. (optional)</label> */}
          <Input
            label="Apartment, suite, etc."
            type="text"
            name="shipping_address.address_2"
            value={formData["shipping_address.address_2"]}
            onChange={handleChange}
            // className="w-full p-3 bg-[#f5f5f5] rounded border-0"
          />
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <Input
              label="City"
              type="text"
              name="shipping_address.city"
              value={formData["shipping_address.city"]}
              onChange={handleChange}
              // className="w-full p-3 bg-[#f5f5f5] rounded border-0"
              required
            />
          </div>
          <div className="relative">
            <Input
              label="State / Province"
              type="text"
              name="shipping_address.province"
              value={formData["shipping_address.province"]}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              label="ZIP code"
              type="text"
              name="shipping_address.postal_code"
              value={formData["shipping_address.postal_code"]}
              onChange={handleChange}
              data-testid="billing-postal-input"
              required
            />
          </div>
        </div>

        <div>
          <Input
            label="Phone"
            type="tel"
            name="shipping_address.phone"
            autoComplete="tel"
            value={formData["shipping_address.phone"]}
            onChange={handleChange}
            data-testid="shipping-phone-Input"
          />
        </div>

        <div>
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <Checkbox
              checked={terms}
              onChange={toggleTerms}
              name="terms"
              label= <div>
                        By making this purchase, I confirm I am at least 21 years old and a licensed/qualified professional. These
                        products are for professional research purposes only, not for human/animal consumption, food additives,
                        drugs, or household chemicals. Power Peptides LLC assumes no responsibility for use and provides no
                        application guidance.   {" "}
                        <a href="#" className="text-[#008080] hover:underline">
                          Terms & Conditions
                        </a>
                      </div>
              required
              data-testid="terms-checkbox"
            />
          </div>

          <div className="flex items-center gap-2">
          <Checkbox
            label="Billing address same as shipping address"
            name="same_as_billing"
            checked={checked}
            onChange={onChange}
            data-testid="billing-address-checkbox"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingAddress

