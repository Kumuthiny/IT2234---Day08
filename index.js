const express = require('express');
const app = express();
const port = 3001;

const studentroute=require('./Student/studentRoute')

app.use(express.json())
app.use('/student',studentroute)

app.listen (port,()=>{
    console.log(`server is runnning on ${port}`)
})