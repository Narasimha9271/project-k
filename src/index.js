//whenver connecting to a Database must use "try-catch" ans "async-await"

//require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log(err);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed!!!", err);
  });

/*import express  from "express";
const app = express();

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

(async () => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    app.on("error",(err)=>{
      console.log(err);
      throw err;
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening ar ${process.env.PORT}`)
    })

  }catch(err){
    console.log(err)
    throw err
  }
})()*/
