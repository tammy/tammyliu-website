import Link from "next/link";
import Image from "next/image";
import { getRecipes } from "@/lib/recipes";

export default function Recipes() {
  const recipes = getRecipes();

  return (
    <main className="px-10 py-16 max-w-5xl">
      <h2 className="text-3xl font-bold mb-2">recipes</h2>
      <p className="text-sm opacity-50 mb-10">
        Life is busy, but you deserve good food.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="group rounded-xl overflow-hidden border border-white/10 hover:border-yellow-gold/40 transition-colors duration-200"
          >
            <div className="aspect-[4/3] relative bg-white/5">
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
            </div>
            <div className="px-4 py-3 border-t border-white/10">
              <span className="text-sm font-medium">{recipe.title}</span>
              <span className="text-xs opacity-40 ml-2">{recipe.duration}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
