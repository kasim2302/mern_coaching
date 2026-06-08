const countchar = (str) => {
    let count = {}
    for(let char of str){
         if(count[char]){
            count[char] += 1
         }
         else{
            count[char] = 1
         }
    }
    return count
}
console.log(countchar("ggowtham"));
