const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const userdata = require('./userdata')

const port = 3000;
const host = 'localhost';
const app = express()

console.log(userdata);
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json')
    res.end('hey im server ')
    // +JSON.stringify(userdata))
})
server.listen(port,host, () => {
    console.log(`server running at http://${host}:${port} `);
})