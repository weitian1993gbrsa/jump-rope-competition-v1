import { useState, useEffect } from "react";
import io from "socket.io-client";
import Scorekeeper from "./components/Scorekeeper";

const socket = io("http://localhost:4000"); // replace with Render backend URL

function App() {
  const [scores, setScores] = useState({});
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState("");

  useEffect(() => {
    socket.on("updateScores", (data) => setScores(data));
    return () => socket.off("updateScores");
  }, []);

  if (!auth) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <input 
          type="password" 
          placeholder="Judge password" 
          value={pw} 
          onChange={(e) => setPw(e.target.value)} 
          className="border p-2 mb-3"
        />
        <button 
          onClick={() => pw === "JUDGE123" && setAuth(true)} 
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Enter
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">📝 SkipTraq Scorekeeper</h1>
      <Scorekeeper socket={socket} />
    </div>
  );
}

export default App;