import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-10">
      <h1 className="text-7xl font-bold mt-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
          Big Brain React
        </span>
      </h1>
      <div className="mt-10 grid grid-cols-2 gap-5">
        <Link href="/a">
          <a>
            <div className="rounded-lg p-5 bg-gray-50 transition-shadow hover:shadow-xl">
              <h3 className="text-4xl font-bold">Component A</h3>
              <p className="text-xl text-gray-700 mt-3">
                Displays Pokémon in rows that scroll vertically. Each pokémon
                can be clicked to indicate that it has been caught.
              </p>
            </div>
          </a>
        </Link>
        <Link href="/b">
          <a>
            <div className="group rounded-lg p-5 bg-gray-50 transition-shadow hover:shadow-xl">
              <h3 className="text-4xl font-bold">Component B</h3>
              <p className="text-xl text-gray-700 mt-3">
                Displays Pokémon in cards that scroll horizontally. Each pokémon
                can be clicked to indicate that it has been caught.
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
