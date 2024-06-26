const { abc_Service } = require("../service");

const create_abc =async(req,res) =>{
     try {
        //service => abc create
       const  data = req.body
       const new_abc = await abc_Service.create_abc_S(data)

       console.log(new_abc);
    

        if(!new_abc){
            throw new error("somthing went to warning.")
         }

         res.status(200).json({
            success :true,
            message:"abc creacted successfully",
            data: new_abc
         })
     } catch (error) {

         res.status(401).json({
            success:false,
            message:error.message
         })
        
     }
}


const get_abc=async(req,res) =>{
    try {
       //service => servicess => data

       const abc_list =  await abc_Service.get_abc_S()
       if(!abc_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"abc creacted successfully",
           data: abc_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

 const delete_abc = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await abc_Service.delete_abc(id)

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

 const update_abc =  async(req,res)=>{
   try {
       const id = req.params.abc_id
       const data = req.body


       const result = await abc_Service.update_abc(id,data)

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
    create_abc,
    get_abc,
    delete_abc,
    update_abc
}