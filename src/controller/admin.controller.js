const { admin_Service } = require("../service")

const create_admin_C =async(req,res) =>{
     try {
        //service => admin create
       const  data = req.body
       const new_admin = await admin_Service.create_admin_S(data)

       console.log(new_admin);
    

        if(!new_admin){
            throw new error("somthing went to warning.")
         }

         res.status(200).json({
            success :true,
            message:"admin creacted successfully",
            data: new_admin
         })
     } catch (error) {

         res.status(401).json({
            success:false,
            message:error.message
         })
        
     }
}


const get_admin_C=async(req,res) =>{
    try {
       //service => servicess => data

       const admin_list =  await admin_Service.get_admin_S()
       if(!admin_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"admin creacted successfully",
           data: admin_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

 const delete_admin = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await admin_Service.delete_admin(id)

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

 const update_admin =  async(req,res)=>{
   try {
       const id = req.params.admin_id
       const data = req.body


       const result = await admin_Service.update_admin(id,data)

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
    create_admin_C,
    get_admin_C,
    delete_admin,
    update_admin
}