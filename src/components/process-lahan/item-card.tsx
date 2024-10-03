import Image from "next/image";
import { Card, CardHeader, CardTitle } from "../ui/card";
import type { StaticImageData } from "next/image";
import LocationPointer from "public/images/locationpointer.svg";
import CoinLogo from "public/images/coin.svg";
import { StaticImageTranslator } from "@/utilities/static-image-translator";
import { formatPrice } from "@/utilities/price_formator";

export interface CardGeneralProps {
  name: string;
  price: number;
  location: string;
  image: StaticImageData;
}

const ItemCard: React.FC<CardGeneralProps> = ({
  name,
  price,
  location,
  image,
}) => {
  return (
    <Card className="flex flex-col p-7">
      <Image
        height={100}
        width={100}
        src={image}
        alt="Card Images"
        className="w-full"
      ></Image>
      <CardHeader className="pl-0">
        <CardTitle className="items-baseline">{name}</CardTitle>
      </CardHeader>
      <ul className="text-sm max-md:text-xs">
        <li className="flex translate-x-1 items-center gap-x-3">
          <Image
            src={StaticImageTranslator(LocationPointer)}
            alt="Location Pointer"
          ></Image>
          <p>{location}</p>
        </li>
        <li className="flex items-center gap-x-3">
          <Image src={StaticImageTranslator(CoinLogo)} alt="Coin Icon"></Image>
          <p>Rp {formatPrice(price)}</p>
        </li>
      </ul>
    </Card>
  );
};

export default ItemCard;
