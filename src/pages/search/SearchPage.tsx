import { useLoaderData } from "react-router-dom";
import type { SearchLoaderData } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderData;

  const renderedResults = searchResults.map((pkg) => (
    <PackageListItem key={pkg.name} pack={pkg} />
  ));

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="spact-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}
