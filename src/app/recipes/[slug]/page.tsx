import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getRecipe, getRecipes } from "@/lib/recipes";

export const dynamicParams = false;

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-bold mt-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-bold mt-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-semibold mt-3" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-base font-semibold mt-2" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside pl-5 flex flex-col gap-1" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside pl-5 flex flex-col gap-1" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-1" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-yellow-gold" {...props} />
  ),
};

export async function generateStaticParams() {
  return getRecipes().map((r) => ({ slug: r.slug }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, content } = getRecipe(slug);

  // Split intro (before first heading) from the rest of the content
  const firstHeadingIndex = content.search(/^#/m);
  const intro =
    firstHeadingIndex > 0 ? content.slice(0, firstHeadingIndex).trim() : "";
  const body =
    firstHeadingIndex > 0 ? content.slice(firstHeadingIndex).trim() : content;

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      {/* Mobile: single column. Desktop: two columns */}
      <div className="flex flex-col md:flex-row md:gap-10 md:items-start">
        {/* Left column on desktop: image */}
        {meta.image && (
          <div className="hidden md:block md:relative md:w-96 md:shrink-0 rounded-xl overflow-hidden">
            <Image
              src={meta.image}
              alt={meta.title}
              width={384}
              height={0}
              style={{ height: "auto" }}
              className="w-full"
            />
          </div>
        )}

        {/* Right column on desktop, full column on mobile */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
          <p className="text-sm opacity-60 font-dm-mono mb-6">
            {meta.duration} · {meta.serving}
          </p>

          {/* Intro paragraph */}
          {intro && (
            <article className="flex flex-col gap-4 leading-relaxed mb-4">
              <MDXRemote source={intro} components={components} />
            </article>
          )}

          {/* Image appears here on mobile, between intro and ingredients */}
          {meta.image && (
            <div className="block md:hidden relative rounded-xl overflow-hidden mb-6">
              <Image
                src={meta.image}
                alt={meta.title}
                width={800}
                height={0}
                style={{ height: "auto" }}
                className="w-full"
              />
            </div>
          )}

          {/* Ingredients, steps, etc. */}
          <article className="flex flex-col gap-4 leading-relaxed">
            <MDXRemote source={body} components={components} />
          </article>
        </div>
      </div>
    </main>
  );
}
