// core modules
const fs = require('fs');
const path= require('path')
const rootDir = require("../utils/pathUtils")
const registeredHomes= [];

module.exports = class Home{

  constructor(houseName, price, location , rating, photoUrl){
    this.houseName= houseName;
    this.price= price;
    this.loaction=location;
    this.rating= rating;
    this.photoUrl= photoUrl;

  }
  save (){
    Home.fetchAll(registeredHomes=>{
      registeredHomes.push(this);
       const homeDataPath= path.join(rootDir,'data', 'home.json');

    fs.writeFile(homeDataPath,JSON.stringify(registeredHomes), (error)=>{
      console.log("file writing concluded", error)
    });
    });
 
  
}

static fetchAll(callback){
  const homeDataPath= path.join(rootDir,'data', 'home.json');
  fs.readFile(homeDataPath,( err, data)=>{
    callback( !err ? JSON.parse(data):[] );

  }
  );
 

}
};


