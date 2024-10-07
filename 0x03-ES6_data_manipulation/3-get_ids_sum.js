const getStudentIdsSum = (students) => {
  // sum student ids using reduce()
  return students.reduce((sum, student) => sum + Number(student.id), 0);
};

export default getStudentIdsSum;
