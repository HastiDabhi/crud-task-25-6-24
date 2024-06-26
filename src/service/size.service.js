const { Size } = require("../model")

 

 const create_size_S =(data) =>{
    return Size.create(data)
 }

 const get_size_S=() =>{
     return Size.find()
 }

 const delete_size =(id) =>{
    return Size.findByIdAndDelete(id)
 }

 const check_size = (size_name) =>{
    return Size.findOne({size_name})

 }

 module.exports = {
    create_size_S,
    get_size_S,
    delete_size,
    check_size
 }