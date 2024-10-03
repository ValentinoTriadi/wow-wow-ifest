import Image from "next/image";
import type { StaticImageData } from "next/image";

export enum KondisiLahanEnum {
  Baik,
  Cukup,
  Bahaya,
}

export interface KondisiLahanProps {
  image: StaticImageData;
  name: string;
  condition: KondisiLahanEnum;
}

const KondisiObj: React.FC<KondisiLahanProps> = ({
  image,
  name,
  condition,
}) => {
  const color_condition = [
    {
      kondisi: KondisiLahanEnum.Bahaya,
      label: "Bahaya",
      color: "#ec4903",
    },
    {
      kondisi: KondisiLahanEnum.Cukup,
      label: "Cukup",
      color: "#ecae03",
    },
    {
      kondisi: KondisiLahanEnum.Baik,
      label: "Baik",
      color: "#3b965c",
    },
  ];

  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center">
      <Image src={image} alt="Kondisi Lahan"></Image>
      <h3>{name}</h3>
      <h4 style={{ color: color_condition[condition]?.color }}>
        {color_condition[condition]?.label}
      </h4>
    </div>
  );
};

export default KondisiObj;
