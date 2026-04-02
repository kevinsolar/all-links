import { headers as getHeaders } from "next/headers.js"
import { getPayload } from "payload"

import config from "@/payload.config"
import "./style/globals.css"

import { ModeToggle } from "./components/ui/theme-toggle"
import { Hero } from "./components/sections"
import { Header } from "./components/header"
import { ExternalLinks } from "./components/external-links"
import { SocialLinks } from "./components/social-links"

export const revalidate = 3600

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl">
        <Hero>
          <Header />

          <div className="flex items-center justify-center">
            <ModeToggle />
          </div>

          <ExternalLinks />

          <SocialLinks />
        </Hero>
      </div>
    </main>
  )
}
