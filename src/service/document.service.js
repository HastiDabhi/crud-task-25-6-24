const { Doc } = require("../model")


const create_doc_S =(data) =>{
    return Doc.create(data)

}

const get_doc_S = () =>{
    return Doc.find()
}
const delete_doc = (id) =>{
    return Doc.findByIdAndDelete(id)

}

const update_doc = (id,data) =>{
    return Doc.findByIdAndUpdate(id,data)

}

module.exports ={
    create_doc_S,
    get_doc_S,
    delete_doc,
    update_doc
}