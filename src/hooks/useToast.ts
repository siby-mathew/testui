import { toast } from "react-toastify";
export const useToast = () => {
  return {
    showToast: toast,
  };
};
