import fs from 'fs'


const json = fs.readFileSync('human_data.json').toString()

const json2 = JSON.parse(JSON.parse(json))
console.log(Object.keys(json2))
console.log(typeof json2)