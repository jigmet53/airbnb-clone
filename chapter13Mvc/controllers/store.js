const Home = require("../modles/home");

exports.getBooking= (req,res,next)=>{
  res.render( 'store/booking',{pageTitle: 'Add Home to airbnb', currentPage: 'booking'})


}
exports.getReserve= (req,res,next)=>{
  res.render( 'store/reserve',{pageTitle: 'Reserve page', currentPage: 'reserve'})


}
exports.getHomeDetails= (req,res,next)=>{
  res.render( 'store/home-details',{pageTitle: 'Home details', currentPage: 'home-details'})


}


exports.getFavtouteList = (req,res,next)=>{
Home.fetchAll(registeredHomes=>{
res.render('store/favroute-list',{registeredHomes:registeredHomes,  pageTitle: 'Favroute Home', currentPage: 'favroute-list'});

  });



}

exports.getHomes = (req,res,next)=>{
Home.fetchAll(registeredHomes=>{
res.render('store/home-list',{registeredHomes:registeredHomes,  pageTitle: 'airbnb Home', currentPage: 'Home'});

  });



}

exports.getIndex = (req,res,next)=>{
Home.fetchAll(registeredHomes=>{
res.render('store/index',{registeredHomes:registeredHomes,  pageTitle: 'airbnb index', currentPage: 'index'});

  });



}

