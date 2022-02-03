//Tipe Data Pada JS

/**
 * Tipe Data adlah karakteristik dari nilai sebuah data, di js terdapat
 * 7,
 * Null, undifined, boolean, number, bigInt, Striing dan symbol (es6).
 * dan tipe data kompleks object
 * 
 * loosely typed. yaitu variable tidak menentukan sebuah tipe data, melainkan
 * nilai yang menentukan tipe data tersbut
 */

//  let a = 'kamu'
//  let c = 2
 
//  let z = null
//  console.log(typeof c)

/**
 * tipe Data Undifined
 * tipe data yang niilainya kosong atau tidak di definisikan.
 */
 
// let a 

//  function first(params) {
//      a = 'ini functiioni pertama'
//      console.log(a)
//  }
 
//  function seacond(params) {
//      a = 'ini functiioni kedua'
//      console.log(a)
//  }
 
//  seacond()
//  first()

/**
 * tipe data null
 * tipe data primitiv yang nilainya juga kosong atau null.
 */

/**
 * number 
 * rentang nulain yang bisa di tampung oleh tipe data number yakni antara (2^53 - 1 )
 * dan 2^53 1 atau sammpai. jika sebuah number
 * memilki nilai lebih dari rentang ino, maka sebaiknya menggunakan tipe data BigInt
 */

/**
 * NaN atau Not a Number
 * Nan Merupakan Nilai Nemuric Yang memberitahu bahwa nilainya itu invalid number
 * atau bukan numbeer
 */

// let a = 17
// if (a >= 17){
//     a = 'Anda Belum Cukup Umur'
//     console.log(a/2)
// }else{
//     a = 'sudah Cukup'
//     console.log(a)
// }

/**
 * String
 * String merupakan tipe data yang menempung karakter. simbol, '', ``
 * 
 * "${data.number}"
 */

// let = 'fahmi baik'
// console.log(a.length)

// let kata = "helloworld"
// for (let i = 0; i<kata.length; i++){
//     console.log(kata[i])
// }

/**
 * Bolean
 * sebuah tipe data yang menentukan kebenaran, dan hanya memmiliki 2 nilai
 * yaitu true dan false
 */

// let belajar = true
// if (belajar){
//     console.log('Kelas ini sedang belajar')
// }

/**
 * Object
 * Object Ini merupakan tipe data komplek yang berisi props (properti)
 */

// let indentitas = {
//     firstName: 'Dias',
//     lastName : 'Ustman',
//     email : 'dias@test.com',
//     instagram : 'utssrr',
//     linkeding : 'diasutsman',
//     phone : '(021) 123 4567',
//     addres : {
//         city : "bekasi",
//         number :'17',
//         street : "jalan bahagia",
//     }
// }

// console.log('Nama Panjang saya ' + indentitas.firstName +indentitas.lastName + " Kalian Bisa Memanggil saya " + indentitas.firstName)

// console.table(indentitas)



// let kendaraan = {
//     kendaraan : {
//         mobil : "peungeot",
//         motor : "v-xion",
//         seepeda : "united"
//     },
//     jalan : "jalan berkah",
//     kota : "bekasi",
//     platNomor : "jabodetabek",
//     kereta : {
//         namaKa : "argo Bromo anggrek",
//         tujuan : "senen - pasar turi"
//     }
// }

// console.table(kendaraan)

// const mobil = 'peungeot'
// const motor = 'ninja'

// console.log('mobil saya adalah ' +mobil+ ' dan motor saya adalah ' + motor)
// console.log(`mobil saya adalah ${mobil} dan motor saya adalh ${motor}`)


//loosely typed languange

//shorthand names property
// let [a, b, c] = [hello, 2, 5]

//tenarary operator
// let a = 10 
// if(a < 10){
//     console.log('nilai A kurang dari sepuluh 10')
// }else{
//     console.log('Nilai a Lebih dari 10')
// }


/**
 * Function
 * Merupakan Sebuah Block Code Yang Di mana dia untuk membungkus sebuah proses penulisan code agar tidak diulang kembali
 */
//Function Biasa\
// function name(params) {
//     console.log("saya belajar Java Script")
// }
// name()

// //Anonymous Function
// const anon = function(params){
//     console.log(params)
// }
// anon('Saya Belajar JavaSrcipt')

// //arrow function

// let arrow = () => {
//     console.log('Ini adalah arrow function')
// }

// arrow()

/**
 * High Oerde Function
 * Fungsi Yang menerima argumen berupa fungsi lain serta return bisa berapa fungsi juga.
 */

//normal function

// function genap(number) {
//     return number % 2 ==0 
// }

// function print(number) {
//     let isTrue = genap(number)
//     if (isTrue){
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)
//     }
// }

// print(10)

//High Order Function
// function genap(number) {
//     return number % 2 ==0 
// }

// function print(number, callback) {
//     let isTrue = callback(number)
//     if (isTrue){
//         console.log(`${number} adalah bilangan genap`)
//     }else{
//         console.log(`${number} adalah bilangan ganjil`)
//     }
// }

// print(15, genap)

// function sport(mobil) {
//     return mobil >= 100
// }
// function warna(mobil) {
//     return mobil == 'merah'
// }

// function kendaraan(mobil, callback) {
//     let a = callback(mobil)
//     if(a){
//         console.log(`mobil dengan ${mobil} adalah mobil saya`)
//     }else{
//         console.log(`mobil dengan ${mobil} bukan mobil saya`)
//     }
// }

// kendaraan(1200, sport)

