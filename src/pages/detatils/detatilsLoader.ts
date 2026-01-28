import { getPackage } from "../../api/queries/getPackage";
import type { Params } from "react-router-dom";
import type { PackageDetails } from "../../api/types/packageDetails";

interface LoaderArgs {
  params: Params;
}

export interface DetatilsLoaderResult {
  detailsData: PackageDetails;
}

export async function detatilsLoader({
  params,
}: LoaderArgs): Promise<DetatilsLoaderResult> {
  const { name } = params;
  if (!name) {
    throw new Error("No package name provided");
  }

  const detailsData = await getPackage(name);
  return {
    detailsData,
  };
}
