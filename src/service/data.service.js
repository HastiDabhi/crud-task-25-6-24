const { Data } = require("../model")


const create_data_S =(data) =>{
    return  Data.create(data)

}

const get_data_S =() =>{
    return Data.find()

}

const delete_data =(id) =>{
    return Data.findByIdAndDelete(id)

}

const update_data =(id,data) =>{

    return Data.findByIdAndUpdate(id,data)

}


module.exports ={
    create_data_S,
    get_data_S,
    delete_data,
    update_data
}