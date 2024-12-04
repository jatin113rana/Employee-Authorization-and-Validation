const { json } = require('body-parser')
const empModel = require('../model/empModel')
const { generateToken } = require('../jwtAuthMiddleware')
const { response } = require('express')

// INSERT USER
const insertEmp = async (req, res) => {
    const { empid, password, name} =req.body
    try {
        const data = new empModel({
            empid: empid,
            password: password,
            name: name
        })
        const savedData = await data.save()
        // const payload = {empid:empid,password:password}
        // const token = generateToken(response.payload)//! check payload
        res.status(200).json({"message":"User Signed Up Successfully"/*,"token":token*/})
    } catch (error) {
        console.log(error);
    }
}

// Validate Password and empid
const validateEmp = async (req,res/*,next*/)=>{
    try {
        const {empid,password}=req.body
    const filter = {empid:empid,password:password}
    const result = await empModel.findOne(filter)
    if(result){
        console.log("Employee is Present");
        // !Giving Payload
        const payload = {empid:empid,password:password}
        //! Generating Token
        const token =generateToken(payload)
        res.send(token)
        // res.json(result)
    }
    else{
        res.send("NO Employee Found")
    }
    } catch (error) {
        console.log(error);
    }
}   

// UPDATE USER
const updatePassword = async (req, res) => {
        const {name,password}=req.body
    try {
        const result = await empModel.updateOne( { name: name }, // Filter 
                                                { $set: { password: password } }) // Update       
         res.json({"result":result,"message":"Password Updated Successfully"})
    } catch (error) {
        console.log(error);
    }
    
}




// EXPORTING
module.exports = { insertEmp, updatePassword,validateEmp}


