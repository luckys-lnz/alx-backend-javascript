export default function getListStudentIds(students){
    // check if student is an array and not empty
    if (!Array.isArray(students) || students.length === 0){
        return []
    }
    // return student ids in the list
    return students.map(student=>student.id)
}