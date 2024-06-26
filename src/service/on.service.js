const { On } = require("../model")


const create_on_S = (data) =>{
    return On.create(data)
  }

  const get_on_S = () =>{
     return on.find()
  }

  const delete_on = (id) =>{
    return on.findByIdAndDelete(id)
  }

  const update_on = (id,data) =>{
    return on.findByIdAndUpdate(id,data)

  }

  module.exports = {
    create_on_S,
    get_on_S,
    delete_on,
    update_on
  }