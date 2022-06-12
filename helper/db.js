import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://malang:freewolf@cluster0.x0oeb.mongodb.net/authinnextjs?retryWrites=true&w=majority"
  );
  return client;
}
