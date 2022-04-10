const fs = require("fs");
const http = require("http");
const url = require("url");

// /////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `This is what we knmow about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/ouput.txt", textOut);
// console.log("File written");

// non blocking , asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     if (err) return console.log('Error! 🎆');

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//         console.log(data3);
//         fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//             console.log('your file has been written 💕');
//             });
//         });
//   });
// });
// console.log('will read file!');

// /////////////////////
// SERVER
const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;
  if (pathName === "/overview" || pathName === "/") {
    res.end("This is the OVERVIEW");
  } else if (pathName ===  "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === '/api')

  

  res.end('API');
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end("<h1>page not found<h1>");
  }
});


server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
