const fs = require("fs");

/**
 * Counts the students in a CSV data file.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise} Resolves with `true` after processing the file, rejects with an error if the file cannot be read.
 */
const countStudents = (filePath) =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, fileContent) => {
      if (error) {
        reject(new Error("Cannot load the database"));
        return;
      }

      if (fileContent) {
        const lines = fileContent.trim().split("\n");
        const studentsByField = {};
        const columnHeaders = lines[0].split(",");
        const studentAttributes = columnHeaders.slice(
          0,
          columnHeaders.length - 1
        );

        for (const line of lines.slice(1)) {
          const studentData = line.split(",");
          const attributeValues = studentData.slice(0, studentData.length - 1);
          const fieldOfStudy = studentData[studentData.length - 1];

          if (!Object.keys(studentsByField).includes(fieldOfStudy)) {
            studentsByField[fieldOfStudy] = [];
          }

          const studentRecord = studentAttributes.map((attribute, index) => [
            attribute,
            attributeValues[index],
          ]);
          studentsByField[fieldOfStudy].push(Object.fromEntries(studentRecord));
        }

        const totalStudents = Object.values(studentsByField).reduce(
          (total, students) => total + students.length,
          0
        );
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, students] of Object.entries(studentsByField)) {
          const studentNames = students
            .map((student) => student.firstname)
            .join(", ");
          console.log(
            `Number of students in ${field}: ${students.length}. List: ${studentNames}`
          );
        }

        resolve(true);
      }
    });
  });

module.exports = countStudents;
