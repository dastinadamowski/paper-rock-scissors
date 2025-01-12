import Link from "next/link";

export default function Rules() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Game Rules</h1>
      <div className="bg-gray-100 p-4 rounded shadow-md w-3/4 mx-auto">
        <p className="text-lg">
          The rules of Paper Rock Scissors are simple:
        </p>
        <ul className="list-disc mt-4 pl-6">
          <li>Rock beats Scissors</li>
          <li>Scissors beats Paper</li>
          <li>Paper beats Rock</li>
        </ul>
        <p className="mt-4 text-lg">
          Select your choice and see if you can outsmart the computer!
        </p>
      </div>
      <div className="text-center mt-6">
        <Link href="/" className="text-blue-600 underline">
          Back to Game
        </Link>
      </div>
    </main>
  );
}
