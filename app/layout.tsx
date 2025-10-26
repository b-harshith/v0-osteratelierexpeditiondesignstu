import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Fraunces, Montserrat, Newsreader } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fraunces",
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-newsreader",
})

export const metadata: Metadata = {
  title: "Oster Atelier - Expedition Design Studio",
  description: "We design journeys, not trips. The destination is you.",
  generator: "v0.app",
  openGraph: {
    title: "Oster Atelier - Expedition Design Studio",
    description: "We design journeys, not trips. The destination is you.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={
        {
          "--font-fraunces": fraunces.style.fontFamily,
          "--font-montserrat": montserrat.style.fontFamily,
          "--font-newsreader": newsreader.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
