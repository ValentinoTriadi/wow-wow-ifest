import { StaticImageData } from "next/image";

// Used to Translate any data to StaticImageData
export function StaticImageTranslator(data: any | string) {
  const translatedData: StaticImageData = data as StaticImageData;
  return translatedData;
}
