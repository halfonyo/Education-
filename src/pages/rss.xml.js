import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../site.config';

export async function GET(context) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  return rss({
    title: `${site.name}, מאמרים על קיסריה`,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      categories: [post.data.category, ...post.data.tags],
      link: `${base}/articles/${post.slug}/`,
    })),
    customData: `<language>he-IL</language>`,
  });
}
