import { toast, ToastOptions } from "react-toastify"

interface toastProps {
    position: string;
    autoClose: number;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
    progress: undefined;
    theme: string;
}

export const theme: ToastOptions<toastProps> = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}

export const toastSuccess = (value: any) => toast.success(value, theme)

export const toastError = (value: any) => toast.error(value, theme)