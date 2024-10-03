import React from "react";
import type { CardGeneralProps } from "./item-card";
import ItemCard from "./item-card";
import { Button } from "../ui/button";

interface ItemSelectionsProps {
  title: string;
  data: CardGeneralProps[];
  nextpage: () => void;
  opendetail: (state: boolean) => void;
}

const ItemSelections: React.FC<ItemSelectionsProps> = ({
  title,
  data,
  nextpage,
  opendetail,
}) => {
  return (
    <div className="mt-14 flex flex-col justify-center gap-y-10 max-md:mt-7">
      <h1 className="w-full rounded-2xl border border-solid border-lime-500 py-3 text-center font-sans text-xl font-medium text-lime-500 max-md:py-1.5 max-md:text-sm">
        {title}
      </h1>

      <div className="grid grid-cols-2 gap-x-7 gap-y-4">
        {data?.map((cardData, index) => (
          <button
            key={index}
            onClick={() => {
              console.log("Button clicked!"); // Add log to check
              opendetail(true); // Trigger the function to change state
            }}
          >
            <ItemCard
              name={cardData.name}
              price={cardData.price}
              location={cardData.location}
              image={cardData.image}
            />
          </button>
        ))}
      </div>

      <Button
        className="rounded-xl bg-lime-500 py-5 text-white"
        onClick={nextpage}
      >
        NEXT
      </Button>
    </div>
  );
};

export default ItemSelections;
