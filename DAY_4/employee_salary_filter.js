//  const employees = [
//     { id: 1, name: "John", salary: 25000 },
//     { id: 2, name: "David", salary: 45000 },
//     { id: 3, name: "Sam", salary: 60000 }, 
//     { id: 4, name: "Peter", salary: 30000 } ];


// const employee_salary = (arr) => {
//    const filter_salary = arr.filter((employee) => {
//          return employee.salary > 40000
//    })
//    return filter_salary
// }   
// console.log(employee_salary([
//     { id: 1, name: "John", salary: 25000 },
//     { id: 2, name: "David", salary: 45000 },
//     { id: 3, name: "Sam", salary: 60000 }, 
//     { id: 4, name: "Peter", salary: 30000 } ]));

    const employee_salary = (arr) => {
        
        return arr.filter((employee) => employee.salary > 40000)
        .map( employees=> ({
           name: employees.name ,
           salary: employees.salary
        }))
    }

    console.log(employee_salary([
   { id: 1, name: "John", salary: 25000 },
   { id: 2, name: "David", salary: 45000 },
   { id: 3, name: "Sam", salary: 60000 },
   { id: 4, name: "Peter", salary: 30000 }
]));
 