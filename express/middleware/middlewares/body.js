//function cek object jika kosong
function isEmptyObject(obj) {
    return !obj || Object.keys(obj).length === 0;
}

module.exports = (req, res, next) => {
    //jika object req body kosong, maka akan skip middleware ini
    if (isEmptyObject(req.body)) next(router);

    console.log("BODY", req.body)
    next();
}