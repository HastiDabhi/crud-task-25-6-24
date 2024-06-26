const { on_Service } = require("../service");

const create_on =async(req,res) =>{
     try {
        //service => on create
       const  data = req.body
       const new_on = await on_Service.create_on_S(data)

       console.log(new_on);
    

        if(!new_on){
            throw new error("somthing went to warning.")
         }

         res.status(200).json({
            success :true,
            message:"on creacted successfully",
            data: new_on
         })
     } catch (error) {

         res.status(401).json({
            success:false,
            message:error.message
         })
        
     }
}


const get_on=async(req,res) =>{
    try {
       //service => servicess => data

       const on_list =  await on_Service.get_on_S()
       if(!on_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"on creacted successfully",
           data: on_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

 const delete_on = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await on_Service.delete_on(id)

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

 const update_on =  async(req,res)=>{
   try {
       const id = req.params.on_id
       const data = req.body


       const result = await on_Service.update_on(id,data)

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
    create_on,
    get_on,
    delete_on,
    update_on
}