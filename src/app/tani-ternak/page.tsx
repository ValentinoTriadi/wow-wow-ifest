import Navbar from "@/components/tani-ternak/navbar";
import DaftarPekerja from "@/components/tani-ternak/laporan-pekerja";
import LahanHero from "@/components/tani-ternak/lahan-hero";
import Tanam_Photo from "../../../../public/images/dummyphoto/tani1.png";
import KondisiLahan from "@/components/tani-ternak/kondisi-lahan";

const taniternak = async () => {
    const nama_lahan = "Ladang Padi";

    return (
        <div className="bg-[#f3f3f3] text-[#505050]">
            <Navbar/>
            <div className="p-10 max-md:p-5 gap-y-7 flex flex-col">
                <LahanHero nama_lahan={nama_lahan} foto_lahan={Tanam_Photo}/>
                <KondisiLahan/>
                <DaftarPekerja/>
            </div>
        </div>
    );
};

export default taniternak;