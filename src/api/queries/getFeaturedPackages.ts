import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = ["react", "typescript", "redux", "vite"];

export async function getFeaturedPackages() {
  const packageDetailsPromises = FEATURED_PACKAGES.map(async (pkg) => {
    const response = await fetch(`https://registry.npmjs.org/${pkg}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch details for package: ${pkg}`);
    }

    return response.json();
  });
  const data = await Promise.all(packageDetailsPromises);
  return data as PackageDetails[];
}
