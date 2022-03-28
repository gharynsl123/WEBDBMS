// const express = require("express");
// const app = express();


// app.get('/', (req, res)=>{res.send('Hello ini kofigurasi express')})

// app.listen(port, function(){console.log(`Dengerin lagi si ${port}`)})

require("dotenv").config();
let port = 5000
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    //membuat kondisi
    let status = process.env.PORT == 5000? "Production" : "Development"
    res.send(`Hello ! anda sedang di : ${status} page`);
});

app.listen(process.env.PORT, function(){
    console.log(`Anda menggunakan port : ${process.env.PORT}`)
});

