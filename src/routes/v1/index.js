const express = require("express")

const movieRoute = require("./movie.routes") 
const adminRoute = require("./admin.routes")
const seriesRoute = require("./series.routes")
const userRoute = require("./user.routes")
const docRoute = require("./document.routes")
const episodeRoute = require("./episode.routes")
const strimRoute = require("./strim.routes")
const dataRoute = require("./data.rotes")
const objectRoute = require("./object.routes")
const data1Route = require("./data1.routes")
const aboutRoute = require("./about.routes")
const readmeRoute = require("./readme.routes")
const sizeRoute = require("./size.routes")
const onRoute = require("./on.routes")
const abcRoute = require("./abc.routes")
const defRoute = require("./def.routes")













const router =express()

 
  router.use("/movie",movieRoute)

  router.use("/admin",adminRoute)

  router.use("/series",seriesRoute)

  router.use("/user",userRoute)

  router.use("/doc",docRoute)

  router.use("/episode",episodeRoute)

  router.use("/strim",strimRoute)

  router.use("/data",dataRoute)

 router.use("/object",objectRoute)

 router.use("/data1",data1Route)

 router.use("/about",aboutRoute)

 router.use("/readme",readmeRoute)

 router.use("/size",sizeRoute)

 router.use("/on",onRoute)

 router.use("/abc",abcRoute)

 router.use("/def",defRoute)







module.exports = router