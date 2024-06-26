const mongoose = require("mongoose")

const doc_Schema = mongoose.Schema(
    
    {
       doc_name:{
        type:String,
        trim:true

       },
       doc_password:{
        type:Number,
        default:0
       }

    },
    
    {
        timestamps:true
    })

    const doc = mongoose.model("Doc",doc_Schema)

    module.exports = doc