import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveSrc(path?: string): string {
  if (!path) return "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const clean = path.replace(/^\/portfolio/, "").replace(/^\/+/, "/");
  return `${basePath}${clean}`;
}

