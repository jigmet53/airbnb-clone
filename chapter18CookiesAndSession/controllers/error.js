exports.pageNotFound = (req,res,next)=>{
  res.status(404).render( 'page404',{pageTitle: 'Add Home to airbnb', currentPage: '404',  isLoggedIn:req.session.isLoggedIn})
};

