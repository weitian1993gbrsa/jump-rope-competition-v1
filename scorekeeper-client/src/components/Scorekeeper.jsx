import { useState } from "react";

export default function Scorekeeper({ socket }) {
  const [player, setPlayer] = useState("");

  const handleIncrement = () => {
    if (player) socket.emit("incrementScore", player);
  };

  return (
    <div className="mb-6 flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter player name"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
        className="border p-2 rounded mb-3"
      />
      <button
        onClick={handleIncrement}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        +1 Jump
      </button>
    </div>
  );
}