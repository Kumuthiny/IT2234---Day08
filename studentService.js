const students = require('./studentdb')

function getstudents(){
    return students;
}

function getStudent(id){
    return students.find((student)=>student.Regno==id)
}

function getByGender(gender){
    return students.find((student)=>student.gender===gender)
}

module.exports={getStudent,getstudents,getByGender}