require('dotenv').config()
const mongoose =require('mongoose')
const express =require('express')
const inventoryRoutes =require('./routes/inventory')



const app = express()

app.use (express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/inventory',inventoryRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('connected to the db &listening on port',process.env.PORT)
        })

    })
    .catch((error)=>{
        console.log(error)
    })
    

 