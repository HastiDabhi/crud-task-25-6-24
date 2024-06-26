const mongoose = require("mongoose")

const readme_Schema = mongoose.Schema(
    
    {
        readme_name:{
            type:String,
            strim:true
        },
        readme_id:{
            type:Number,
            default:0
        }
    },
    
    {
        timestamps:true
    }

)

const readme = mongoose.model("Readme",readme_Schema)

module.exports = readme