import rss from "@astrojs/rss";

import { SITE } from "~/config";
import { getPosts } from "~/utils/getPostsCollection";

const posts = await getPosts();

export const GET = () =>
  rss({
    title: `${SITE.name}'s Blog`,
    description:
      "@ibrahimcesar — Builder, eventually consistent. Personal blog with posts The Cloud, Code and Everything Else!",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `blog/${post.slug}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
    })),
  });
