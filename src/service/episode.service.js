const { Episode } = require("../model")


const create_episode_S =(data) =>{
    return Episode.create(data)
}

const get_episode_S = () =>{
    return Episode.find()
}

const delete_episode =(id) =>{
    return Episode.findByIdAndDelete(id)

}

const update_episode =(id,data) =>{
    return Episode.findByIdAndUpdate(id,data)

}

module.exports = {
    create_episode_S,
    get_episode_S,
    delete_episode,
    update_episode
}