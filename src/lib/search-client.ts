import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import { SearchClient } from "instantsearch.js";

const endpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "https://getmeilimeilisearchv190-production-dc02.up.railway.app";

const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "xji5cki34sgwdk2ky3usb0ei4sqhq5w6";

const ms = instantMeiliSearch("https://getmeilimeilisearchv190-production-dc02.up.railway.app", "xji5cki34sgwdk2ky3usb0ei4sqhq5w6")
export const searchClient = (ms.searchClient as unknown) as SearchClient

export const SEARCH_INDEX_NAME =
  process.env.NEXT_PUBLIC_INDEX_NAME 
