interface LinkCardProps {
  title: string;
  text: string;
}

export function LinkCard({ text, title }: LinkCardProps): JSX.Element {
  return (
    <div
      className="rounded-3xl p-10 bg-gray-100 shadow-md transition 
    hover:shadow-2xl transform hover:-translate-y-1"
    >
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="text-xl text-gray-700 mt-6">{text}</p>
      <p className="mt-2 text-lg text-right text-purple-600">
        View Component →
      </p>
    </div>
  );
}
