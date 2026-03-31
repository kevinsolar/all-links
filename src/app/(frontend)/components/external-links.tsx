import { Button } from "@/components/ui/button"
import { getPayload } from "payload"
import config from "@/payload.config"

export async function ExternalLinks() {
  const payload = await getPayload({ config })
  const links = await payload.findGlobal({ slug: "links" })

  const myLinks = links.links

  return (
    <div className="flex flex-col gap-4 m-6 text-primary text-md">
      {myLinks?.map((link) => (
        <Button key={link.id} asChild>
          <a href={link.url} target="_blank">
            {link.titulo}
          </a>
        </Button>
      ))}
    </div>
  )
}
