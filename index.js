import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
// import "MODEL_NAME" from './models/xyz.js'

const app = express ()
const port = 8080

app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log("Connected to MongoDB");
})

app.get('/', (req,res) => {
    res.send('Hello World')
})

// app.get('/listings', async (req, res) =>{
//     console.log("hi")
//     const listings = await Listingsandreview.find({"property_type": "Apartment"}, {"name": 1, "property_type": 1, }).limit(20)
//     res.json(listings)
// })

app.listen(port)