/**
 * Core Modul : Http
 * Kita akan membuat server Menggunakan Module Http
 */

const http = require("http")

const server = http.createServer((req, res) => {
    //inisialisasi variable yang akan digunakan 
    let data;

    console.log(req)

    /**
     * object request banyak, tapi yang sering di pakai hanya 3 yaitu
     * - URL
     * - METHOD
     * - Headers.
     */
    // Create Object yang berisi Url, method dan header

    data = {
        url: req.url,
        method: req.method,
        header: req.headers
    }

    //ini Akan Mengubah Set Responsee Menjadi Berupa Data JSON
    res.setHeader("content-type", "application/json")
    //Convert Data To String
    res.end(JSON.stringify(data))
})

server.listen(5000)