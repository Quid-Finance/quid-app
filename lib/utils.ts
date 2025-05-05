import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildFormData = (values: Record<string, any>): FormData => {
  const formData = new FormData()
  Object.entries(values).forEach(([key, value]) => {
    formData.append(key, value)
  })

  return formData
}

/**
 * Format a BigInt value as a monetary amount with 2 decimal places
 * This avoids potential precision loss when converting large BigInts to Numbers
 * @param amount BigInt amount in cents
 * @returns Formatted amount string with 2 decimal places
 */
export const formatBigIntAsCurrency = (amount: bigint): string => {
  const amountStr = amount.toString();

  if (amount < 100n) {
    if (amount < 10n) {
      return `0.0${amountStr}`;
    }
    return `0.${amountStr}`;
  }

  const dollars = amountStr.slice(0, -2) || "0";
  const cents = amountStr.slice(-2).padStart(2, "0");

  return `${dollars}.${cents}`;
};
