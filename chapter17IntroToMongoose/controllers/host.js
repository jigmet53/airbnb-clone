

// kkkk
// const { registeredHomes } = require("../../chapter11DynamicUi copy/router/hostRouter");
const Home = require("../modles/home");




exports.getAddHome= (req,res,next)=>{
  res.render( 'host/edit-home',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome', editing:false})


}
exports.getEditHome= (req,res,next)=>{
  const homeId= req.params.homeId;
  const editing= req.query.editing==="true";
  Home.findById(homeId).then(home=>{

    if(!home)
    {
     return console.log("Edit home not found");
    }
  console.log("edit home ",homeId,editing, home);

  res.render( 'host/edit-home',{pageTitle: 'Edit your home', currentPage: 'hostHome',editing:editing, home:home})


  })


}


exports.getHostHomes = (req,res,next)=>{
Home.find().then ((registeredHomes) =>{

res.render('host/host-home-list',{registeredHomes:registeredHomes,  pageTitle: 'host home ', currentPage: 'hostHome'});

  });



}


exports.postAddHome=(req,res,next)=>{
  const {houseName, price, location , rating, photoUrl, description}=req.body;

 const home =new Home({houseName, price, location , rating, photoUrl,description});
 home.save().then(()=>{
  console.log("Home saved successfully");
 });
  
 res.redirect( '/host/host-home-list')


}

exports.postEditHome=(req,res,next)=>{
  const {id,houseName, price, location , rating, photoUrl,description}=req.body;
  Home.findById(id).then((home)=>{
home.houseName= houseName;
home.price= price;
home.location= location;
home.rating= rating;
home.photoUrl= photoUrl;
home.description= description;
home.save().then(result =>{
  console.log("home updated");
 }).catch(error=>{
  consolo.log("error while uploading", error)
 })
 res.redirect( '/host/host-home-list')

  }).catch(error=>{
  consolo.log("error while finding home", error)
    
  })

}

exports.postDeleteHome=(req,res,next)=>{
   const homeId = req.params.homeID;
  console.log("Came to delete ", homeId);
  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Error while deleting ", error);
    });
   



}




