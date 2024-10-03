import KondisiObj, { KondisiLahanEnum } from "./objectkondisi";
import air from "public/images/air.svg";
import plant from "public/images/plant.svg";
import hama from "public/images/hama.svg";
import { StaticImageTranslator } from "../../utilities/static-image-translator";

const KondisiLahan = () => {
  return (
    <div className="flex gap-y-5 flex-col">
      <h2 className="text-lg font-medium">Kondisi Lahan</h2>
      <ul className="flex gap-x-5">
        <li>
          <KondisiObj
            name="Pengairan"
            image={StaticImageTranslator(air)}
            condition={KondisiLahanEnum.Baik}
          ></KondisiObj>
        </li>
        <li>
          <KondisiObj
            name="Kesuburan"
            image={StaticImageTranslator(plant)}
            condition={KondisiLahanEnum.Cukup}
          ></KondisiObj>
        </li>
        <li>
          <KondisiObj
            name="Hama"
            image={StaticImageTranslator(hama)}
            condition={KondisiLahanEnum.Bahaya}
          ></KondisiObj>
        </li>
      </ul>
    </div>
  );
};

export default KondisiLahan;
