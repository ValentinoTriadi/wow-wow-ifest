import Link from "next/link";
import { SetStateAction, useState } from "react";

const Payment = () => {
  
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [instructions, setInstructions] = useState("");

  const handleBankSelection = (bank: string | null) => {
    setSelectedBank(bank);
  };

  const handleInstructionSelection = (instruction: SetStateAction<string>) => {
    setInstructions(instruction);
  };

  return (
    <div className="min-h-screen  p-4">
      <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 rounded-md bg-lime-100 p-4">
          <h2 className="mb-2 text-lg font-semibold">Detail Pembayaran</h2>
          <ul>
            <li className="mb-1 flex justify-between">
              <span className="text-sm">Lahan Tani 1.3 Hektar</span>
              <span className="text-sm">Rp 325.000.000,00</span>
            </li>
            <li className="mb-1 flex justify-between">
              <span className="text-sm">Bibit Jahe Merah</span>
              <span className="text-sm">Rp 2.000.000,00</span>
            </li>
            <li className="mb-1 flex justify-between">
              <span className="text-sm">Heri Supriyadi</span>
              <span>Rp 2.000.000,00</span>
            </li>
            <li className="mb-1 flex justify-between">
              <span className="text-sm">Sumarno</span>
              <span className="text-sm">Rp 2.000.000,00</span>
            </li>
            <li className="mb-1 flex justify-between">
              <span className="text-sm">Biaya Admin</span>
              <span className="text-sm">Rp 2.000,00</span>
            </li>
            <li className="flex justify-between font-bold">
              <span className="text-sm">Total Pembayaran</span>
              <span className="text-sm">Rp 2.000.000,00</span>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 text-lg font-semibold">Metode Pembayaran</h2>
          <div className="rounded-md bg-gray-100 p-4">
            {[
              "Bank BCA",
              "Bank Mandiri",
              "Bank BRI",
              "Bank BNI",
              "Kartu Kredit",
            ].map((bank, index) => (
              <div key={index} className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="bank"
                  id={bank}
                  className="mr-2"
                  onChange={() => handleBankSelection(bank)}
                />
                <label htmlFor={bank} className="flex items-center">
                  <span>{bank}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 text-lg font-semibold">Nomor Rekening</h2>
          <div className="rounded-md bg-lime-100 p-4">
            <span className="text-lg font-bold">126 0813 1344 2899</span>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 text-lg font-semibold">Petunjuk Transfer</h2>
          <div className="rounded-md bg-gray-100 p-4">
            {[
              "Petunjuk Transfer ATM",
              "Petunjuk Transfer mBanking",
              "Petunjuk Transfer Kartu Kredit",
            ].map((instruction, index) => (
              <div key={index} className="mb-2">
                <button
                  className="w-full rounded-md bg-white p-2 text-left shadow-md"
                  onClick={() => handleInstructionSelection(instruction)}
                >
                  {instruction}
                </button>
                {instructions === instruction && (
                  <div className="mt-2 rounded-md bg-gray-50 p-2">
                    <ul>
                      <li>1. Masukkan Kartu ATM BCA & PIN.</li>
                      <li>
                        2. Pilih menu Transaksi Lainnya - Transfer - ke Rekening
                        BCA Virtual Account.
                      </li>
                      <li>
                        3. Masukkan 5 angka kode perusahaan untuk TaniKu (12345)
                        dan Nomor HP yang kamu daftarkan di akun TaniKu (Contoh:
                        123457081316951940).
                      </li>
                      <li>
                        4. Di halaman konfirmasi, pastikan detil pembayaran
                        sudah sesuai seperti No VA, Nama, Toko/Produk dan Total
                        Tagihan.
                      </li>
                      <li>5. Pastikan nama kamu dan Total Tagihannya benar.</li>
                      <li>6. Jika sudah benar, klik Ya.</li>
                      <li>
                        7. Simpan struk transaksi sebagai bukti pembayaran.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="w-full rounded-md bg-lime-500 py-2 font-bold text-white hover:bg-green-500">
          <Link href="/">Bayar</Link>
        </button>
      </div>
    </div>
  );
};

export default Payment;
