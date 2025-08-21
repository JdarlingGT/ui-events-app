import { cn } from "@/lib/utils"

// For static export builds, use system font fallbacks
const fontSans = {
  variable: "--font-sans",
  className: "",
}

const fontMono = {
  variable: "--font-mono", 
  className: "",
}

const fontInter = {
  variable: "--font-inter",
  className: "",
}

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontInter.variable
)
