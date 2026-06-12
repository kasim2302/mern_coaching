
const SpreadOperator = (frontend,backend) => {
     const FullStack = [...frontend,...backend]
     return FullStack
}
console.log(SpreadOperator( ["HTML", "CSS", "JavaScript"], ["Node.js", "MongoDB"]));
