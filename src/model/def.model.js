const mongoose = require("mongoose")

const def_Schema = mongoose.Schema({
     //key

     def_name:{
        type:String,
        trim:true
     },

      def_contact:{
        type:Number,
        default:0
      }
},
{
   timestamps:true
})

const def = mongoose.model("Def",def_Schema)

module.exports = def