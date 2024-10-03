import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface OrbProps {
  id: number;
  currentActive: number;
  setActive: (id: number) => void;
}

const Orb: React.FC<OrbProps> = ({ id, currentActive, setActive }) => {
  const isActive = id == currentActive;
  return (
    <div className="flex w-fit flex-row items-center">
      <Button
        className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-lime-500 p-0 hover:bg-lime-600 max-md:h-8 max-md:w-8"
        onClick={() => setActive(id)}
      >
        {isActive && (
          <div className="h-10 w-10 rounded-full bg-lime-100 max-md:h-7 max-md:w-7"></div>
        )}
        <span
          className={`absolute text-center text-xl font-semibold max-md:text-sm ${
            isActive ? "text-lime-500" : "text-lime-400"
          }`}
        >
          {id}
        </span>
      </Button>
      {id < 6 && (
        <div className="mx-auto bg-lime-500 px-3 py-1.5 max-md:px-2 max-md:py-1"></div>
      )}
    </div>
  );
};

const OrderPath: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentActive = Number(searchParams.get("page") ?? 1);

  const setActiveOrb = (id: number) => {
    router.push(`/process-lahan?page=${id}`);
  };
  return (
    <div className="flex justify-center bg-white">
      {/* Render 6 Orbs */}
      {Array.from({ length: 6 }, (_, index) => (
        <Orb
          key={index + 1}
          id={index + 1}
          currentActive={currentActive}
          setActive={setActiveOrb}
        />
      ))}
    </div>
  );
};

export default OrderPath;
