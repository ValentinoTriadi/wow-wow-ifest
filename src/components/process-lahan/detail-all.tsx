import { useRouter } from "next/navigation";

export default function DetailALLLahan() {
  const router = useRouter();

  const handlePayment = () => {
    // Navigate to the payment page
    router.push("/payment");
  };

  return (
    <div className="min-h-screen p-6">
      {/* Detail Lahan Section */}
      <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Detail Lahan
        </h2>
        <div className="flex items-center">
          <img
            src="/images/lahan-davis.jpg"
            alt="Lahan Davis"
            className="mr-4 h-24 w-24 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">LAHAN DAVIS</h3>
            <p>Kecamatan Margahayu, Kabupaten Bandung, Jawa Barat</p>
            <p>Rp 500.000,00</p>
            <p>100 m²</p>
            <button className="text-lime-600 underline">Lihat peta</button>
          </div>
        </div>
      </div>

      {/* Detail Bibit Section */}
      <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Detail Bibit
        </h2>
        <div className="flex items-center">
          <img
            src="/images/bibit-jahe-merah.jpg"
            alt="Bibit Jahe Merah"
            className="mr-4 h-24 w-24 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">BIBIT JAHE MERAH</h3>
            <p>Kecamatan Rancaekek, Kabupaten Bandung, Jawa Barat</p>
            <p>Rp 30.000,00 / Kg</p>
            <p>Toko Bibit Pak Sardi</p>
            <p>X 100</p>
          </div>
        </div>
      </div>

      {/* Detail Pekerja Section */}
      <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Detail Pekerja
        </h2>
        <div className="flex items-center">
          <img
            src="/images/pekerja-sumarno.jpg"
            alt="Sumarno"
            className="mr-4 h-24 w-24 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">SUMARNO</h3>
            <p>Kecamatan Rancaekek, Kabupaten Bandung, Jawa Barat</p>
            <p>Rp 45.000,00 / Jam</p>
            <div className="flex items-center">
              <span className="text-yellow-400">★★★★</span>
              <span className="ml-2">4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Perawatan Section */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Detail Perawatan
        </h2>
        <div className="flex items-center">
          <img
            src="/images/pupuk-organik.jpg"
            alt="Pupuk Organik"
            className="mr-4 h-24 w-24 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">PUPUK ORGANIK</h3>
            <p>Kecamatan Rancaekek, Kabupaten Bandung, Jawa Barat</p>
            <p>Rp 45.000,00 / Karung</p>
            <p>X 100</p>
          </div>
        </div>
      </div>

      {/* Button to Proceed to Payment */}
      <button
        onClick={handlePayment}
        className="w-full rounded-lg bg-lime-500 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Lanjut ke Pembayaran
      </button>
    </div>
  );
}
