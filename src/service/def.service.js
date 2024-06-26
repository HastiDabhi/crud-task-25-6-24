const { Def } = require("../model")


const create_def_S = (data) =>{
    return Def.create(data)
  }

  const get_def_S = () =>{
     return Def.find()
  }

  const delete_def = (id) =>{
    return Def.findByIdAndDelete(id)
  }

  const update_def = (id,data) =>{
    return Def.findByIdAndUpdate(id,data)

  }

  module.exports = {
    create_def_S,
    get_def_S,
    delete_def,
    update_def
  }