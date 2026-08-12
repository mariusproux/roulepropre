import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Id de la section de réservation (prestations). */
export const BOOKING_SECTION_ID = "packages-selector"

/** Défile en douceur jusqu'à la section de réservation. */
export function scrollToBooking() {
  document.getElementById(BOOKING_SECTION_ID)?.scrollIntoView({ behavior: "smooth" })
}
