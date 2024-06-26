const { episode_Service } = require("../service");

const create_episode_C =async(req,res) =>{
    try {
       //service => admin create

       const  data = req.body

       const new_episode = await episode_Service.create_episode_S(data)

       console.log(new_episode);
     

       

       if(!new_episode){
           throw new error("somthing went to warning.")
        }

        res.status(200).json({
           success :true,
           message:"admin creacted successfully",
           data: new_episode
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

const get_episode_C=async(req,res) =>{
    try {
       //service => servicess => data

       const episode_list =  await episode_Service.get_episode_S()
       if(!episode_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"admin creacted successfully",
           data: episode_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

const delete_episode = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await episode_Service.delete_episode(id)

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

 const update_episode =async(req,res) =>{
    try {
         const id = req.params.episode_id
         const data = req.body
         
         
         const result = await episode_Service.update_episode(id,data)

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
    create_episode_C,
    get_episode_C,
    delete_episode,
    update_episode
}