
const Home = require("../modles/home");
const user = require("../modles/user");
const User= require("../modles/user");

exports.getBooking= (req,res,next)=>{
  res.render( 'store/booking',{pageTitle: 'Add Home to airbnb', currentPage: 'booking',  isLoggedIn:req.session.isLoggedIn,  user:req.session.user,})


}
exports.getReserve= (req,res,next)=>{
  res.render( 'store/reserve',{pageTitle: 'Reserve page', currentPage: 'reserve',  isLoggedIn:req.session.isLoggedIn, user:req.session.user,})


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
  res.render( 'store/home-details',{home:home,pageTitle: 'Home details', currentPage: 'home-details',  isLoggedIn:req.session.isLoggedIn,  user:req.session.user,})


    }
  })


}


exports.getFavtouteList = async (req,res,next)=>{
  const userId= req.session.user._id;
  const user= await User.findById(userId).populate('favourites');
  console.log('user', user);
   res.render('store/favourite-list',{favouriteHome:user.favourites,  pageTitle: 'Favourite Home', currentPage: 'favourite-list',  isLoggedIn:req.session.isLoggedIn,  user:req.session.user,});

}





exports.postAddToFavourite = async (req, res, next) => {
  const homeId= req.body.id;
  const userId= req.session.user._id;
  const user= await User.findById(userId);
  if(!user.favourites.includes(homeId))
  {
  user.favourites.push(homeId);
  await user.save();

  }

    res.redirect("/favourite-list");





  


}


exports.postRemoveFromFavourite = async (req, res, next) => {
  const homeId = req.params.homeId;
    const userId= req.session.user._id;
  const user= await User.findById(userId);
  if(user.favourites.includes(homeId))
  {
    user.favourites=  user.favourites.filter(fav=>fav!=homeId);
    await user.save();
  }

    res.redirect("/favourite-list");

}

exports.getHomes = (req,res,next)=>{
Home.find().then (registeredHomes=>{
  console.log("db data", registeredHomes)
res.render('store/home-list',{registeredHomes:registeredHomes,  pageTitle: 'airbnb Home', currentPage: 'Home',  isLoggedIn:req.session.isLoggedIn, user:req.session.user,});

  });



}

exports.getIndex = (req,res,next)=>{
Home.find().then (registeredHomes=>{


res.render('store/index',{registeredHomes:registeredHomes,  pageTitle: 'airbnb index', currentPage: 'index',  isLoggedIn:req.session.isLoggedIn, user:req.session.user,});

  });



}

