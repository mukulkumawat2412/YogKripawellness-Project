import mongoose from "mongoose"


const dbConnect = async ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/YogakripaWellness")
        
        console.log("database Connected Successfully")

    } catch (error) {
        console.log(error)
        
    }

}


export default dbConnect