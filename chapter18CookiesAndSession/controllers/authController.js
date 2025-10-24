






exports.getLogin= (req,res,next)=>{
  res.render( 'auth/login',{pageTitle: 'Login', currentPage: 'Login', editing:false,
    isLoggedIn:false,
  })


}
exports.postLogin= (req,res,next)=>{
  console.log("login", req.body)
  res.cookie("isLoggedIn",true)
  // req.session.isLoggedIn= true;
  req.session.isLoggedIn=true,

res.redirect("/")


}

exports.postLogout= (req,res,next)=>{
console.log("in auth controler")
  req.session.destroy(()=>{
 res.redirect("/login");


  })





}





