const mongoose=require('mongoose');
const bycrypt=require('bcrypt');
const jwt=require(jsonwebtoken);
const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: { value: 3, message: 'First name should be at least 3 characters' }
        },
        lastName: {
            type: String,
            required: true,
            minlength: { value: 3, message: 'Last name should be at least 3 characters' }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: { value: 5, message: 'Email should be at least 5 characters' }
    },
    password: {
        type: String,
        required: true,
        minlength: { value: 8, message: 'Password should be at least 8 characters' }
        ,select:false
    },
    socketId: {
        type: String
    }
}, 
{
    timestamps: true
}
);
userSchema.methods.generateAuthToken = function()
{
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h'});
    return token;
}
userSchema.methods.comparePassword = async function(password){
    return await bycrypt.compare(password,this.password);
}
userSchema.statics.hashPassword = async function(password){
    return await bycrypt.hash(password,10);
}
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;