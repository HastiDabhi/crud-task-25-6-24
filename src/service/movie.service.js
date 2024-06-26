const { Movie } = require("../model")


const create_movie_S =(data) =>{
    return Movie.create(data)

}

const delete_movie =(id) =>{
     return Movie.findByIdAndDelete(id)
}


const update_movie =(id,data) =>{

    return Movie.findByIdAndUpdate(id,data)

}

const get_movie = () =>{
 return Movie.find()
}

module.exports = {
    create_movie_S,
    delete_movie,
    update_movie,
    get_movie
}