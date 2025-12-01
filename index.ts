import { AuthRoutes } from "./src/routes/auth.route";
import { connectDB } from "./src/config/db";

await connectDB();
const server = Bun.serve({
  port: Number(process.env.PORT),
  routes: {
    ...AuthRoutes,
  },
  fetch(req) {
    return new Response("Unmatched route", { status: 404 });
  },
  websocket: {
    open(ws) {
      console.log("WebSocket connection opened");
    },
    message(ws, message) {
      console.log("Received message:", message);
      ws.send(`Echo: ${message}`);
    },
    close(ws, code, reason) {
      console.log(`WebSocket connection closed: ${code} - ${reason}`);
    },
  }
});

console.log(`Listening on ${server.url}`);