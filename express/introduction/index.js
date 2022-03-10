const express = require('express')
const app = express()
let port = 5000

app.get('/', (req, res)=>{res.send('<h1>hallo saya <br> belajar express</h1>')})
app.listen(port, function(){console.log(`Lagi Dengerin si port ${port}`)})