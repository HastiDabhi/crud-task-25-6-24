const { data1_Service } = require("../service");

const create_data1 =async(req,res) =>{
  try {

     const data1 = req.body

     const new_data1 = await data1_Service.create_data1_S(data1)

     console.log(new_data1);

      if (!new_data1) {

        throw new Error("somthing waring...")

      }
     res.status(200).json({
            success: true,
            messgae:"createddd",
            data: new_data1
        })
       
  } catch (error) {

    res.status(400).json({
        success: false,
        messgae:error.messgae
    })
   
    
  }
}
const get_data1 = async(req,res) => {
    try {
        const data1_list = await data1_Service.get_data1_S()

        if(!data1_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: data1_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const delete_data1 = async(req,res) => {
    try {
        // service
        const id = req.params.id
        const result = await data1_Service.delete_data1(id)
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

const update_data1 =async(req,res) =>{
    try {
         const id = req.params.data_id
         const data = req.body
         
         
         const result = await data1_Service.update_data1(id,data)

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

    create_data1,
    get_data1,
    delete_data1,
    update_data1
    
}