import { useLoaderData } from "react-router-dom";
import type { DetatilsLoaderResult } from "./detatilsLoader";

export default function DetailsPage() {
  const { detailsData } = useLoaderData() as DetatilsLoaderResult;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold my-4">{detailsData.name}</h1>
      <div>
        <h3 className="text-lg font-bold">Description</h3>
        <div className="p-3 bg-gray-200 rounded">{detailsData.description}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">License</h3>
        <div className="p-3 bg-gray-200 rounded">{detailsData.license}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Author</h3>
        <div className="p-3 bg-gray-200 rounded">
          {detailsData.author?.name}
        </div>
      </div>
    </div>
  );
}
