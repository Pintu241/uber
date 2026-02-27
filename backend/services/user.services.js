const userModel=require('../models/user.model.js');


module.exports.createUser=async({
    firstName,lastname,email,password
})=>{
    try{
        if(!firstName||!lastname||!email||!password){
            throw new Error('All fields are required');
        }
        const user= new userModel({
             Fullname:{
                firstName,
                lastname,
             },
             email,
             password
        })
        return user;
    }
    catch(err)
    {
        throw new Error(err.message);
    }
}