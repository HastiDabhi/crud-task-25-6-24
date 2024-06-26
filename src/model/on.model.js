const mongoose = require("mongoose")

const on_Schema = mongoose.Schema({
     //key

     on_name:{
        type:String,
        trim:true
     },

      on_contact:{
        type:Number,
        default:0
      }
},
{
   timestamps:true
})

const on = mongoose.model("On",on_Schema)

module.exports = on