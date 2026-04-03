import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "nome",
      type: "text",
      required: false,
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "@",
      type: "text",
      required: false
    }
  ],
}
