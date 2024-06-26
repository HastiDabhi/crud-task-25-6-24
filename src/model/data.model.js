const mongoose = require("mongoose")

const data_Schema = mongoose.Schema(
    
    {
        data_name:{
            type:String,
            strim:true
        },
        data_id:{
            type:Number,
            default:0
        }
    },
    
    {
        timestamps:true
    }

)

const data = mongoose.model("Data",data_Schema)

module.exports = data