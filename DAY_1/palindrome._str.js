const palindrome_str = (str,callback) => {
    let reversed = ""
    for(let i = str.length - 1 ; i >= 0 ;i--){
         reversed += str[i]
    }
    callback(str === reversed)
}

palindrome_str("mam",(result) => {
   console.log(result ? " palindrome":"not palindrome");
   
})


