import mongoose from "mongoose";

const db_connection = () => {
  const mongodbUri = process.env.MONGODB_URI

  if(!mongodbUri) throw new Error('MONGODB_URI environment variable is not defined')

  mongoose
    .connect(mongodbUri)
    .then(() => {
      console.log("Database connected successfully !!");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB Atlas:", err);
    });
};

export default db_connection;
