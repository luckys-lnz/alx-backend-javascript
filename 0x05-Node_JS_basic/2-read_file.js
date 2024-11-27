const fs = require("fs");

/**
 * Counts the students in a CSV data file.
 * @param {String} filePath The path to the CSV data file.
 * @throws Will throw an error if the file does not exist or is not a valid file.
 */
const countStudents = (filePath) => {
  // Check if the file exists and is valid
  if (!fs.existsSync(filePath)) {
    throw new Error("Cannot load the database");
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error("Cannot load the database");
  }

  // Read and parse the CSV file
  const fileContent = fs.readFileSync(filePath, "utf-8").trim();
  const fileLines = fileContent.split("\n");

  // Extract column headers and initialize student groupings
  const columnHeaders = fileLines[0].split(",");
  const studentAttributes = columnHeaders.slice(0, columnHeaders.length - 1);
  const studentsByField = {};

  // Process each student record
  for (const line of fileLines.slice(1)) {
    const studentData = line.split(",");
    const studentDetails = studentData.slice(0, studentData.length - 1);
    const fieldOfStudy = studentData[studentData.length - 1];

    // Initialize field group if not already present
    if (!Object.keys(studentsByField).includes(fieldOfStudy)) {
      studentsByField[fieldOfStudy] = [];
    }

    // Create a student object from attributes and values
    const studentRecord = studentAttributes.map((attribute, index) => [
      attribute,
      studentDetails[index],
    ]);
    studentsByField[fieldOfStudy].push(Object.fromEntries(studentRecord));
  }

  // Calculate and log the total number of students
  const totalStudentCount = Object.values(studentsByField).reduce(
    (total, students) => total + students.length,
    0
  );
  console.log(`Number of students: ${totalStudentCount}`);

  // Log the number of students and their names in each field
  for (const [field, students] of Object.entries(studentsByField)) {
    const studentNames = students
      .map((student) => student.firstname)
      .join(", ");
    console.log(
      `Number of students in ${field}: ${students.length}. List: ${studentNames}`
    );
  }
};

module.exports = countStudents;
