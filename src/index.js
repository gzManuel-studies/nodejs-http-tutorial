const http = require('http');
const host = 'localhost';
const port = '8000';

const htmlFileListener = require('./htmlFile');

const requireListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(htmlFileListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
