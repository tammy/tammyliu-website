import Parser from "rss-parser";

const FEED_URL = "https://tammyislearning.substack.com/feed";

export type Post = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  image?: string;
};

export async function getPosts(): Promise<Post[]> {
  const parser = new Parser({
    customFields: { item: [["enclosure", "enclosure", { keepArray: false }]] },
  });

  const feed = await parser.parseURL(FEED_URL);

  return feed.items.map((item) => ({
    title: item.title ?? "",
    link: item.link ?? "",
    date: item.pubDate
      ? new Date(item.pubDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "",
    excerpt: item.contentSnippet?.split("\n")[0] ?? "",
    image: (item as any).enclosure?.url,
  }));
}
