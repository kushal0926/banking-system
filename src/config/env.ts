import { config } from "dotenv"

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
  quiet: true,
})

// export environment variables
export const PORT: string = process.env.PORT || "8080";
export const NODE_ENV: string = process.env.NODE_ENV || "development";
export const MONGODB_URI: string = process.env.MONGODB_URI || "";