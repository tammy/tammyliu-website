import { MDXRemote } from "next-mdx-remote/rsc";
import { getRecipe, getRecipes } from "@/lib/recipes";

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
    <main className="px-10 py-16 max-w-2xl">
      <h1 className="text-3xl font-bold mb-1">{meta.title}</h1>
      <p className="text-sm opacity-50 mb-10">{meta.duration}</p>
      <article className="flex flex-col gap-4 leading-relaxed">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
