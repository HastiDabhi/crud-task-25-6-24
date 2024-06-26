const { Strim } = require("../model")


const create_strim_S = (data) =>{
    return Strim.create(data)


}

const get_strim_S =() =>{
    return Strim.find()

}

const delete_strim = (id) =>{
    return Strim.findByIdAndDelete(id)

}

const update_strim = (id,data) =>{
    return Strim.findByIdAndUpdate(id,data)

}


module.exports = {
    create_strim_S,
     get_strim_S,
     delete_strim,
     update_strim
}