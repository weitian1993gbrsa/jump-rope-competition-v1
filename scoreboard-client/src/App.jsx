import { useState, useEffect } from "react";
import io from "socket.io-client";

// Replace this with your actual Render server URL once deployed
const socket = io("https://jump-rope-competition-v1.onrender.com");

function App() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    socket.on("updateScores", (data) => setScores(data));
    return () => socket.off("updateScores");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">🏆 SkipTraq Scoreboard</h1>
      <ul className="w-full max-w-md text-2xl">
        {Object.entries(scores).map(([player, score]) => (
          <li key={player} className="flex justify-between border-b py-3">
            <span>{player}</span>
            <span>{score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;