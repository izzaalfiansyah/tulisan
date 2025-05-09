import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        tags: z.array(z.string()),
        date: z.string(),
        imagePath: z.string(),
      }),
    }),
  },
});
