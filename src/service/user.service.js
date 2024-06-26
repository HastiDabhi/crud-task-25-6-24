const { User } = require("../model")

 
const  create_user_S = (data) =>{
     return User.create(data)
}

const get_user_S =() =>{
    return User.find()

}

const delete_user= (id) =>{
    return User.findByIdAndDelete(id)

}

const update_user =(id,data) =>{

    return User.findByIdAndUpdate(id,data)

}
module.exports ={
    create_user_S,
    get_user_S,
    delete_user,
    update_user
}
