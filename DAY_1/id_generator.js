const id_generator = () => {
    let id = 0

    return () => {
        id++
        return id
    }
}
const getid = id_generator()

console.log(getid());
console.log(getid());
console.log(getid());


