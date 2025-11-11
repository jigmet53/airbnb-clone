const {ObjectId} = require('mongodb');
const mongoose = require('mongoose');
// const Favourite= require('./favourite');

/**
     this.houseName= houseName;
    this.price= price;
    this.location=location;
    this.rating= rating;
    this.photo= photo;
    this.description=description;
    this._id=_id;
  save (){

  static find() {

static findById(homeId){

static deleteById(homeId, callback){





 */


const homeSchema=mongoose.Schema({
  houseName:{type: String,required: true},
  price:{type: Number,required: true},

  location:{type: String,required: true},

  rating:{type: Number,required: true},

  photo:String,
  PDF:String,


  description:String,


});
// homeSchema.pre('findOneAndDelete', async function(next){
//   const homeId = this.getQuery()["_id"];
//   await Favourite.deleteMany({houseId:homeId});
//   next();
// })

module.exports =mongoose.model('Home',homeSchema);
