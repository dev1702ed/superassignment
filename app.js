const express = require('express');
const pg = require('pg');
const app = express();

app.listen(3000, ()=>{
    console.log("up and running");
})

const Router = require("./router/routes");
app.use("/",Router);


