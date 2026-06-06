import Link from "next/link";
import Image from "next/image";
import { getRecipes, formatDate } from "@/lib/recipes";

export default function Recipes() {
  const recipes = getRecipes();

  return (
    <main className="px-10 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">recipes</h2>
      <p className="text-lg opacity-75 mb-4"></p>

      <p className="mb-10">
        <b>Life is busy, but you deserve good food.</b> Daily cooking is an
        endurance sport, so I needed something easy, mindless, and still tasty.
        These are my weekly staples.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-yellow-gold/40 transition-colors duration-200"
          >
            {recipe.previewImage ?? recipe.image ? (
              <Image
                src={recipe.previewImage ?? recipe.image!}
                alt={recipe.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
            )}
            <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-black/40 backdrop-blur-sm">
              <span className="text-sm font-medium text-graphite-heading block">
                {recipe.title}
              </span>
              <span className="text-xs opacity-60 font-dm-mono text-graphite-heading">
                {recipe.duration}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">recommendations</h2>
        <h3 className="text-lg font-semibold mb-2">cookware</h3>
        <ul className="list-disc list-outside pl-5 flex flex-col gap-1 opacity-80">
          <li>
            <strong className="text-graphite-bg dark:text-graphite-heading font-bold">
              Chef&apos;s knife.
            </strong>{" "}
            This is going to be sufficient for most chopping/slicing needs. If
            you invest in one thing, invest in this.
          </li>
          <li>
            <strong className="text-graphite-bg dark:text-graphite-heading font-bold">
              Baking sheet & parchment paper.
            </strong>{" "}
            For all your roasting/baking needs. A quarter is sufficient for most
            recipes, but if you use the oven often then get a half.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2 mt-2">spices</h3>
        <ul className="list-disc list-outside pl-5 flex flex-col gap-1 opacity-80">
          <li>
            <strong className="text-graphite-bg dark:text-graphite-heading font-bold">
              Garlic powder.
            </strong>{" "}
            Great with most vegetables.
          </li>
          <li>
            <strong className="text-graphite-bg dark:text-graphite-heading font-bold">
              Chili powder.
            </strong>{" "}
            Easy way to spice up protein.
          </li>
          <li>
            <strong className="text-graphite-bg dark:text-graphite-heading font-bold">Honey.</strong>{" "}
            Richer than simple sugar and more versatile so you can have it with
            an evening tea.
          </li>
          <li>
            <strong className="text-graphite-bg dark:text-graphite-heading font-bold">
              Dijon mustard.
            </strong>{" "}
            Great for marinades and sauces.
          </li>
        </ul>
      </section>
    </main>
  );
}
