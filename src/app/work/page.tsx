import Link from "next/link";

const links = [
  { label: "linkedin", href: "https://www.linkedin.com/in/tammyliutm/" },
  { label: "github", href: "https://github.com/tammy" },
];

export default function Work() {
  return (
    <main className="px-10 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">work</h2>
      <p className="text-sm mb-10">
        <b>My daily 9-5, or 11-7, or whatever needs be.</b>
        I'm traditionally a full stack product engineer, right now I work on AI
        retrieval.
      </p>

      <section>
        <h3 className="text-xs uppercase tracking-widest opacity-90 mb-4">
          find me
        </h3>
        <ul className="flex flex-col gap-3">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm hover:text-yellow-gold transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
