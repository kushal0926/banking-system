import mongoose from "mongoose";
import { MONGODB_URI, NODE_ENV } from "./env.js";

if (!MONGODB_URI) {
  throw new Error(
    "please define the mongodb uri in the environment variable inside .env.development.local",
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log(`connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("error connectiong to database", error);
    process.exit(1);
  }
};

export default connectToDatabase;
