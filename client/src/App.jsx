import { useState, useEffect } from "react";
import io from "socket.io-client";
import Scorekeeper from "./components/Scorekeeper";
import Scoreboard from "./components/Scoreboard";

const socket = io("http://localhost:4000"); // Replace with deployed backend URL

function App() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    socket.on("updateScores", (data) => setScores(data));
    return () => socket.off("updateScores");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">🏆 SkipTraq</h1>
      <Scorekeeper socket={socket} />
      <Scoreboard scores={scores} />
    </div>
  );
}

export default App;