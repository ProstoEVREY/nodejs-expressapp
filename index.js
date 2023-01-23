import express from 'express';
import mongoose from "mongoose";
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 8080;
const DB_connect = 'mongodb+srv://user:123@cluster1.8kpqku2.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp(){
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(DB_connect,{useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, ()=>{
            console.log(`server started at ${PORT}`)
        })
    }
    catch (e) {
        console.log(e)
    }
}

startApp()