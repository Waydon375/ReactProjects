import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import userRoutes from './routes/user.js'
import commentsRoutes from './routes/comments.js'
import videoRoutes from './routes/videos.js'
import authRoutes from './routes/auth.js'

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=> {
        console.log("Connected to DB")
    }).catch((err) =>{
        throw err;
    })
}

app.use("/api/user", userRoutes)
app.use("/api/comments", commentsRoutes)
app.use("/api/video", videoRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, () => {
    connect()
    console.log("Connected to Server")
} )