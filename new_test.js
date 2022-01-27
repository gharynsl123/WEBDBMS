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

let indentitas = {
    firstName: 'Dias',
    lastName : 'Ustman',
    email : 'dias@test.com',
    instagram : 'utssrr',
    linkeding : 'diasutsman',
    phone : '(021) 123 4567',
    addres : {
        city : "bekasi",
        number :'17',
        street : "jalan bahagia",
    }
}

console.log('Nama Panjang saya ' + indentitas.firstName +indentitas.lastName + " Kalian Bisa Memanggil saya " + indentitas.firstName)

// console.table(indentitas)



let kendaraan = {
    kendaraan : {
        mobil : "peungeot",
        motor : "v-xion",
        seepeda : "united"
    },
    jalan : "jalan berkah",
    kota : "bekasi",
    platNomor : "jabodetabek",
    kereta : {
        namaKa : "argo Bromo anggrek",
        tujuan : "senen - pasar turi"
    }
}

console.table(kendaraan)