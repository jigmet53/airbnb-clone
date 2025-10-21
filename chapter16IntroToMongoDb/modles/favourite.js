const { getDB } = require("../utils/databaseUtils");



module.exports = class Favourite{
  constructor(houseId){
    this.houseId= houseId;
  

  }
  
  save(){
    const db=getDB();
     return db.collection('favourite').findOne({houseId:  this.houseId}).then(existing =>{
    if(!existing)
    {
    return db.collection('favourite').insertOne(this);

    }
    else{
      return  Promise.resolve();
    }
   })
  }

  
static getFavourite(){
   const db =getDB();
    return db.collection('favourite').find().toArray();

  
}

static deleteById(delHomeId){
  
   const db =getDB();
    return db.collection('favourite').deleteOne({houseId:delHomeId });

}
 
  
}



