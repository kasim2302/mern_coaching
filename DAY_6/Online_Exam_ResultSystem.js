





const OnlineExamResultSystem = (students) => {
 
    console.log("Student Details:");

    students.forEach(student => {
    console.log(`${student.name} - ${student.marks}`); 
    })
    console.log("-----------------------------------------");
    console.log("Total Marks of Students:");
    
     students.forEach(student => {
        const total = student.marks.reduce((sum,mark)=>{
           return sum + mark
        },0)
        console.log(`${student.name} Total = ${total}`);
        
    })

    console.log("------------------------------------------");
    console.log("Average Marks of Students:");

    students.forEach(student => {
         const total = student.marks.reduce((sum,mark)=>{
           return sum + mark
        },0)

        const Average = total / student.marks.length

        console.log(`${student.name} Average Marks:${Average}`);
        
    })

    let topper = students[0]
    let highest_total = topper.marks.reduce((sum,mark) => sum + mark ,0)
      
    students.forEach(student => {
        const total = student.marks.reduce((sum,mark) => {
            return sum + mark 
        },0)

        if(total > highest_total){
            highest_total = total
            topper = student
        }
      
    })
    console.log("-----------------------------------------");
    
      console.log("Topper List:");
      
      console.log("Topper:", topper.name)
      console.log("Total Marks:", highest_total)
 
      console.log("--------------------------------------");
      
    students.forEach(student => {
        const status = student.marks.every(mark => mark >= 50) ? "pass" : "fail"
        console.log(`${student.name} : ${status}`);
        
    })  
    

}

OnlineExamResultSystem([
    { id: 1, name: "Ravi", marks: [80, 70, 90,78,98] },
    { id: 2, name: "Priya", marks: [60, 50, 70,79,97] },
    { id: 3, name: "Arun", marks: [30, 40, 35,87,69] },
    { id: 4, name: "Divya", marks: [95, 90, 98,87,90] }
])