import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/recipes", label: "recipes" },
  { href: "/writing", label: "writing" },
];

export default function Nav() {
  return (
    <nav className="flex gap-6 px-10 py-6 font-mono text-sm">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-yellow-gold transition-colors ease-in-out duration-200"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
