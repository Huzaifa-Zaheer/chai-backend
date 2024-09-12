import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then( () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening at ${process.env.PORT}: `)
    })
})
.catch((error) => {
    console.log("Mongo DB connection failed: ", error)
})




// import express from "express"
// const app = express()
// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("ERROR", (error) => {
//             console.log("Error: ", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error: ", erorr)
//         throw error
//     }
// })()