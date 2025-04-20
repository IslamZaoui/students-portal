import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

dayjs.extend(relativeTime);
dayjs.locale("ar"); // Set Arabic as the default locale

export default function timeAgo(date: Date) {
    return dayjs(date).fromNow();
}