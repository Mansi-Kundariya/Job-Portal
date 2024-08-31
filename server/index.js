import express from "express";
import dotenv from "dotenv";
import db_connection from "./db.js";

dotenv.config();
const app = express();

// database configuration
db_connection();

app.listen(process.env.PORT, () => {
    console.log('Server started on port');
    console.log(':'+process.env.PORT);
});