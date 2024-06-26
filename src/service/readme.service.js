const { Readme } = require("../model")


const create_readme_S = (data) =>{
    return Readme.create(data)
  }

  const get_readme_S = () =>{
     return Readme.find()
  }

  const delete_readme = (id) =>{
    return Readme.findByIdAndDelete(id)
  }

  const update_readme = (id,data) =>{
    return Readme.findByIdAndUpdate(id,data)

  }

  module.exports = {
    create_readme_S,
    get_readme_S,
    delete_readme,
    update_readme
  }