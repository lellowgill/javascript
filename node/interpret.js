/* console.log('Hello World')*/
// a module is a library/modules are code stored in another place to use

// http is a built in internal module
const http = require('http');
const myImportedModule = require('./mymodule')
const cow = require('cowsay');

// Which computer, where, are my files being hosted from???
// Think of this like your house aka  my computer 
const hostname = "127.0.0.1";

// The exact room within the house aka my computer
// YOu cannot serve up  from the same port
const port = 3000;

// Let's use the http module to create ther server 
const server = http.createServer((req, res) => {
    res.statueCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end(myImportedModule.colors.primary);
});

server.listen(port, hostname, () => {
    console.log(cow.say({
        text: `Server running at http://${hostname}:${port}/`
    }));
});

/**
 * 1) How to find packages/modules/libraries
 * 2) How to use then 
 * 3) How to create my own modules 
 * moment 
 */