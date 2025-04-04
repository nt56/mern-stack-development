const http = require("http");

const app = http.createServer((req, res) => {
  res.write("Welcome to the node js server");

  res.end();
});

const port = 3000;
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});
