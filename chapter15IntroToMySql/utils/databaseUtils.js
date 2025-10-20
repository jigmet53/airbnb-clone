const mysql= require ('mysql2');

const pool= mysql.createPool({
  host:"localhost",
  user:"root",
  password:"Wangchuk@53",
  database:"airbnb"
})

module.exports= pool.promise();