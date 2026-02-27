const express= require('express');
const router=express.Router();
const {body}=require('express-validator');
const userController=require('../controller/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').length({min:8}).withMessage('Password must be at least 8 characters long'),
    body('fullName.firstName').notEmpty().withMessage('First name is required'),
],userController.userRegister)





