const os = require('os')
const fs = require('fs')
const crypto = require('crypto')
const data = require('./data')

const value = os.userInfo()

const userdata = data("Prograd",2021,"BTECH");

const password = crypto.createHmac('sha256','secret').update('Prograd').digest('hex');

fs.appendFileSync("message.txt","Prograd Details: \n")

fs.appendFileSync("message.txt",`\tUserId=>   ${value.uid},\n`)
fs.appendFileSync("message.txt",`\tName=>   ${userdata.name},\n`)
fs.appendFileSync("message.txt",`\tYear=>   ${userdata.Year},\n`)
fs.appendFileSync("message.txt",`\tQualification=>   ${userdata.Qualification},\n`)
fs.appendFileSync("message.txt",`\tUsername=>   ${value.username},\n`)
fs.appendFileSync("message.txt",`\tPassword=>   ${password},\n`)

// console.log(value.uid)
// console.log(userdata.name)
// console.log(userdata.Year)
// console.log(userdata.Qualification)
// console.log(value.username)
// console.log(password)