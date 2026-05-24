import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/writing";

export const revalidate = 3600; // refresh feed every hour

// Uncomment to add RSS autodiscovery — lets RSS readers detect the feed automatically.
// Also uncomment the subscribe link below.
// export const metadata = {
//   alternates: {
//     types: {
//       "application/rss+xml": "https://tammyislearning.substack.com/feed",
//     },
//   },
// };

export default async function Writing() {
  const posts = await getPosts();

  return (
    <main className="px-10 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">writing</h2>
      <p className="text-lg opacity-75 mb-10">
        Tammy is learning. Endlessly.
      </p>
      {/* Subscribe link — uncomment when ready to make the feed discoverable.
      <Link
        href="https://tammyislearning.substack.com/feed"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-dm-mono opacity-50 hover:text-yellow-gold hover:opacity-100 transition-colors duration-200"
      >
        subscribe via RSS ↗
      </Link>
      */}
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.link}>
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 items-start border border-white/10 hover:border-yellow-gold/40 rounded-xl px-4 py-4 transition-colors duration-200"
            >
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-semibold group-hover:text-yellow-gold transition-colors duration-200">
                  {post.title}
                </span>
                <span className="text-xs opacity-50 font-dm-mono">{post.date}</span>
                {post.excerpt && (
                  <span className="text-sm opacity-70 mt-1">{post.excerpt}</span>
                )}
              </div>
              {post.image && (
                <div className="relative w-28 h-20 shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
