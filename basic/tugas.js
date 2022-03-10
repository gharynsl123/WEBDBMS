


//!Global Scope

const type = 'HandPhone'
function Gadget(){
    console.log(type)
}
Gadget()

//!Local Scope

var game = 'classOfClans'
function localChange(){
    const game = 'classRoyal'
    console.log(game)
}

localChange()

//!Block Scope

var movie = 'justiceLeague'
function movieChange(){
    var movie = 'The Avengers'
    console.log(movie)
    if(true){
        movie = "The Suicide Squad"
    }
    console.log(movie)
}

movieChange()


//!closure

function nama(kelas, nama) {
    var text =   'kelas :'  + kelas
    return function() {
        console.log(text)
    }
}
var nama = nama('X RPL A')
nama()