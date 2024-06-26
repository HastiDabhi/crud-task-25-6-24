const { Series } = require("../model")

 

 const create_series =(data) =>{
    return Series.create(data)
 }

 const get_series =() =>{
     return Series.find()
 }

 const delete_series =(id) =>{
    return Series.findByIdAndDelete(id)
 }

 const check_series = (series_name) =>{
    return Series.findOne({series_name})

 }

 module.exports = {
    create_series,
    get_series,
    delete_series,
    check_series
 }