import React from "react";

interface CategoryCapsuleInterface {
  name: string;
}

const CategoryCapsule: React.FC<CategoryCapsuleInterface> = ({ name }) => {
  return (
    <div className="items-center rounded-xl bg-lime-50 w-fit h-fit p-2 text-center">
      <h4 className="text-sm text-[#505050]">{name}</h4>
    </div>
  );
};

export default CategoryCapsule;
