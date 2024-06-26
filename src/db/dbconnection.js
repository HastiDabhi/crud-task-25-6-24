const mongoose = require("mongoose")

const connectDB =() =>{
    mongoose.connect("mongodb+srv://dabhihasti146:4AG0kYoZIYVtbuEJ@cluster0.tl7kxfp.mongodb.net/").then((data)=>{
        if(data){
            console.log("Database connected successfully ")

        }
    }).catch((err) =>{
        console.log(err);
    })
}

module.exports = connectDB