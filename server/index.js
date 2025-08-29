import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

let scores = {};

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);
  socket.emit("updateScores", scores);

  socket.on("incrementScore", (player) => {
    scores[player] = (scores[player] || 0) + 1;
    io.emit("updateScores", scores);
  });

  socket.on("resetScores", () => {
    scores = {};
    io.emit("updateScores", scores);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// ✅ Use Render's dynamic port, not a fixed one
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
