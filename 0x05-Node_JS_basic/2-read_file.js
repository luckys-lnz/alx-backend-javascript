#!/usr/bin/env node

const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously
        const datar = fs.readFileSync(path, 'utf-8');

        // Split the content into lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Ensure there's at least a header and one student record
        if (lines.length < 2) {
            console.log('Number of students: 0');
            return;
        }

        // Extract the headers and student records
        const [header, ...records] = lines;

        // Parse student records into an array of objects
        const students = records.map((line) => {
            const [firstname, lastname, age, field] = line.split(',');
            return { firstname, lastname, age, field };
        });

        // Count total students
        console.log(`Number of students: ${students.length}`);

        // Group students by field and log the required information
        const fields = {};
        students.forEach((student) => {
            if (!fields[student.field]) {
                fields[student.field] = [];
            }
            fields[student.field].push(student.firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        // Throw error if the file cannot be read
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
