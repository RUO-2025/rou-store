import { clx } from "@medusajs/ui"
import React, { type JSX } from "react"
import {
  UseHitsProps,
  useHits,
  useSearchBox,
} from "react-instantsearch"
import { ProductHit } from "../hit"
import ShowAll from "../show-all"

type HitsProps<THit> = React.ComponentProps<"div"> &
  UseHitsProps & {
    hitComponent: (props: { hit: THit }) => JSX.Element
  }

const ProductCard = ({ hit }: { hit: ProductHit }) => {
  return (
    <div className="flex flex-col items-center text-center min-h-[160px] sm:min-h-[200px]">
      <div className="w-full mb-2">
        <img 
          src={hit.thumbnail} 
          alt={hit.title}
          className="w-36 h-36 sm:w-48 sm:h-48 mx-auto object-contain"
        />
      </div>
      <div className="w-full">
        <h3 className="text-sm sm:text-base text-gray-600 truncate">
          {hit.title}
        </h3>
      </div>
    </div>
  )
}

const Hits = ({
  hitComponent: Hit,
  className,
  ...props
}: HitsProps<ProductHit>) => {
  const { query } = useSearchBox()
  const { hits } = useHits(props)

  return (
    <div
      className={clx(
        "transition-[height,opacity] duration-300 ease-in-out w-full mb-1",
        className,
        {
          "opacity-100": !!query,
          "opacity-0": !query && !hits.length,
        }
      )}
    >
      <div
        className="max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent p-2 sm:p-4"
        data-testid="search-results"
      >
        <div className="overflow-x-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 w-full sm:w-[768px] mx-auto">
            {hits.map((hit, index) => (
              <li
                key={index}
                className="list-none bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="p-4 sm:p-6">
                  <Hit hit={hit as unknown as ProductHit} />
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hits