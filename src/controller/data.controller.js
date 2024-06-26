const { data_Service } = require("../service")

const create_data =async(req,res) =>{
  try {

     const data = req.body

     const new_data = await data_Service.create_data_S(data)

     console.log(new_data);

      if (!new_data) {

        throw new Error("somthing waring...")

      }
     res.status(200).json({
            success: true,
            messgae:"createddd",
            data: new_data
        })
       
  } catch (error) {

    res.status(400).json({
        success: false,
        messgae:error.messgae
    })
   
    
  }
}
const get_data = async(req,res) => {
    try {
        const data_list = await data_Service.get_data_S()

        if(!data_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: data_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const delete_data = async(req,res) => {
    try {
        // service
        const id = req.params.id
        const result = await data_Service.delete_data(id)
        res.status(200).json({
            success:true,
            message:"Deeeleted"
        })
    } catch (error) {
        // res
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const update_data =async(req,res) =>{
    try {
         const id = req.params.data_id
         const data = req.body
         
         
         const result = await data_Service.update_data(id,data)

         if(!result){
             throw new Error("not updatedd")
         }

          res.status(200).json({
            success:true,
            message:"updated",
            data:data
          })

    } catch (error) {

        res.status(400).json({
            success:false,
            message:error.message,
            data:data
          })

        
    }

}




module.exports ={
    create_data,
    get_data,
    delete_data,
    update_data
}