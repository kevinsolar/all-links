import { headers as getHeaders } from "next/headers.js"
import { getPayload } from "payload"
import { fileURLToPath } from "url"

import config from "@/payload.config"
import "./style/globals.css"

import { ModeToggle } from "./components/ui/theme-toggle"
import { Hero } from "./components/sections"
import { Header } from "./components/header"
import { ExternalLinks } from "./components/external-links"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const socials = await payload.findGlobal({ slug: "social-links" })
  const socialsLinks = socials.links
  console.log(socialsLinks?.[0]?.url)

  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl">
        <Hero>
          <Header />
          <ModeToggle />
          <ExternalLinks />

          <div className="p-6 flex gap-4 items-center justify-center">
            <a href={socialsLinks?.[0]?.url} target="_blank">
              <Button variant="social" size="icon">
                {socialsLinks?.[0] &&
                  typeof socialsLinks[0].icone !== "string" &&
                  socialsLinks[0].icone?.url && (
                    <Image src={socialsLinks[0].icone.url} alt="Icone" width={32} height={32} />
                  )}
              </Button>
            </a>
          </div>
        </Hero>
      </div>
    </main>
  )
}
