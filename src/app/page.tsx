import Link from "next/link";

const figureSkatingUrl = "https://www.instagram.com/tamz.on.ice";

function CustomLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={`underline-offset-auto	hover:text-yellow-gold hover:transition-colors ease-in-out duration-200 ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

function Title() {
  return (
    <h1 className="flex font-bold text-graphite-heading">
      <p>
        <span className="text-yellow-gold">Tammy</span> is{" "}
        <CustomLink className="underline" href={figureSkatingUrl}>
          figure skater
        </CustomLink>{" "}
        by moonlight &#127769;
      </p>
    </h1>
  );
}

function SubTitle() {
  return (
    <h4 className="flex text-graphite-heading">
      <p> software engineer by daylight ☀️ </p>
    </h4>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-4 p-10">
      <header className="flex flex-col items-center space-y-4">
        <Title />
        <SubTitle />
      </header>
    </main>
  );
}
