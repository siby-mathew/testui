export const formatPhoneSafe = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const parts = digits.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  if (!parts) return digits;
  return [parts[1], parts[2], parts[3]].filter(Boolean).join(" ");
};
