import { GlobalConfig } from "payload"

export const Profile: GlobalConfig = {
  slug: "profile",
  label: "Perfil",
  fields: [
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "name",
      label: "Nome",
      type: "text",
      required: true,
    },
    {
      name: "socialTag",
      label: "@ (sem o @)",
      type: "text",
      required: true,
    },
  ],
}
