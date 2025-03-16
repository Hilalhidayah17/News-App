import { Metadata } from "next";

export async function generateMetadataWrapper(
  query: string
): Promise<Metadata> {
  return {
    title: query,
    description: query,
  };
}
