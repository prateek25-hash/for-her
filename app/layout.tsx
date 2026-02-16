import type React from "react"
import type { Metadata } from "next"
import { Poppins, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _poppins = Poppins({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] })
const _dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "For Her, With Love",
  description: "A digital collection of letters made with love",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_poppins.variable} ${_dancingScript.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
