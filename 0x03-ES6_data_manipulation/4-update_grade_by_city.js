/**
 * Create a function updateStudentGradeByCity that returns an array
    of students for a specific city with their new grade
    It should accept a list of students (from getListStudents), a city (String),
    and newGrades (Array of “grade” objects) as parameters.
    If a student doesn’t have grade in newGrades, the final grade should be N/A.
    You must use filter and map combined.

 * @param {*} students 
 * @param {*} city 
 * @param {*} newGrades 
 * @returns N/A, If a student doesn’t have grade in newGrades
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return {
        ...student,
        // Add grade or 'N/A' if no grade is found
        grade: gradeObject ? gradeObject.grade : "N/A",
      };
    });
}
