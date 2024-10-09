// import getListStudents from "./0-get_list_students"

export default function getStudentsByLocation(students, city) {
  //  filter() method to iterate through the list
  return students.filter((student) => student.location === city);
}
