import { GlobalConfig } from "payload";

export const SiteBackground: GlobalConfig = {
  slug: "site-background",
  fields: [
    {
      name: "backgroundLight",
      label: "Background (tema claro)",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "backgroundDark",
      label: "Background (tema escuro)",
      type: "upload",
      relationTo: "media",
    },
  ],
}
