import Link from "next/link";

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
  const goalsUrl = "https://asana.com/features/goals-reporting/goals";

  return (
    <h1 className="flex font-bold text-graphite-heading">
      <p><span className="text-yellow-gold">Tammy</span> is building software by daylight ☀️</p>
    </h1>
  );
}

function SubTitle() {
  const figureSkatingUrl = "https://www.instagram.com/tamz.on.ice";
  return (
    <h4 className="flex text-graphite-heading">
      <p>
        <CustomLink className="underline" href={figureSkatingUrl}>
          figure skater
        </CustomLink>{" "}
        by moonlight &#127769;
      </p>
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
