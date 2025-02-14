import { HttpTypes } from "@medusajs/types"
import Input from "@modules/common/components/input"
import React, { useState } from "react"
import CountrySelect from "../country-select"
import Checkbox from "@modules/common/components/checkbox"

const BillingAddress = ({ cart }: { cart: HttpTypes.StoreCart | null }) => {
  const [formData, setFormData] = useState<any>({
    "billing_address.first_name": cart?.billing_address?.first_name || "",
    "billing_address.last_name": cart?.billing_address?.last_name || "",
    "billing_address.address_1": cart?.billing_address?.address_1 || "",
    "billing_address.company": cart?.billing_address?.company || "",
    "billing_address.postal_code": cart?.billing_address?.postal_code || "",
    "billing_address.city": cart?.billing_address?.city || "",
    "billing_address.country_code": cart?.billing_address?.country_code || "US",
    "billing_address.province": cart?.billing_address?.province || "",
    "billing_address.phone": cart?.billing_address?.phone || "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="space-y-4">
        {/* Country Select */}
        <CountrySelect
          aria-label="Country"
          name="billing_address.country_code"
          autoComplete="country"
          region={cart?.region}
          value={formData["billing_address.country_code"]}
          onChange={handleChange}
          required
          data-testid="billing-country-select"
        />

        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              label="First name"
              type="text"
              name="billing_address.first_name"
              value={formData["billing_address.first_name"]}
              onChange={handleChange}
              required
              data-testid="billing-first-name-input"
            />
          </div>
          <div>
            <Input
              label="Last name"
              type="text"
              name="billing_address.last_name"
              value={formData["billing_address.last_name"]}
              onChange={handleChange}
              required
              data-testid="billing-last-name-input"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <Input
            label="Company"
            type="text"
            name="billing_address.company"
            value={formData["billing_address.company"]}
            onChange={handleChange}
            data-testid="billing-company-input"
          />
        </div>

        {/* Address */}
        <div>
          <Input
            label="Address"
            type="text"
            name="billing_address.address_1"
            value={formData["billing_address.address_1"]}
            onChange={handleChange}
            required
            data-testid="billing-address-input"
          />
        </div>

        {/* Apartment, Suite, etc. */}
        <div>
          <Input
            label="Apartment, suite, etc."
            type="text"
            name="billing_address.address_2"
            value={formData["billing_address.address_2"]}
            onChange={handleChange}
          />
        </div>

        {/* City, State, Postal Code small screens */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <Input
              label="City"
              type="text"
              name="billing_address.city"
              value={formData["billing_address.city"]}
              onChange={handleChange}
              required
              data-testid="billing-city-input"
            />
          </div>
          <div>
            <Input
              label="State / Province"
              type="text"
              name="billing_address.province"
              value={formData["billing_address.province"]}
              onChange={handleChange}
              required
              data-testid="billing-province-input"
            />
          </div>
          <div>
            <Input
              label="Postal Code"
              type="text"
              name="billing_address.postal_code"
              value={formData["billing_address.postal_code"]}
              onChange={handleChange}
              required
              data-testid="billing-postal-input"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <Input
            label="Phone"
            type="tel"
            name="billing_address.phone"
            value={formData["billing_address.phone"]}
            onChange={handleChange}
            data-testid="billing-phone-input"
          />
        </div>
      </div>
    </div>
  )
}

export default BillingAddress
