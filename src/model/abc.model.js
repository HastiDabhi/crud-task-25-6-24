const mongoose = require("mongoose")

const abc_Schema = mongoose.Schema({
     //key

     abc_name:{
        type:String,
        trim:true
     },

      abc_contact:{
        type:Number,
        default:0
      }
},
{
   timestamps:true
})

const abc = mongoose.model("Abc",abc_Schema)

module.exports = abc