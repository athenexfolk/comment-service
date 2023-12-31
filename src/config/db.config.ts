import mongoose from "mongoose";

const DB_HOST = "127.0.0.1";
const DB_PORT = "27017";
const DB_NAME = "comment";

const connectDatabase = async () => {
  const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
  await mongoose
    .connect(connectionString)
    .then(() => {
      console.info(`Connected to DB with ${connectionString}`);
    })
    .catch(console.error);
};

export default connectDatabase;