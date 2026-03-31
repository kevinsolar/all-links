import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getPayload } from "payload"
import config from "@/payload.config"

export async function SocialLinks() {
  const payload = await getPayload({ config })
  const socials = await payload.findGlobal({ slug: "social-links" })

  const socialsLinks = socials.links

  return (
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
  )
}
