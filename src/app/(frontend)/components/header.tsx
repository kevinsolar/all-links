import Image from "next/image"
import { getPayload } from "payload"
import config from "@/payload.config"

import type { Media } from "@/payload-types"

export async function Header() {
  const payload = await getPayload({ config })
  const avatar = await payload.findGlobal({ slug: "avatar" })
  const media = avatar.Avatar as Media

  return (
    <header className="p-6 flex flex-col items-center gap-2">
      <div className="relative w-28 aspect-square rounded-full overflow-hidden">
        <Image
          src={media.url as string}
          alt={media.alt as string}
          fill
          sizes="(max-width: 768px) 70vw, 30vw"
          loading="eager"
          className="object-cover"
        />
      </div>

      <div>
        <h1>@kevinsolar</h1>
      </div>
    </header>
  )
}
