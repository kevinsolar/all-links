import { headers as getHeaders } from "next/headers.js"
import { getPayload } from "payload"
import { fileURLToPath } from "url"

import config from "@/payload.config"
import "./style/globals.css"

import { ModeToggle } from "./components/ui/theme-toggle"
import { Hero } from "./components/sections"
import { Header } from "./components/header"
import { ExternalLinks } from "./components/external-links"
import { SocialLinks } from "./components/social-links"

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

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
