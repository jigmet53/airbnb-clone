const Favourite = require("../modles/favourite");
const Home = require("../modles/home");

exports.getBooking= (req,res,next)=>{
  res.render( 'store/booking',{pageTitle: 'Add Home to airbnb', currentPage: 'booking'})


}
exports.getReserve= (req,res,next)=>{
  res.render( 'store/reserve',{pageTitle: 'Reserve page', currentPage: 'reserve'})


}

exports.getHomeDetails= (req,res,next)=>{
  const homeId= req.params.homeId;
  console.log("id", homeId);
  Home.findById(homeId).then(([homes])=>{
    const home= homes[0];
    if(!home)
    {
      res.redirect("/home");
      console.log("error");
    }
    else{
  res.render( 'store/home-details',{home:home,pageTitle: 'Home details', currentPage: 'home-details'})


    }
  })


}


exports.getFavtouteList = (req,res,next)=>{
  Favourite.getFavourite(favourite=>{
Home.fetchAll().then (([registeredHomes]) =>{

      const favouriteHome= registeredHomes.filter(home=>favourite.includes(home.id))
res.render('store/favourite-list',{favouriteHome:favouriteHome,  pageTitle: 'Favourite Home', currentPage: 'favourite-list'});

  });


  });
}





exports.postAddToFavourite = (req, res, next) => {
  Favourite.addToFavourite(req.body.id, error => {
    if (error) {
      console.log("Error while marking favourite: ", error);
    }
    res.redirect("/favourite-list");

  })

}


exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, error=>{
    if(error)
    {
      console.log("error while removing from error", error);
    }
    res.redirect("/favourite-list");

  })
 

 

}

exports.getHomes = (req,res,next)=>{
Home.fetchAll().then (([registeredHomes]) =>{
  console.log("db data", registeredHomes)
res.render('store/home-list',{registeredHomes:registeredHomes,  pageTitle: 'airbnb Home', currentPage: 'Home'});

  });



}

exports.getIndex = (req,res,next)=>{
Home.fetchAll().then (([registeredHomes]) =>{

res.render('store/index',{registeredHomes:registeredHomes,  pageTitle: 'airbnb index', currentPage: 'index'});

  });



}

