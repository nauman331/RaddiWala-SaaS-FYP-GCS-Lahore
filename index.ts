import { AuthRoutes } from "./src/routes/auth.route";
import { CategoryRoutes } from "./src/routes/category.route";
import { adminServiceRoutes } from "./src/routes/adminservice.route"
import { connectDB } from "./src/config/sqldb";
import { connectRedis } from "./src/config/redis";
import { getWebSocketConfig, type WebSocketData } from "./src/config/socket";
import { setupAllSocketControllers } from "./src/socketControllers/index";


await connectDB();
await connectRedis();
console.log("Database migrations completed");

// Setup all socket controllers before starting server
setupAllSocketControllers();

const server = Bun.serve({
  port: Number(process.env.PORT),
  routes: {
    ...AuthRoutes,
    ...CategoryRoutes,
    ...adminServiceRoutes,
  },
  fetch(req, server) {
    const url = new URL(req.url);

    // Handle WebSocket upgrade for /socket path
    if (url.pathname === "/socket") {
      const upgraded = server.upgrade(req, {
        data: {
          id: crypto.randomUUID(),
          rooms: new Set<string>()
        } as WebSocketData
      });

      if (upgraded) {
        return undefined;
      }

      return new Response("WebSocket upgrade failed", { status: 500 });
    }

    return new Response("Not found", { status: 404 });
  },
  websocket: getWebSocketConfig(),
});

console.log(`Server running on port ${server.port} with WebSocket support at /socket`);