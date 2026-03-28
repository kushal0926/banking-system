import { config } from "dotenv";
import { z } from "zod";
import path from "path";

// load enc files from only dev/test only
if (process.env["NODE_ENV"] !== "production") {
  config({
    path: path.resolve(process.cwd(), `.env.${process.env["NODE_ENV"] || "development"}.local`),
    quiet: true,
  });
}

// validating environment variables
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "staging", "production"]).default("development"),
  PORT: z.string().default("8026"),
  MONGODB_URL: z.string(),
});

export const env = envSchema.parse(process.env);
