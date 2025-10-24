const Favourite = require("../modles/favourite");
const Home = require("../modles/home");

exports.getBooking= (req,res,next)=>{
  res.render( 'store/booking',{pageTitle: 'Add Home to airbnb', currentPage: 'booking',  isLoggedIn:req.session.isLoggedIn})


}
exports.getReserve= (req,res,next)=>{
  res.render( 'store/reserve',{pageTitle: 'Reserve page', currentPage: 'reserve',  isLoggedIn:req.session.isLoggedIn})


}

exports.getHomeDetails= (req,res,next)=>{
  const homeId= req.params.homeId;
  console.log("id", homeId);
  Home.findById(homeId).then(home=>{

   
    if(!home)
    {
      res.redirect("/home");
      console.log("error");
    }
    else{
  res.render( 'store/home-details',{home:home,pageTitle: 'Home details', currentPage: 'home-details',  isLoggedIn:req.session.isLoggedIn})


    }
  })


}


exports.getFavtouteList = (req,res,next)=>{
  Favourite.find().populate('houseId').then(favourite=>{
    favouriteHome= favourite.map(fav=>fav.houseId);

res.render('store/favourite-list',{favouriteHome:favouriteHome,  pageTitle: 'Favourite Home', currentPage: 'favourite-list',  isLoggedIn:req.session.isLoggedIn});

 


  });
}





exports.postAddToFavourite = (req, res, next) => {
  const homeId= req.body.id;
Favourite.findOne({houseId: homeId}).then((fav)=>{
  if(fav)
  {
  console.log("Already added ");
    res.redirect("/favourite-list");
  }
  else{
    fav = new Favourite({houseId: homeId});
    fav.save().then((result)=>{
console.log("Favourite added", result)
    })

  }
    res.redirect("/favourite-list");



}).catch(error=>{
  console.log("Error while marking fav", error)
})

  


}


exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({houseId:homeId}).then(result=>{
    console.log("Favourite removed", result);
  }).catch(error=>{
    console.log("Error fav", error);
  
  }).finally(()=>{
    res.redirect("/favourite-list");

  })
   
 

 

}

exports.getHomes = (req,res,next)=>{
Home.find().then (registeredHomes=>{
  console.log("db data", registeredHomes)
res.render('store/home-list',{registeredHomes:registeredHomes,  pageTitle: 'airbnb Home', currentPage: 'Home',  isLoggedIn:req.session.isLoggedIn});

  });



}

exports.getIndex = (req,res,next)=>{
Home.find().then (registeredHomes=>{


res.render('store/index',{registeredHomes:registeredHomes,  pageTitle: 'airbnb index', currentPage: 'index',  isLoggedIn:req.session.isLoggedIn});

  });



}

