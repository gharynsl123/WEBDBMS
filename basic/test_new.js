//! indentifier
/**
 * Indentifier adalah penamaan variable, funsi ataupun paramete
 * karakter pertamanya hanya bosa huruf a-z, atau A-Z dan simbol underscore atau dollar
 * tidak boleh menggunakan angka di depan
 * tidak boleh menggunakan bahasa yang sudah ada default di js
 */

var rpl10
var Xrpl

//!statement
/**
 * statement adalah suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
 */

/**
 * let logtest = "hello world" //?statement dasar atau biasa
 * console.log(logtest)
 */


//!expression
/**
 * expression merupakan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu.
 */
/**
 * let first = 1
 * let second = 2
 * console.log(first + second)
 * if (first<2){
 * console.log("Nilai yang di tampung 'first' lebih kecil dari second " + second)
 * }else{
 * console.log(first + second)
 * }
*/

//!local scope
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */
//!global scope
/**
 * global scope merupakan cangkupan di seluruh file
 */
 /**
  * var a = 'Hallo rekan rekan'
 function first(){
 console.log(a)
 }
 first()



const a = 'mobil'
function kendaraan(){
    console.log(a)
    if (true){
        const b = 'motor'
        console.log(b)
    }
}
kendaraan()

var a = "pajeero"
function kendaraan(){
    console.log(a)
}
function mobil(){
    a = "peugeot"
    console.log(a)
}
kendaraan()
mobil()
  */




//!closure
/**
 * closure adalah cara mengakses variable dari parent scope di dalam child scope perent
 */


function hello(sapa) {
    var text = 'assalamualaikum ' + sapa
    return function(){
        console.log(text)
    }
}
var nama = hello('fulan')

nama()


