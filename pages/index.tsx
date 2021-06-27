import Link from "next/link";
import { Card } from "components/Card";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Link href="/a">
        <a>
          <Card
            text="Displays Pokémon in rows that scroll vertically. Each pokémon can
              be clicked to indicate that it has been caught."
            title="Component A"
          />
        </a>
      </Link>
      <Link href="/b">
        <a>
          <Card
            text="Displays Pokémon in cards that scroll horizontally. Each pokémon
            can be clicked to indicate that it has been caught."
            title="Component B"
          />
        </a>
      </Link>
    </div>
  );
}
