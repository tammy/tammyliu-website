import Link from "next/link";
import Image from "next/image";
import { getRecipes } from "@/lib/recipes";

export default function Recipes() {
  const recipes = getRecipes();

  return (
    <main className="px-10 py-16 max-w-4xl">
      <h2 className="text-3xl font-bold mb-2">recipes</h2>
      <p className="text-lg opacity-75 mb-10">
        Life is busy, but you deserve good food.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-yellow-gold/40 transition-colors duration-200"
          >
            {recipe.image ? (
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
            )}
            <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-black/40 backdrop-blur-sm">
              <span className="text-sm font-medium text-graphite-heading">{recipe.title}</span>
              <span className="text-xs opacity-60 ml-2">{recipe.duration}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
