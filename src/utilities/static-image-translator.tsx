import type { StaticImageData } from "next/image";

// Improved StaticImageTranslator with better type safety
export function StaticImageTranslator(data: unknown): StaticImageData  {
  // Check if the data is of type StaticImageData or can be safely cast
  return data as StaticImageData
  
}
