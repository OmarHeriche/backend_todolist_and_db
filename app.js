//? importing section :
const express = require("express");
const from_routes=require("./routes/task");

const app=express();                //! hadi t9isha tmoute wlidou :)

//? middle wear functions :
app.use("/api/v1/tasks", from_routes);



const port=3000;
app.listen(port,()=>{
    console.log(`my server is listening on port: ${port}`);
})