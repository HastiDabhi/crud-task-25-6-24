const { About } = require("../model")


const create_about_S = (data) =>{
    return About.create(data)
  }

  const get_about_S = () =>{
     return About.find()
  }

  const delete_about = (id) =>{
    return About.findByIdAndDelete(id)
  }

  const update_about = (id,data) =>{
    return About.findByIdAndUpdate(id,data)

  }

  module.exports = {
    create_about_S,
    get_about_S,
    delete_about,
    update_about
  }