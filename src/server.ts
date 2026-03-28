import express from "express";
import type { Express, Response, Request, NextFunction } from "express";
import cors from "cors";
import { createHealthRouter } from "./routes/health.routes";

// the server singleton, avoiding duplicate app instances
let server: Express | null = null;

export const createServer = (): Express => {
  if (server) return server;

  server = express();

  // middleware setup
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  // connecting frontend apps
  server.use(
    cors({
      origin: "http://localhost:5173", // frontend localhost
      credentials: true,
    }),
  );

  // routes
  server.get("/", (_req: Request, res: Response) => {
    res.send("server is running");
  });
  // checking health routes
  server.use("/v1", createHealthRouter());

  // route error handling
  server.use((_req: Request, res: Response) => {
    res.status(404).json({ message: "route not found" });
  });

  // error handling
  server.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error(error);
    res.status(500).json({
      message: "internal Server Error",
      ...(process.env["NODE_ENV"] === "development" && { error: error }),
    });
  });

  return server;
};
