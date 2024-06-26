const mongoose = require("mongoose")

const size_Schema = mongoose.Schema({
     //key

     size_name:{
        type:String,
        trim:true
     },

      size_no:{
        type:Number,
        default:0
      }
},
{
   timestamps:true
})

const size = mongoose.model("Size",size_Schema)

module.exports = size