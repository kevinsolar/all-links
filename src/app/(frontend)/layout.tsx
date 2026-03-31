import React from "react"
import "./style/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import { getPayload } from "payload"
import config from "@/payload.config"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata = {
  title: "All Links",
  description: "Just a tree of links",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const payload = await getPayload({ config })
  const bg = await payload.findGlobal({ slug: "site-background" })

  const bgLight = typeof bg.backgroundLight !== "string" && bg.backgroundLight?.url ? bg.backgroundLight.url : ""
  const bgDark = typeof bg.backgroundDark !== "string" && bg.backgroundDark?.url ? bg.backgroundDark.url : ""

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
        style={
          {
            "--bg-light": bgLight ? `url(${bgLight})` : "oklch(1 0 0)",
            "--bg-dark": bgDark ? `url(${bgDark})` : "oklch(0.145 0 0)",
          } as React.CSSProperties
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
