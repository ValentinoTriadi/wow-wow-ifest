export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    minimumFractionDigits: 0, // Adjust as needed
    maximumFractionDigits: 0,
  }).format(value);
};
