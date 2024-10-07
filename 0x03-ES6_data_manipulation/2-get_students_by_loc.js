// import getListStudents from "./0-get_list_students"

const getStudentsByLocation = (students, city) => {
  //  filter() method to iterate through the list
  return students.filter((student) => student.location === city);
};

export default getStudentsByLocation;
