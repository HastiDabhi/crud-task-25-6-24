const { strim_Service } = require("../service")

const create_strim = async(req,res) =>{

    try {

          const  data =  req.body

          const new_strim = await strim_Service.create_strim_S(data)

          console.log(new_strim);

          if(!new_strim){
            throw new Error("somthing want waring..")

          }
        res.status(200).json({
            success: true,
            messgae:"createddd",
            data: new_strim
        })
        
    } catch (error) {

        res.status(401).json({
            success: false,
            messgae:error.messgae
        })
        
    }

}

const get_strim = async(req,res) => {
    try {
        // service <= services => DATA
        const strim_list = await strim_Service.get_strim_S()

        if(!strim_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: strim_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_strim =async(req,res) =>{
    try {
         const id = req.params.strim_id
         const data = req.body
         
         
         const result = await strim_Service.update_strim(id,data)

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

const delete_strim = async(req,res) => {
    try {
        // service
        const id = req.params.id
        const result = await strim_Service.delete_strim(id)
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








module.exports = {
    create_strim,
    get_strim,
    update_strim,
    delete_strim
}