import { GlobalConfig } from "payload"

export const SocialLinks: GlobalConfig = {
  slug: "social-links",
  fields: [
    {
      name: "links",
      type: "array",
      fields: [
        {
          name: "icone",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "titulo",
          type: "select",
          required: true,
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "TikTok", value: "tiktok" },
            { label: "YouTube", value: "youtube" },
            { label: "X (Twitter)", value: "twitter" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "GitHub", value: "github" },
            { label: "WhatsApp", value: "whatsapp" },
          ],
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "ativo",
          type: "checkbox",
          defaultValue: true,
        },
      ],
    },
  ],
}
