import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!uri) {
  // During build time on Vercel, env vars might be missing. We don't want to crash the build.
  // Instead, we create a rejected promise so it fails gracefully at runtime if actually called.
  clientPromise = Promise.reject(new Error("Please add MONGODB_URI to your environment variables"));
} else if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;