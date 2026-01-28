import { searchPackages } from "../../api/queries/searchPackages";
import type { PackageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderData {
  searchResults: PackageSummary[];
}

export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SearchLoaderData> {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  if (!query) {
    throw new Error("No query provided");
  }

  const packages = await searchPackages(query);
  return {
    searchResults: packages,
  };
}
