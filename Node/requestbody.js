/**
 * 
 * Request Body 
 * Kita akan menampilkan cara untuk menampilkan atau membaca request body pada server
 * 
 * teerdapat 2 bentuk transaksi data antara cliend dan server:
 * uplaoud : mengirim data dari klieen ke server
 * download :menerima Data dari server ke client
 * 
 * 
 * 
 * Strem yaitu keegiatan transaksi dari awal sampe selesai , meliputi :
 * 1. mulai inisiasi data ke tujuan
 * 2. pemisah data yang akan dikiriim menjadi bagian keciil (chuk)
 * 3. Pengiriman Data Berbentuk chunk ke tujuan diseebut dengan buffering
 * 4. kalau done dibuffer semua, proses data agar utuh lagi.
 * 
 * 
 */

const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req, res)=>{
    let urlRequest, //urlReq berupa string berisi path url di request
    methodRequest,//methodReq berupa string berisi jenis method pada request
    dataRequest

    const chunkA= []
    const dataResponse = {}

    res.setHeader("Content-Type", "application/json")

    urlRequest = req.url
    methodRequest = req.method?? "get"

    if(urlRequest.toLowerCase() === "/login"){
        if (methodRequest.toLowerCase() === "get"){
            dataResponse.data = "This Is Login View Page"
        }else if(methodRequest.toLowerCase() === "post"){
            //buffereing data body
            req.on("data", (chunk)=>{
                chunkA.push(chunk) //maka akan menambahkan data chunk ke chunkA
            })
        }else{
            dataResponse.data = "Change Method to Get or Post Method"
        }
    }else{
        dataResponse.data = "Use endpoint /Login"
    }

    req.on("end", ()=>{
        if(chunkA.length !== 0){
            dataRequest = Buffer.concat(chunkA).toString()
            console.log(dataRequest)

            let requestObject = querystring.parse(dataRequest)

            dataResponse.data = requestObject
        }
        return res.end(JSON.stringify(dataResponse))

    })


})

server.listen(2500)