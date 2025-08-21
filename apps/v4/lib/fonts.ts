import { cn } from "@/lib/utils";

// Use fallback fonts for static export builds
const isStaticExport = process.env.NEXT_OUTPUT_MODE === "export";

const fontSans = {
  variable: "--font-sans",
  className: isStaticExport ? "" : "font-sans",
};

const fontMono = {
  variable: "--font-mono",
  className: isStaticExport ? "" : "font-mono",
};

const fontInter = {
  variable: "--font-inter",
  className: isStaticExport ? "" : "font-inter",
};

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontInter.variable
);
 
