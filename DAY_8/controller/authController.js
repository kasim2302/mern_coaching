
export const CreateData = (req,res) => {
    try {
        const {name,age} = req.body
        if(name === "Ravi"){
            res.status(201).json({
                msg: "Registration Successful"
            })
        }
        else{
            res.status(404).json({
                msg:"registration unsuccessful"
            })
        }
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({
            msg:"Internal server error"
        })
        
    }
}

export const Login = (req,res) => {
    try {
        const{email,password} = req.body
        if(email === "admin@gmail.com" && password === "12345"){
            res.status(200).json({
                msg: "Login Successful"
            })
        }
        else{
            res.status(404).json({
                msg: "Invalid Crendentials"
            })
        }
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({
            msg:"Internal Server error"
        })
    }
}


export const geyById = (req,res) => {
  try {
    const{id} = req.params
    res.status(200).json({
        success: true,
        id,
        msg:"user not found"
    })
  } catch (error) {
    console.log("Error",error);
    res.status(500).json({
        msg:"Internal Server error"
    })
    
  }  
    
}

export const Search = (req,res) => {
   try {
         const {name} = req.query
         res.status(200).json({
            success: true,
            Search: name,
            msg:"Search Completed"
         })
   } catch (error) {
    console.log("Error",error);
    res.status(500).json({
        msg:"Internal Server error"
    })
    
   }
    
}

export const StudentRegister = (req,res) => {
    try {
         const{name,course,city} = req.body   
        res.status(201).json({
            msg:"Registered Successfully",
            data: req.body,
        })
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({
            msg:"Internal server error"
        })
        
    }
    
}

