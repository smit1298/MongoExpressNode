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
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview-html`, "utf-8");
const tempCard = fs.readFileSync(`${__dirname}/templates/template-overview-html`, "utf-8");
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview-html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);


  // overview page
  const pathName = req.url;
  if (pathName === "/overview" || pathName === "/") {


    res.end("This is the OVERVIEW");

    // product page
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");

    // api page
  } else if (pathName === "/api") {    
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);    
  }


  // Not found
   else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world"
    });
    res.end("<h1>page not found<h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
