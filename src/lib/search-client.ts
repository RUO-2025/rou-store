import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import { SearchClient } from "instantsearch.js";

const endpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "https://getmeilimeilisearchv190-production-dc02.up.railway.app";

const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "xji5cki34sgwdk2ky3usb0ei4sqhq5w6";

const ms = instantMeiliSearch("https://meilisearch-t84ocokkcgskgcc0ogk48w8s.mersate.com", "8VhrnovVY2y59lqO1icIEtw3vUPpDCox")
export const searchClient = (ms.searchClient as unknown) as SearchClient

export const SEARCH_INDEX_NAME =
  process.env.NEXT_PUBLIC_INDEX_NAME 
