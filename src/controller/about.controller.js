const { about_Service } = require("../service");

const create_about =async(req,res) =>{
     try {
        //service => about create
       const  data = req.body
       const new_about = await about_Service.create_about_S(data)

       console.log(new_about);
    

        if(!new_about){
            throw new error("somthing went to warning.")
         }

         res.status(200).json({
            success :true,
            message:"about creacted successfully",
            data: new_about
         })
     } catch (error) {

         res.status(401).json({
            success:false,
            message:error.message
         })
        
     }
}


const get_about=async(req,res) =>{
    try {
       //service => servicess => data

       const about_list =  await about_Service.get_about_S()
       if(!about_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"about creacted successfully",
           data: about_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

 const delete_about = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await about_Service.delete_about(id)

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

 const update_about =  async(req,res)=>{
   try {
       const id = req.params.about_id
       const data = req.body


       const result = await about_Service.update_about(id,data)

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
    create_about,
    get_about,
    delete_about,
    update_about
}