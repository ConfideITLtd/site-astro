import { defineCollection, reference, z } from "astro:content";

// Homepage schema
const homepage = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      banner: z
        .object({
          title: z.string().optional(),
          content: z.string().optional(),
          image: image().optional(),
          button: z.object({
            label: z.string(),
            link: z.string().default("#"),
            enable: z.boolean().default(true),
          }),
        })
        .optional(),
      feature: z
        .object({
          title: z.string().optional(),
          features: z.array(
            z.object({
              name: z.string().optional(),
              icon: z.string().optional(),
              content: z.string().optional(),
            })
          ),
        })
        .optional(),
      services: z
        .array(
          z.object({
            title: z.string().optional(),
            content: z.string().optional(),
            images: z.array(image()).optional(),
            button: z
              .object({
                label: z.string(),
                link: z.string().default("#"),
                enable: z.boolean().default(true),
              })
              .optional(),
          })
        )
        .optional(),
      workflow: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          image: image(),
        })
        .optional(),
      call_to_action: z
        .object({
          title: z.string().optional(),
          content: z.string().optional(),
          image: image(),
          button: z
            .object({
              label: z.string(),
              link: z.string().default("#"),
              enable: z.boolean().default(true),
            })
            .optional(),
        })
        .optional(),
    }),
});

// Post collection schema
const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      meta_title: z.string().optional(),
      description: z.string().optional(),
      date: z.date().optional(),
      image: image().optional(),
      authors: z.array(reference("members")).default(["pardeep-singh-basi"]),
      categories: z.array(z.string()).default(["others"]),
      tags: z.array(z.string()).default(["others"]),
      draft: z.boolean().optional(),
    }),
});

const members = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    description: z.string(),
    social: z
      .object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        linkedIn: z.string().optional(),
        instagram: z.string().optional(),
        email: z.string().optional(),
      })
      .optional(),
  }),
});

const teamPage = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    members: z.array(reference("members")),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

//Contact collection schema
const contact_page = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    info: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        contacts: z.array(z.string()).optional(),
      })
      .optional(),
  }),
});

//faq page schema
const faq_page = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    faqs: z
      .array(
        z.object({
          title: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

// Export collections
export const collections = {
  blog: postsCollection,
  pages: pagesCollection,
  team: teamPage,
  homepage,
  members,
  // contact: contact_page,
  // faq: faq_page
};
