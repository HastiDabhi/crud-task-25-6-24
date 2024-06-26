const mongoose =  require("mongoose")

const strim_Schema =  mongoose.Schema(
    
    {
        strim_name:{
            type:String,
            trim:true
        },

        strim_no:{
            type:Number,
            default:0
        }
    },
    
    {
        timestamps:true
    }

)

const strim = mongoose.model("Strim",strim_Schema)

module.exports = strim