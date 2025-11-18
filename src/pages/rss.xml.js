import { SITE } from "~/config";
import { getPosts } from "~/utils/getPostsCollection";

const posts = await getPosts();

// Custom RSS generator with full control over XML output
function generateRSS(config) {
  const { title, description, site, items, author } = config;

  const itemsXML = items
    .map((item) => {
      const link = `${site}/${item.link}`;
      const pubDate = new Date(item.pubDate).toUTCString();

      // Build category tags if available
      const categoryTags = item.tags
        ? item.tags.map(tag => `      <category><![CDATA[${tag}]]></category>`).join('\n')
        : '';

      // Add author if available
      const authorTag = item.author || author
        ? `      <dc:creator><![CDATA[${item.author || author}]]></dc:creator>`
        : '';

      // Add content:encoded for full content
      const contentEncoded = item.content
        ? `      <content:encoded><![CDATA[${item.content}]]></content:encoded>`
        : '';

      return `    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description || ''}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
${authorTag}
${categoryTags}
${contentEncoded}
    </item>`;
    })
    .join('\n');

  const rssXML = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Thank you Aaron Swartz (1986-2013) -->
<!-- Developer of RSS, Reddit co-founder, activist for open access and freedom of information -->
<!-- Your legacy lives on in every RSS feed, in every piece of freely shared knowledge -->
<!-- "Information is power. But like all power, there are those who want to keep it for themselves." -->
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${title}]]></title>
    <description><![CDATA[${description}]]></description>
    <link>${site}</link>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>
    <generator>Astro v5 - https://astro.build</generator>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    <copyright><![CDATA[Copyright ${new Date().getFullYear()} ${author || SITE.name}. All rights reserved.]]></copyright>
    <managingEditor><![CDATA[${author || SITE.name}]]></managingEditor>
    <webMaster><![CDATA[${author || SITE.name}]]></webMaster>
${itemsXML}
  </channel>
</rss>`;

  return rssXML;
}

export const GET = async () => {
  const rssContent = generateRSS({
    title: `${SITE.name}'s Blog`,
    description:
      "Cloud architecture, serverless computing, and software engineering insights from an AWS Well-Architected team member. Exploring event-driven architectures, domain-driven design, and the intersection of technical excellence with business outcomes. Bilingual content in English and Brazilian Portuguese.",
    site: import.meta.env.SITE,
    author: SITE.name,
    items: posts.map((post) => ({
      link: `blog/${post.slug}`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      tags: post.data.tags,
      author: post.data.author,
      // Note: Full content can be added here if you want full-text RSS
      // content: post.body
    })),
  });

  return new Response(rssContent, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
