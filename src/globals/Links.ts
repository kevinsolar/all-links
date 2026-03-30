import { GlobalConfig } from "payload"

export const Links: GlobalConfig = {
  slug: "links",
  fields: [
    {
      name: "links",
      type: "array",
      fields: [
        {
          name: "titulo",
          type: "text",
          required: true,
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
