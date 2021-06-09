const express = require('express');

const app = express();

app.use("/users/", require("./routes/usersRoute"))

app.get("/", (req,res)=>{
    res.send("Express")
})

app.listen(3001, ()=>{
    console.log("3001 portu çalışıyor");
})