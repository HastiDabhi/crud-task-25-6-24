
const { def_Service } = require("../service");

const create_def =async(req,res) =>{
     try {
        //service => def create
       const  data = req.body
       const new_def = await def_Service.create_def_S(data)

       console.log(new_def);
    

        if(!new_def){
            throw new error("somthing went to warning.")
         }

         res.status(200).json({
            success :true,
            message:"def creacted successfully",
            data: new_def
         })
     } catch (error) {

         res.status(401).json({
            success:false,
            message:error.message
         })
        
     }
}


const get_def=async(req,res) =>{
    try {
       //service => servicess => data

       const def_list =  await def_Service.get_def_S()
       if(!def_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"def creacted successfully",
           data: def_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

 const delete_def = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await def_Service.delete_def(id)

       res.status(200).json({
        success:true,
        message:"deleteddd"
       })

         
    } catch (error) {
        
        res.status(400).json({
            success:false,
            message:error.message
           })
    
    }
     
 }

 const update_def =  async(req,res)=>{
   try {
       const id = req.params.def_id
       const data = req.body


       const result = await def_Service.update_def(id,data)

       if(!result){
        throw new Error("not updateddd")

       }

        res.status(200).json({
            success:true,
            message:"updatedd",
            data:data

        })
   } catch (error) {

    res.status(400).json({
        success:false,
        message:error.message,
    

    })

    
   }
 }

module.exports ={
    create_def,
    get_def,
    delete_def,
    update_def
}