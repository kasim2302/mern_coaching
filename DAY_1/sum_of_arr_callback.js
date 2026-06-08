const sumofarr = (arr,callback) => {
    let sum = 0
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i]
    }
    callback(sum)
}

sumofarr([1,2,3,4,5],(sum) =>{
    console.log("Sum of array:", sum);
    
})