const http = require("http");
const url = require("url");

const app = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });

  res.write("<h1>Welcome to Node Js server</h1>");

  const data = url.parse(req.url, true);
  console.log(data);

  if (data.pathname === "/about") {
    res.write("<h1>About Page</h1>");
  } else if (data.pathname === "/contact") {
    res.write("<h1>Contact Page</h1>");
  } else if (data.pathname === "/service") {
    res.write("<h1>Service Page</h1>");
  } else {
    res.write("<h1>Home Page</h1>");
  }

  res.end();
});

const PORT = 5000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});
