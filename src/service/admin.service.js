const { Admin } = require("../model")


const create_admin_S = (data) =>{
    return Admin.create(data)
  }

  const get_admin_S = () =>{
     return Admin.find()
  }

  const delete_admin = (id) =>{
    return Admin.findByIdAndDelete(id)
  }

  const update_admin = (id,data) =>{
    return Admin.findByIdAndUpdate(id,data)

  }

  module.exports = {
    create_admin_S,
    get_admin_S,
    delete_admin,
    update_admin
  }