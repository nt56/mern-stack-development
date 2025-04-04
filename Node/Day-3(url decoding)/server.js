const http = require("http");
const url = require("url");

const url_link =
  "https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_fresh";
const data = url.parse(url_link, true);
console.log(data);

const app = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });

  res.write("<h1>Welcome to Node Js server</h1>");

  res.end();
});

const PORT = 5000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});
