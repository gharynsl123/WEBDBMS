/**
 * Task 30 Menit terakhir
 */

const ananda = require('http');


const gharyn = ananda.createServer((req, res) =>{
    let url, dataResponse, method

    res.setHeader("Content-Type", "application/json");
    url = req.url

    method = req.method ?? "get"

    if(url.toLocaleLowerCase === "/"){
        dataResponse = {
            data: "Selamat Datang Di HomePage Kami"
        }
    }else if (url.toLocaleLowerCase === "/about"){
        dataResponse = {
            data:"Berhasil Masuk Ke About"
        }
    }else if (url.toLocaleLowerCase === "/form"){
        if (method === "POST") {
            dataResponse = {
                data: " Anda Berhasil Masuk Ke Form Dengan Menggunakan Method POST"
            }
        } else {
            dataResponse = {
                data: `Maaf Coba kemabli, Dan Ubah Mehthod ${method}, Menjadi POST`
            }
        }
    }else {
        dataResponse = {
            data:"Page no Found {404}"
        }
    }
})

gharyn.listen(3500);
