const fs= require('fs')
const first = fs.readFileSync("./fst.txt")
const second = fs.readFileSync("./sec.txt")

fs.writeFileSync("./result.txt", `Here is my result = ${first} \n \n ${second}`,{flag: 'a'})

console.log('file write completed')