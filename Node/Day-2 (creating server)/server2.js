const http = require("http");

const app = http.createServer((req, res) => {
  const status = 200;
  res.writeHead(status, { "content-type": "text/html" });

  res.write(
    `<h1 style="text-align:center;">Welcome to the node js server</h1>`
  );

  for (let i = 1; i <= 100; i++) {
    res.write(
      `<div style="background-color:red; height:${i}; width:${i}; margin-top:5px; margin-left:5px; float:left;"></div>`
    );
  }

  res.end();
});

const port = 4000;
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Server is running on port ${port}...!`);
});
