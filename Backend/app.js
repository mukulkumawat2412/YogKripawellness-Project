import express from "express"
import dbConnect from "./Db/dbConfig.js"
import cors from "cors"
import {router as UserRoute} from "./Routes/UserRoute.js"
import {router as YogaRoute} from "./Routes/YogaRoute.js"
import {router as ApplyRoute} from "./Routes/ApplyRoute.js"
const app = express()
const PORT = 7000
app.use(cors())

dbConnect()


app.use(express.json())
app.use(express.static("public/upload"))





app.use("/api",UserRoute)
app.use("/api",YogaRoute)
app.use("/api",ApplyRoute)



app.listen(PORT,()=>{
    console.log(`Server is Running on Port :-${PORT}`)

})