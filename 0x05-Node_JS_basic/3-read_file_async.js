const fs = require("fs");

const countStudents = (path) => {
  try {
    // Read the file synchronously
    const datar = fs.readFileAsync(path, "utf-8");
  } catch (e) {}
};
