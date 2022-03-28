module.exports = (req, res, next)=>{
    //akan menampilkan data yang disaring oleh bodyParser
    console.log("METHOD", req.method)
    console.log("URL", req.phat)
    console.log("Headers", req.headers)
    next();
}