const greet = (name) => {
    const username = name ?? "Guest"
    return `Hello ${username}`
}
console.log(greet(null))
console.log(greet(undefined));
console.log(greet("Ravi"));

