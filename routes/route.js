const {Router}=require("express")
const { User, connection } = require("../database/db.js");
const getUsers = require("../controller/user-controller.js")
 const addUser=require("../controller/user-controller.js")

const router = Router()

   
router.post("/add", async(req,res, next)=>{
  
    console.log(req.body)
    const users= new User({ ...req.body });
    res.setHeader("content-type","application/json")
   

        await users.save()
    res.send("done")
    
})
router.get("/all",async(req, res)=>{
    res.setHeader("content-type","application/json")
    try {
  
        const data =  await User.find({})
        console.log(data)
         return res.status(200).json(data)
       }catch(error){
         res.status(404).json(error) 
       
     }
    
})
router.get('/:id',async(req,res)=>{
    res.setHeader("content-type","application/json")
         console.log(req.params.id)
    try {
  
        const data =  await User.findOne({_id:req.params.id})
        console.log(data)
         return res.status(200).json(data)
       }catch(error){
         res.status(404).json(error) 
       
     }
         
})
router.put("/:id", async(req,res)=>{
    res.setHeader("content-type","application/json")
    const user = req.body
     console.log("1",user)
    const edditUser = new User(user)
    try {
         
          await User.updateOne({_id:req.params.id},edditUser)
          console.log("1",edditUser)
          return res.status(201).json(edditUser)
    } catch(error){
        res.status(409).json(error) 
    } 
})
 router.delete("/:id", async(req,res)=>{
    res.setHeader("content-type","application/json")
     try {
         await User.deleteOne({_id:req.params.id})
         return res.status(200).json("delete success")
     } catch(error){
         res.status(409).json(error) 
     }
 })

module.exports =router