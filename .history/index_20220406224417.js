const fs = require('fs');

// Blocking
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we knmow about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/ouput.txt', textOut);
console.log('File written'); 