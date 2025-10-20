// core modules
const fs = require('fs');
const path= require('path')
const rootDir = require("../utils/pathUtils")

  const favouriteDatapath= path.join(rootDir,'data', 'favourite.json');

module.exports = class Favourite{

  
static addToFavourite(homeid, callback){
  console.log("in model fav")

Favourite.getFavourite((favourite)=>{
  console.log("11writing favourite added");

 if( favourite.includes(homeid))
 {
  callback("already favourite added");
 }
 else
 {
  console.log("writing favourite added");

  favourite.push(homeid);
  fs.writeFile(favouriteDatapath,JSON.stringify(favourite), callback)
 }

});
}
  
static getFavourite(callback){
  fs.readFile(favouriteDatapath,(err,data)=>{
    callback(!err ? JSON.parse(data):[]);
  });
  
}

static deleteById(delHomeId, callback){
  Favourite.getFavourite(homesIds=>{
  
homesIds= homesIds.filter(homeId=> delHomeId !== homeId)
 fs.writeFile(favouriteDatapath,JSON.stringify(homesIds),callback);
  // callback(homeFound);
   
  

  })

}
 
  
}



