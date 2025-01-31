import express from 'express'
import mongoose from 'mongoose'
import routes from "./routes/userRoutes.js"
import dotenv from "dotenv"

// Routes
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";


// Init App
const app = express ()
const port = 8080

// Config
dotenv.config()

app.use(express.json())  // Middleware to parse JSON request bodies
app.use(routes)

mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log("Connected to MongoDB")
})

app.get('/', (req,res) => {
    res.send('Hello World')
})

// app.get('/listings', async (req, res) =>{
//     console.log("hi")
//     const listings = await Listingsandreview.find({"property_type": "Apartment"}, {"name": 1, "property_type": 1, }).limit(20)
//     res.json(listings)
// })

app.listen(port, () =>{
    console.log('listening to port: ', port)
})