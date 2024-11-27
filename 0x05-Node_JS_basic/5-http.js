const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const server = http.createServer();
const databaseFilePath = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise<String>} A promise that resolves with the student report or rejects with an error.
 */
const countStudents = (filePath) =>
  new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(filePath, (error, fileContent) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const reportLines = [];
      const lines = fileContent.toString('utf-8').trim().split('\n');
      const studentsByField = {};
      const headers = lines[0].split(',');
      const studentAttributes = headers.slice(0, headers.length - 1);

      for (const line of lines.slice(1)) {
        const studentData = line.split(',');
        const attributeValues = studentData.slice(0, studentData.length - 1);
        const field = studentData[studentData.length - 1];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        const studentRecord = studentAttributes.map((attribute, index) => [
          attribute,
          attributeValues[index],
        ]);
        studentsByField[field].push(Object.fromEntries(studentRecord));
      }

      const totalStudents = Object.values(studentsByField).reduce(
        (sum, students) => sum + students.length,
        0
      );
      reportLines.push(`Number of students: ${totalStudents}`);

      for (const [field, students] of Object.entries(studentsByField)) {
        const studentNames = students.map((student) => student.firstname).join(', ');
        reportLines.push(
          `Number of students in ${field}: ${students.length}. List: ${studentNames}`
        );
      }

      resolve(reportLines.join('\n'));
    });
  });

const routeHandlers = [
  {
    route: '/',
    handler(_, response) {
      const message = 'Hello Holberton School!';
      response.setHeader('Content-Type', 'text/plain');
      response.setHeader('Content-Length', message.length);
      response.statusCode = 200;
      response.write(Buffer.from(message));
      response.end();
    },
  },
  {
    route: '/students',
    handler(_, response) {
      const responseLines = ['This is the list of our students'];

      countStudents(databaseFilePath)
        .then((studentReport) => {
          responseLines.push(studentReport);
          const fullResponse = responseLines.join('\n');
          response.setHeader('Content-Type', 'text/plain');
          response.setHeader('Content-Length', fullResponse.length);
          response.statusCode = 200;
          response.write(Buffer.from(fullResponse));
          response.end();
        })
        .catch((error) => {
          responseLines.push(error.message);
          const errorResponse = responseLines.join('\n');
          response.setHeader('Content-Type', 'text/plain');
          response.setHeader('Content-Length', errorResponse.length);
          response.statusCode = 200;
          response.write(Buffer.from(errorResponse));
          response.end();
        });
    },
  },
];

server.on('request', (request, response) => {
  const matchingHandler = routeHandlers.find((handler) => handler.route === request.url);

  if (matchingHandler) {
    matchingHandler.handler(request, response);
  } else {
    response.statusCode = 404;
    response.end('Not Found');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = server;
