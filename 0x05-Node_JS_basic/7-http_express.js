const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
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

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseLines = ['This is the list of our students'];

  countStudents(databaseFilePath)
    .then((studentReport) => {
      responseLines.push(studentReport);
      res.status(200).type('text/plain').send(responseLines.join('\n'));
    })
    .catch((error) => {
      responseLines.push(error.message);
      res.status(200).type('text/plain').send(responseLines.join('\n'));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
