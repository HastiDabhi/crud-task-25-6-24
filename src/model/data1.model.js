const mongoose = require("mongoose")

const data1_Schema = mongoose.Schema(
    
    {
        data1_name:{
            type:String,
            strim:true
        },
        data1_id:{
            type:Number,
            default:0
        }
    },
    
    {
        timestamps:true
    }

)

const data1 = mongoose.model("Data1",data1_Schema)

module.exports = data1