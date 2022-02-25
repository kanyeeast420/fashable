import { MongoClient, Db } from "mongodb";
import url from "url";

let cachedDb: Db;

export async function connectToDb(uri = <string>process.env.DATABASEURI) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const db = await client.db(url.parse(uri).pathname?.substr(1) as string);

  console.log("Connected To DB");

  cachedDb = db;
  return db;
}
