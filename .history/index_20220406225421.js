const fs = require('fs');

// Blocking, synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = `This is what we knmow about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/ouput.txt', textOut);
console.log('File written'); 


// non blocking , asynchronous way
fs.readFile('./txt/start.txt')