const express = require("express")
const connectDB = require("./db/dbconnection")
const  router  = require("./routes/v1")


 const app = express()


   app.listen(8000,
       ()=>{
            console.log("Server is running on port")
    }
)
  

app.use(express.json()) 

app.use("/v1",router)
connectDB()

