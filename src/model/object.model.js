const mongoose = require("mongoose")

const object_Schema = mongoose.Schema({
     //key

     object_name:{
        type:String,
        trim:true
     },

      object_id:{
        type:Number,
        default:0
      }
},
{
   timestamps:true
})

const object = mongoose.model("Object",object_Schema)

module.exports = object