import Link from "next/link";
import { Button } from "../ui/button";

export const LinkButton: React.FC<{ text: string; api: string }> = ({ text, api }) => {
  return (
    <Link href={api}>
      <Button className=" px-32 bg-lime-500 text-2xl font-bold max-md:w-40 max-md:text-lg">
        {text}
      </Button>
    </Link>
  );
};



