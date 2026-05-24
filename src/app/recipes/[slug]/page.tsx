import { MDXRemote } from "next-mdx-remote/rsc";
import { getRecipe, getRecipes, formatDate } from "@/lib/recipes";

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

export default function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const { meta, content } = getRecipe(params.slug);

  return (
    <main className="px-10 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
      <p className="text-sm opacity-100 font-dm-mono mb-10">
        {meta.duration} · {meta.serving}
      </p>
      <article className="flex flex-col gap-4 leading-relaxed">
        <MDXRemote source={content} components={components} />
      </article>

    </main>
  );
}
