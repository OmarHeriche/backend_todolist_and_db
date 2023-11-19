//? importing section :
const express = require("express");
const from_routes = require("./routes/task");
const connectDb = require("./db/connect");
require('dotenv').config();

const app = express(); //! hadi t9isha tmoute wlidou :) ;

//? middle wear functions :
app.use(express.json());
app.use("/api/v1/tasks", from_routes);
app.use(express.static("./public"));



const port = 3000;
const start = async () => {
  try {
    await connectDb(process.env.url);
    app.listen(port, () => {
      console.log(`my server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();