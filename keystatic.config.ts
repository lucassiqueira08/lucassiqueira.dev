import {
  config,
  fields,
  collection,
  type LocalConfig,
  type GitHubConfig,
} from "@keystatic/core";

const storage: LocalConfig["storage"] | GitHubConfig["storage"] =
  process.env.NODE_ENV === "development" ||
  !process.env.KEYSTATIC_GITHUB_CLIENT_ID
    ? { kind: "local" }
    : {
        kind: "github",
        repo: {
          owner: "lucassiqueira08",
          name: "lucassiqueira.dev",
        },
      };

export default config({
  storage,
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "data/posts/*",
      format: { contentField: "content" },
      columns: ["title", "date", "draft"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({
          label: "Publication Date",
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/images/posts",
          publicPath: "/images/posts/",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Set as draft to prevent publishing",
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },
});
