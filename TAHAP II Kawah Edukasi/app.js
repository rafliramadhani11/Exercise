// ============================ Rest Parameter
const sum = (...args) => {
    let result = 0

    args.filter(el => result = result + el) 

    console.log(`ini isi args`, ...args)
    console.log(`ini isi el`, el)

    return result

}

// ============================== Spread Operator
const number = [1,2,3]
const newNumber = [...number, 4,5]

console.log(newNumber)

//  ============================= Default Parameter
function Jumlah (a , b=88) {
    let hasil = a + b
    console.log(hasil)
    return hasil
}

Jumlah(10)