const { object_Service } = require("../service");

const create_object = async(req,res) =>{

    try {

          const  data =  req.body

          const new_object = await object_Service.create_object_S(data)

          console.log(new_object);

          if(!new_object){
            throw new Error("somthing want waring..")

          }
        res.status(200).json({
            success: true,
            messgae:"createddd",
            data: new_object
        })
        
    } catch (error) {

        res.status(401).json({
            success: false,
            messgae:error.messgae
        })
        
    }

}

const get_object = async(req,res) => {
    try {
        // service <= services => DATA
        const object_list = await object_Service.get_object_S()

        if(!object_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: object_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_object =async(req,res) =>{
    try {
         const id = req.params.object_id
         const data = req.body
         
         
         const result = await object_Service.update_object(id,data)

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

const delete_object = async(req,res) => {
    try {
        // service
        const id = req.params.id
        const result = await object_Service.delete_object(id)
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
    create_object,
    get_object,
    delete_object,
    update_object
    
}