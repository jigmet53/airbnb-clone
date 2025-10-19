

// kkkk
// const { registeredHomes } = require("../../chapter11DynamicUi copy/router/hostRouter");
const Home = require("../modles/home");




exports.getAddHome= (req,res,next)=>{
  res.render( 'host/edit-home',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome', editing:false})


}
exports.getEditHome= (req,res,next)=>{
  const homeId= req.params.homeId;
  const editing= req.query.editing==="true";
  Home.findById(homeId, home=>{
    if(!home)
    {
     return console.log("Edit home not found");
    }
  console.log("edit home ",homeId,editing, home);

  res.render( 'host/edit-home',{pageTitle: 'Edit your home', currentPage: 'hostHome',editing:editing, home:home})


  })


}


exports.getHostHomes = (req,res,next)=>{
Home.fetchAll(registeredHomes=>{
res.render('host/host-home-list',{registeredHomes:registeredHomes,  pageTitle: 'host home ', currentPage: 'hostHome'});

  });



}


exports.postAddHome=(req,res,next)=>{
  const {houseName, price, location , rating, photoUrl}=req.body;

 const home =new Home(houseName, price, location , rating, photoUrl);
 home.save();
  
 res.redirect( '/host/host-home-list')


}

exports.postEditHome=(req,res,next)=>{
  const {id,houseName, price, location , rating, photoUrl}=req.body;
   const home =new Home(houseName, price, location , rating, photoUrl);
 home.id=id;

 home.save();
 res.redirect( '/host/host-home-list')




}

exports.postDeleteHome=(req,res,next)=>{
  const homeID= req.params.homeID;
  console.log("came to delete", homeID);

  Home.deleteById(homeID, error =>{
    if(error)
    {
      console.log("error found to delete")
    }
 res.redirect( '/host/host-home-list')

  });




}




