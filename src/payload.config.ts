import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"
import sharp from "sharp"

import { en } from "@payloadcms/translations/languages/en"
import { pt } from "@payloadcms/translations/languages/pt"

import { Users } from "./collections/Users"
import { Media } from "./collections/Media"
import { SocialLinks } from "./globals/SocialLinks"
import { Avatar } from "./globals/Avatar"
import { Links } from "./globals/Links"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  i18n: {
    supportedLanguages: { en, pt },
  },
  collections: [Users, Media],
  globals: [SocialLinks, Avatar, Links],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [],
})
