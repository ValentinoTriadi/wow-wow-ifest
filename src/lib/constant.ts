import { Role } from "@prisma/client";

export const roles = [
  {
    id: Role.Pekerja,
    label: "Pengguna",
  },
  {
    id: Role.Penjual,
    label: "Pekerja",
  },
  {
    id: Role.User,
    label: "Penjual",
  },
];
