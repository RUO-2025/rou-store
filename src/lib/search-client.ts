import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import { SearchClient } from "instantsearch.js";

const endpoint = process.env.NEXT_PUBLIC_SEARCH_ENDPOINT || "https://getmeilimeilisearchv190-production-d63c.up.railway.app";

const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "h73yzvic1wjxfv1o0hb6csnt1i3nvksr";

const ms = instantMeiliSearch("https://ms-ba238a36478c-18696.fra.meilisearch.io", "5f2852ead3ef2f89ad535218652841a2882dcdd0")
export const searchClient = (ms.searchClient as unknown) as SearchClient

export const SEARCH_INDEX_NAME =
  process.env.NEXT_PUBLIC_INDEX_NAME 