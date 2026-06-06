import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getRecipe, getRecipes } from "@/lib/recipes";

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

  return (
    <main className="px-10 py-16 max-w-5xl mx-auto">
      <div className="flex gap-10 items-start">
        {meta.image && (
          <div className="relative w-80 shrink-0 rounded-xl overflow-hidden">
            <Image
              src={meta.image}
              alt={meta.title}
              width={320}
              height={0}
              style={{ height: "auto" }}
              className="w-full"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
          <p className="text-sm opacity-60 font-dm-mono mb-8">
            {meta.duration} · {meta.serving}
          </p>
          <article className="flex flex-col gap-4 leading-relaxed">
            <MDXRemote source={content} components={components} />
          </article>
        </div>
      </div>
    </main>
  );
}
