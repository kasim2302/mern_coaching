const find_user = (arr) => {
    const find_emp=  arr.find((emp) => emp.id === 2)
    return({ id: find_emp.id,
        name: find_emp.name})
       
  
}
console.log(find_user( [ { id: 1, name: "Sudhan" }, { id: 2, name: "Kumar" }, { id: 3, name: "Ravi" } ]));
    