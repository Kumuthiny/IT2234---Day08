const express = require('express')
const router= express.Router()
const studentservice = require('./studentService')

router.get('/',(req,res)=>{
    const results = studentservice.getstudents()
if(results){
    res.status(200).json(results)
}
else{
    res.status(404).send("sorry, No data found !")
}
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentservice.getStudent(id)
if(results){
    res.status(200).json(results)
}
else{
    res.status(404).send("sorry, No data found !")
}
})

router.get('/gender/:gen', (req,res)=>{
    const gen = req.params.gen=='M'?'Male':'Female'
    const results = studentservice.getByGender(gen)
    if(results){
        res.status(200).json(results)
    }else{
        res.status(404).send("Sorry, No Data Found !")
    }
})


module.exports=router