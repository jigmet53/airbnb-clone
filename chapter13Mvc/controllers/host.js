// const { registeredHomes } = require("../../chapter11DynamicUi copy/router/hostRouter");
const Home = require("../modles/home");




exports.getAddHome= (req,res,next)=>{
  res.render( 'host/addHome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'})


}

exports.getHostHomes = (req,res,next)=>{
Home.fetchAll(registeredHomes=>{
res.render('host/host-home-list',{registeredHomes:registeredHomes,  pageTitle: 'host home ', currentPage: 'hostHome'});

  });



}


exports.postHome=(req,res,next)=>{
  const {houseName, price, location , rating, photoUrl}=req.body;

 const home =new Home(houseName, price, location , rating, photoUrl);
 home.save();
  
  res.render( 'host/homeAdded',{pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'})

}