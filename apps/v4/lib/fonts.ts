import {
  Geist_Mono as FontMono,
  Geist as FontSans,
  Inter,
} from "next/font/google"

import { cn } from "@/lib/utils"

// Font loaders must be called unconditionally at module scope
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontInter.variable
)
