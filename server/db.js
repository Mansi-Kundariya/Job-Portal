import mongoose from "mongoose";

const db_connection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database connected successfully !!");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB Atlas:", err);
    });
};

export default db_connection;
