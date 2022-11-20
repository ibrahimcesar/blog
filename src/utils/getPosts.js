import { getNormalizedPost } from "~/utils/getNormalizedPost";

const load = async function () {

  const posts = import.meta.glob("../data/posts/**/*.{md,mdx}", {
      eager: true,
    });

  const normalizedPosts = Object.keys(posts).map(async (key) => {
    const post = await posts[key];
    return await getNormalizedPost(post);
  });

  const results = (await Promise.all(normalizedPosts)).sort(
    (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf()
  );

  const resultsFiltered = results.filter((post) => !post.draft);

  return resultsFiltered;
};

let _posts;

export const getPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};
