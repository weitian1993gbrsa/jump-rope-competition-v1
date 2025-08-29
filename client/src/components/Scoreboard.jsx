export default function Scoreboard({ scores }) {
  return (
    <div className="w-full max-w-md bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-semibold mb-3">Scoreboard</h2>
      <ul>
        {Object.entries(scores).map(([player, score]) => (
          <li
            key={player}
            className="flex justify-between border-b py-2 text-lg"
          >
            <span>{player}</span>
            <span>{score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}