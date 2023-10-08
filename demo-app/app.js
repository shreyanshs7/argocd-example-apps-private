// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, Docker World!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('Deployed new changes');
});
