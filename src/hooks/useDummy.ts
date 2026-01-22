import { useQuery } from "@tanstack/react-query";

export const useDummy = () => {
  return useQuery({
    queryKey: ["io"],
    queryFn: async () => {
      const number = await new Promise((r) => {
        setTimeout(() => {
          r(Math.random() * 50000);
        }, 3500);
      });
      return number;
    },
  });
};
