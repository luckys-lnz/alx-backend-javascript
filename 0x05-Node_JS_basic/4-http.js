const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

// Create the HTTP server
const server = http.createServer();

server.on('request', (_, response) => {
  const message = 'Hello Holberton School!';

  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', message.length);
  response.statusCode = 200;
  response.write(Buffer.from(message));
  response.end();
});

// Start the server and log its listening address
server.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = server;
