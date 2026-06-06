import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { imageSize } from "image-size";

const recipesDir = path.join(process.cwd(), "src/content/recipes");

export type RecipeMeta = {
  slug: string;
  title: string;
  duration: string;
  serving: string;
  date: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  previewImage?: string;
};

function withImageDimensions(meta: RecipeMeta): RecipeMeta {
  if (!meta.image) return meta;
  const { width, height } = imageSize(
    fs.readFileSync(path.join(process.cwd(), "public", meta.image))
  );
  return { ...meta, imageWidth: width, imageHeight: height };
}

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
  return { meta: withImageDimensions(data as RecipeMeta), content };
}
