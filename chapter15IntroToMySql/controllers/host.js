

// kkkk
// const { registeredHomes } = require("../../chapter11DynamicUi copy/router/hostRouter");
const Home = require("../modles/home");




exports.getAddHome= (req,res,next)=>{
  res.render( 'host/edit-home',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome', editing:false})


}
exports.getEditHome= (req,res,next)=>{
  const homeId= req.params.homeId;
  const editing= req.query.editing==="true";
  Home.findById(homeId).then(([homes])=>{
    const home= homes[0];
    if(!home)
    {
     return console.log("Edit home not found");
    }
  console.log("edit home ",homeId,editing, home);

  res.render( 'host/edit-home',{pageTitle: 'Edit your home', currentPage: 'hostHome',editing:editing, home:home})


  })


}


exports.getHostHomes = (req,res,next)=>{
Home.fetchAll().then (([registeredHomes]) =>{

res.render('host/host-home-list',{registeredHomes:registeredHomes,  pageTitle: 'host home ', currentPage: 'hostHome'});

  });



}


exports.postAddHome=(req,res,next)=>{
  const {houseName, price, location , rating, photoUrl, description}=req.body;

 const home =new Home(houseName, price, location , rating, photoUrl,description);
 home.save();
  
 res.redirect( '/host/host-home-list')


}

exports.postEditHome=(req,res,next)=>{
  const {id,houseName, price, location , rating, photoUrl,description}=req.body;
   const home =new Home(houseName, price, location , rating, photoUrl,description,id);


 home.save();
 res.redirect( '/host/host-home-list')




}

exports.postDeleteHome=(req,res,next)=>{
  const homeID= req.params.homeID;
  console.log("came to delete", homeID);

  Home.deleteById(homeID).then(()=>{
 res.redirect( '/host/host-home-list')

  }).catch (error =>{
 
      console.log("error found to delete")
    
  })
   



}




