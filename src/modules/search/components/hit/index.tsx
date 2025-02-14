import { Container, Text } from "@medusajs/ui"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: HttpTypes.StoreProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

type HitProps = {
  hit: ProductHit
}

const Hit = ({ hit }: HitProps) => {
  return (
    <LocalizedClientLink
      href={`/products/${hit.handle}`}
      data-testid="search-result"
    >
<div
  key={hit.id}
  className="flex sm:flex-col gap-1 w-full p-2 bg-white rounded-lg items-center sm:justify-center"
>
  <Thumbnail 
    thumbnail={hit.thumbnail}
    size="square"
    className="group h-16 w-16 sm:h-[200px] sm:w-[200px] !border-0" // Added !border-0
  />
  <div className="flex flex-col justify-between group py-1">
    <div className="flex flex-col">
      <Text
        className="text-ui-fg-subtle"
        data-testid="search-result-title"
      >
        {hit.title}
      </Text>
    </div>
  </div>
</div>
    </LocalizedClientLink>
  )
}

export default Hit
