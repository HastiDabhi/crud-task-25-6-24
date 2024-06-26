const { readme_Service } = require("../service");

const create_readme =async(req,res) =>{
     try {
        //service => readme create
       const  data = req.body
       const new_readme = await readme_Service.create_readme_S(data)

       console.log(new_readme);
    

        if(!new_readme){
            throw new error("somthing went to warning.")
         }

         res.status(200).json({
            success :true,
            message:"readme creacted successfully",
            data: new_readme
         })
     } catch (error) {

         res.status(401).json({
            success:false,
            message:error.message
         })
        
     }
}


const get_readme=async(req,res) =>{
    try {
       //service => servicess => data

       const readme_list =  await readme_Service.get_readme_S()
       if(!readme_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"readme creacted successfully",
           data: readme_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

 const delete_readme = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await readme_Service.delete_readme(id)

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

 const update_readme =  async(req,res)=>{
   try {
       const id = req.params.readme_id
       const data = req.body


       const result = await readme_Service.update_readme(id,data)

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
    create_readme,
    get_readme,
    delete_readme,
    update_readme
}