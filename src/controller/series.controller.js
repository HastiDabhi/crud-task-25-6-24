const { series_Service } = require("../service")

const create_series =async(req,res) =>{
    try {
          // servicee
         
          const data = req.body

          const new_series = await series_Service.create_series(data)

          if(!new_series){

            throw new error("note created")

          }

          res.status(200).json({
            success:true,
            message:"created",
            data:new_series
          })
    } catch (error) {

         res.status(400).json({
            success:false,
            message:error.message
         })
        
    }
}


const get_series =async(req,res) =>{
    try {
         //servicee


         if(!list){
             throw new error("noit found")

         }

          res.status(200).json({
            success:true,
            message:"list found",
            data : list
          })
        
    } catch (error) {
         res.status(400).json({
            success:false,
            message:error.message
         })
        
    }
}

 const delete_series = async(req,res) =>{

     try {
         //servicee

         const id = req.params.id

         const result = await series_Service.delete_series(id)

         res.status(200).json({
            success:true,
            message:"deleted"
         })
     } catch (error) {
         res.status(400).json({
            success:false,
            message:error.message
         })
     }

 }
 
 const check_series = async(req,res) =>{

    try {
         const name = req.body.series_name

         const result = await series_Service.check_series(name)

         if(!result){
            throw new Error("data does not exits")
         }
          res.status(200).json({
            success:true,
            message:"data found",
            data:result
          })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
            
          })
  
    }

 }


module.exports ={
    create_series,
     get_series,
     delete_series,
     check_series
}