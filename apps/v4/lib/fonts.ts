import {
  Geist_Mono as FontMono,
  Geist as FontSans,
  Inter,
} from "next/font/google"

import { cn } from "@/lib/utils"

// Skip font loading for static export builds
const isStaticExport = process.env.NEXT_OUTPUT_MODE === 'export'

const fontSans = isStaticExport ? { variable: "--font-sans" } : FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = isStaticExport ? { variable: "--font-mono" } : FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

const fontInter = isStaticExport ? { variable: "--font-inter" } : Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontInter.variable
)
