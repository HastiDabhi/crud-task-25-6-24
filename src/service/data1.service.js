const { Data1 } = require("../model")


const create_data1_S =(data1) =>{
    return  Data1.create(data1)

}

const get_data1_S =() =>{
    return Data1.find()

}

const delete_data1 =(id) =>{
    return Data1.findByIdAndDelete(id)

}

const update_data1 =(id,data1) =>{

    return Data1.findByIdAndUpdate(id,data1)

}


module.exports ={
    create_data1_S,
    get_data1_S,
    delete_data1,
    update_data1
}