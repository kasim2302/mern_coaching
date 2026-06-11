
const Student_Management_System = (arr) => {
    const student_data = arr.map(student => ({
        id: student.id,
        name: student.name,
        mark: student.mark
    }))
    const passed_students = arr.filter(student => student.mark >= 50)

    const find_student = arr.find(stu => stu.id === 3)

    const Total_marks = arr.reduce((total,name) => total + name.mark ,0)

    const Average_Marks = Total_marks / arr.length

    return {student_data,passed_students,find_student,Total_marks,Average_Marks}
}
console.log(Student_Management_System([ { id: 1, name: "Arun", mark: 85 }, { id: 2, name: "Karthik", mark: 45 }, { id: 3, name: "Vijay", mark: 92 }, { id: 4, name: "Ajay", mark: 35 } ]));
