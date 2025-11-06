const {ObjectId} = require('mongodb');
const mongoose = require('mongoose');
// const favourite = require('./favourite');



const userSchema=mongoose.Schema({
  firstname:{
    type : String,
    required:[true, 'first name is required']
  },
   lastname: String,


   email:{
    type : String,
    required:[true, 'Email is required']
  },
   password:{
    type : String,
    required:[true, 'Password is required']
  },
   usertype:{
    type : String,
    enum:['guest', 'host'],
    default:'guest'
  },
 favourites:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Home',
  }]
 

});


module.exports =mongoose.model('User',userSchema);
