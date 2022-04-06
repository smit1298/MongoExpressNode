const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we knmow about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./text/ou')