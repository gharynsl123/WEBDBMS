function tahun(motor) {
    return motor <= 2001
}
function cc(motor) {
    return motor >= 150
}

function kendaraan(motor, callback) {
    let a = callback(motor)
    if(a){
        console.log(`motor ${motor} tidak perlu bayar pajak`)
    }else{
        console.log(`motor ${motor} harus bayar`)
    }
}

kendaraan(2002, tahun)