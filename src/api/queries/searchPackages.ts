import type { PackageSummary } from "../types/packageSummary";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      version: string;
      description: string;
      keywords?: string[];
    };
  }[];
}

export async function searchPackages(query: string): Promise<PackageSummary[]> {
  const response = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${query}&size=10`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch packages");
  }

  const data: SearchResponse = await response.json();

  return data.objects.map(
    ({ package: { name, version, description, keywords } }) => ({
      name,
      version,
      description,
      keywords,
    }),
  );
}
