const { user_Service } = require("../service")

const create_user_C = async(req,res) => {
    try {
        // service => admin create
        const data = req.body
        const new_admin = await user_Service.create_user_S(data)

        console.log(new_admin)
       
        if(!new_admin){
            throw new Error("Something went wrong")
        }

        res.status(200).json({
            success: true,
            message:"Admin created successfully",
            data: new_admin
        })

    } catch (error) {
        // !admin
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

const get_user_C = async(req,res) => {
    try {
        // service <= services => DATA
        const user_list = await user_Service.create_user_S()

        if(!user_list){
            throw new Error("Data not found")
        }

        res.status(200).json({
            success: true,
            data: user_list
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const delete_user = async(req,res) => {
    try {
        // service
        const id = req.params.id
        const result = await user_Service.delete_user(id)
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

const update_user =async(req,res) =>{
    try {
         const id = req.params.user_id
         const data = req.body
         
         
         const result = await user_Service.update_user(id,data)

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
    create_user_C,
    get_user_C,
    delete_user,
    update_user
}