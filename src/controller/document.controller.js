const { doc_Service } = require("../service")

const create_doc_C =async(req,res) =>{
    try {
       //service => admin create

       const  data = req.body

       const new_doc = await doc_Service.create_doc_S(data)

       console.log(new_doc);
     

       if(!new_doc){
           throw new error("somthing went to warning.")
        }

        res.status(200).json({
           success :true,
           message:"admin creacted successfully",
           data: new_doc
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

const get_doc_C=async(req,res) =>{
    try {
       //service => servicess => data

       const doc_list =  await doc_Service.get_doc_S()
       if(!doc_list){
           throw new error("data not found")
        }

        res.status(200).json({
           success :true,
           message:"admin creacted successfully",
           data: doc_list
        })
    } catch (error) {

        res.status(401).json({
           success:false,
           message:error.message
        })
       
    }
}

const delete_doc = async(req,res) =>{
    try {
       const id = req.params.id
       
       const result = await doc_Service.delete_doc(id)

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

 const update_doc = async(req,res) =>{
    try {
        const id = req.params.doc_id
        const  data = req.body

        const result = await doc_Service.update_doc(id,data)

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
    create_doc_C,
    get_doc_C,
    delete_doc,
    update_doc
}