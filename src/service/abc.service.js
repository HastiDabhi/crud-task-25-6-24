const { Abc } = require("../model")


const create_abc_S = (data) =>{
    return Abc.create(data)
  }

  const get_abc_S = () =>{
     return Abc.find()
  }

  const delete_abc = (id) =>{
    return Abc.findByIdAndDelete(id)
  }

  const update_abc = (id,data) =>{
    return Abc.findByIdAndUpdate(id,data)

  }

  module.exports = {
    create_abc_S,
    get_abc_S,
    delete_abc,
    update_abc
  }