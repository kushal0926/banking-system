import mongoose from "mongoose";
import { env } from "./env.config";

const MONGODB_URL = env.MONGODB_URL as string;

if (!MONGODB_URL) {
  throw new Error(
    "please define the mongodb uri in the environment variable inside .env.development.local",
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log(`🛢️ -> connected to database in ${env.NODE_ENV} mode`);
  } catch (error) {
    console.log("error connectiong to database", error);
    process.exit(1);
  }
};

export default connectToDatabase;
