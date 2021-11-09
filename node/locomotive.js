const http = require('http');
const myImportedModule = require('./locomotive_npm.js')
const locomotive = require('locomotive-scroll');


const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.statusHeader = ('Content-Type', 'text/plain');
        res.end(myImportedModule.color.primary);
    })
    /** 
     * MEDIUM
     * Write a program that prompts the user for a domain name
     * looks up the IP address for the domain, and prints it out.
     */
server.listen(port, hostname, () => {
    console.log(locomotive({
        text: 'Server running at http://${hostname}:${port}/'
    }))
});