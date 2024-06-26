const mongoose = require("mongoose")

const episode_Schema = mongoose.Schema({
     //key

     episode_name:{
        type:String,
        trim:true
     },

      episode_number:{
        type:Number,
        default:0
      }
},
{
   timestamps:true
})

const episode = mongoose.model("Episode",episode_Schema)

module.exports = episode