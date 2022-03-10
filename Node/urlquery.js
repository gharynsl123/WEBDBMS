/**
 * URL Query String
 * 
 * Pasangan Antara key value yang ada di URL 
 * 
 * Contoh : url Google.com
 * 
 * dalam kasus ini :
 * q = key
 * rumasyo -= value
 * 
 * funsi ini adalah untuk mengirim data ke server dengan method GET
 */

const http = require('http')
const url = require("url");

const querystring = require("querystring");

const server = http.createServer((req, res)=>{
    let urlRequest,//Berisi path url di respone
    urlObject,//berisi url yang sudah di proses
    urlQuery, //berisi object dari query
    dataResponse

    res.setHeader("Content-Type", "application/json")
  
    urlRequest = req.url;
  
    // jadikan string urlRequest menjadi object URL
    urlObject = url.parse(urlRequest);
  
    console.log(urlObject)

    urlQuery = urlObject.query

    if (!urlQuery) {
      dataResponse = {
        data: "Query String Not Found",
      }
  
      // Kirim data ke klien
      return res.end(JSON.stringify(dataResponse))
    }
  

    dataResponse = querystring.parse(urlQuery)
    return res.end(JSON.stringify(dataResponse))
})

server.listen(2500)

