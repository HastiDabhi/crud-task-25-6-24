const { size_Service } = require("../service");

const create_size =async(req,res) =>{
     try {
        //service => size create
       const  data = req.body
       const new_size = await size_Service.create_size_S(data)

       console.log(new_size);
    

        if(!new_size){
            throw new error("somthing went to warning.")
         }

         res.status(200).json({
            success :true,
            message:"size creacted successfully",
            data: new_size
         })
     } catch (error) {

         res.status(401).json({
            success:false,
            message:error.message
         })
        
     }
}


const get_size=async(req,res) =>{
    try {
       //service => servicess => data

       const size_list =  await size_Service.get_size_S()
       if(!size_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"size creacted successfully",
           data: size_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

 const delete_size = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await size_Service.delete_size(id)

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

 const update_size =  async(req,res)=>{
   try {
       const id = req.params.size_id
       const data = req.body


       const result = await size_Service.update_size(id,data)

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
    create_size,
    get_size,
    delete_size,
    update_size
}