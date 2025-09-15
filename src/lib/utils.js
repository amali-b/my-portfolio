import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// this function used to apply multiple classnames for element
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}