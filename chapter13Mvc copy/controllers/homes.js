// const { registeredHomes } = require("../../chapter11DynamicUi copy/router/hostRouter");
const Home = require("../modles/home");


exports.getHomes = (req,res,next)=>{
Home.fetchAll(registeredHomes=>{
res.render('home',{registeredHomes:registeredHomes,  pageTitle: 'airbnb Home', currentPage: 'Home'});

  });



}

exports.getAddHome= (req,res,next)=>{
  res.render( 'addHome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'})


}



exports.postHome=(req,res,next)=>{
  const {houseName, price, location , rating, photoUrl}=req.body;

 const home =new Home(houseName, price, location , rating, photoUrl);
 home.save();
  
  res.render( 'homeAdded',{pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'})

}