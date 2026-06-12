import students from "./student.js"

const calculateTotalMarks = (...marks) => {
    const totalmarks = marks.reduce((total,mark)=> total + mark ,0)
    return totalmarks
}
console.log(students);

console.log(`Total Marks: ${calculateTotalMarks(80,67,89,56,45)}`);

