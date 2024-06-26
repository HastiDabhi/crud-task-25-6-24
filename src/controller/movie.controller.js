const { movie_Service } = require("../service")


const create_movie = async(req,res) =>{


    try {
        // Movie create in back-end
        // service
          
        const new_movie = await movie_Service.create_movie_S(req.body)

        res.status(200).json({
            success: true,
            data: new_movie
        })
    } catch (error) {
        // try block error response 
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

const delete_movie =async(req,res) =>{

    try {
        //servicee

        const id = req.params.id
        const result = await movie_Service.delete_movie(id)

        res.status(200).json({
            success:true,
            message:"deleteddddd"
        })
    } catch (error) {

         res.status(400).json({
            success:false,
            message:error.message
         })
        
    }

}


const update_movie =async(req,res) =>{
    try {
         const id = req.params.movie_id
         const data = req.body
         
         
         const result = await movie_Service.update_movie(id,data)

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


 const get_movie =async(req,res) =>{
    try {
         const get_list = await movie_Service.get_movie()
        
         if(!get_list){
               throw new Error("data not found")
          }

           res.status(200).json({
            success:true,
            data: get_list
           })
    } catch (error) {
        res.status(400).json({
            success:false,
            massage:error.message
           })
    }
 }

module.exports = {
    create_movie,
    delete_movie,
    update_movie,
    get_movie
}
