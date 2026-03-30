import { GlobalConfig } from "payload"

export const Avatar: GlobalConfig = {
  slug: "avatar",
  fields: [
    {
      name: "Avatar",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
}
