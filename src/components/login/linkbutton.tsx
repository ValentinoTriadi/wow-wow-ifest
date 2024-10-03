import Link from "next/link";
import { Button } from "../ui/button";

export const LinkButton: React.FC<{ text: string; api: string }> = ({
  text,
  api,
}) => {
  return (
    <Link href={api} className="w-full">
      <Button className="w-full bg-lime-500 px-32 text-2xl font-bold hover:bg-lime-600 max-md:w-40 max-md:text-lg">
        {text}
      </Button>
    </Link>
  );
};
