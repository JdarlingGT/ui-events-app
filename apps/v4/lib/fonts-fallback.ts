import { cn } from "@/lib/utils"

// For development and environments with network access, use Google Fonts
// For static export and offline builds, use system fonts with CSS variables

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