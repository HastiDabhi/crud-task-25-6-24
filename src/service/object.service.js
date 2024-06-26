const { Object } = require("../model")

const create_object_S = (data) =>{
    return Object.create(data)

}

const get_object_S =() =>{
    return Object.find()

}

const delete_object = (id) =>{
    return Object.findByIdAndDelete(id)

}

const update_object = (id,data) =>{
    return Object.findByIdAndUpdate(id,data)

}

module.exports ={
    create_object_S,
    get_object_S,
    delete_object,
    update_object
}