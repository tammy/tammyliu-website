import fs from "fs";
import path from "path";
import matter from "gray-matter";

const recipesDir = path.join(process.cwd(), "src/content/recipes");

export type RecipeMeta = {
  slug: string;
  title: string;
  duration: string;
  serving: string;
  date: string;
  image?: string; // path relative to /public, e.g. /recipes/salmon.jpg
};

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function getRecipes(): RecipeMeta[] {
  const files = fs.readdirSync(recipesDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(recipesDir, file), "utf8");
      const { data } = matter(raw);
      return { slug, ...data } as RecipeMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRecipe(slug: string): { meta: RecipeMeta; content: string } {
  const file = path.join(recipesDir, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as RecipeMeta, content };
}
