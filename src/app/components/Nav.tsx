"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/recipes", label: "recipes" },
  { href: "/writing", label: "writing" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-6 px-10 py-6 font-dm-mono text-sm">
      {links.map(({ href, label }) =>
        href === pathname ? (
          <span
            key={href}
            className="underline decoration-yellow-gold decoration-2 underline-offset-4"
          >
            {label}
          </span>
        ) : (
          <Link
            key={href}
            href={href}
            className="hover:text-yellow-gold transition-colors ease-in-out duration-200"
          >
            {label}
          </Link>
        )
      )}
    </nav>
  );
}
