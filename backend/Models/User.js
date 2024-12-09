const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

     firstName :{

           type : String,
           required : true
     },

     lastName : {

           type : String,
           required : true
     } ,

     phoneNumber : {

         type :String ,
         required : true,
         unique : true
     },

     email :{

         type:String,
         required:true,
         unique:true
     },

     dateOfBirth : {

           type : String,
           required : true ,
           
     },

     ipAddress: 
     { 
        type: String, 
        
    },
    deviceType: 
    { 
        type: String, 
         
    },
    browser:
     { 
        type: String,
         
        },
    userAgent: 
    { 
        type: String, 
        
    },




},

{
    timestamps:true
}



)

const User = mongoose.model("User" , userSchema)

module.exports = User