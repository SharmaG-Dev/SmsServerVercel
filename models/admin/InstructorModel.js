const mongoose = require("mongoose");
const InstructorRegisterSchema = new mongoose.Schema({
     
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
       required:true
    },
    address:{
        type:String,
       required:true
    },
    contact:{
        type:Number,
        required:true
    },
 
    gender:{
        type:String,
       required:true
    }, 
    dob:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
   
    degree:{
        type:String,
        required:false
    },
    exp:{
        type:Number,
      required:false
    },
    password:{
        type:String,
        default:12345
        
    },
    profilePic:{
        type:String,
        default:"user.jfif"
    },
    status:{
        type:String,
        default:"active"
    }
});


module.exports = mongoose.model('InstructorRegister',InstructorRegisterSchema);
 