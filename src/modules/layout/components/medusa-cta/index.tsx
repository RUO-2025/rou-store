import { Text } from "@medusajs/ui"

const MedusaCTA = () => {
  return (
    <Text className="flex w-full flex-row items-center justify-center gap-2 py-2 md:gap-4">
      <a href="/shipping-and-returns" rel="noreferrer" className="text-sm text-gray-600 md:text-base">
        Shipping & Returns
      </a>
      <a href="/terms-and-conditions" rel="noreferrer" className="text-sm text-gray-600 md:text-base">
        Terms & Conditions
      </a>
      <a href="/privacy-policy"  rel="noreferrer" className="text-sm text-gray-600 md:text-base">
        Privacy Policy
      </a>
    </Text>
  )
}

export default MedusaCTA
