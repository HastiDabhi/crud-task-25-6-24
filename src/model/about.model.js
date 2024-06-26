const mongoose = require("mongoose")

const about_Schema = mongoose.Schema({
     //key

     about_name:{
        type:String,
        trim:true
     },

      about_contact:{
        type:Number,
        default:0
      }
},
{
   timestamps:true
})

const about = mongoose.model("About",about_Schema)

module.exports = about