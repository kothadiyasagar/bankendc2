const { User, connection } = require("../database/db.js");
  const addUser = (req, res)=>{
    // const user = req.body
    // let  newUser = await new User({...req.body})
     console.log(req.body)
     
    //   res.json(await newUser.save()); 
    //   console.log(await newUser.save())
    // res.status(201).json(newUser)
    // } catch(error){
    //     res.status(409).json({massage:error.massage}) 
    // }
}

module.exports =addUser

// const  getUsers = async(req,res)=>{
//   try {
  
//    const users =  await User.find({})
//    res.status(200).json(users)
//   }catch(error){
//     res.status(404).json(error) 
//   }

// }
// module.exports=getUsers