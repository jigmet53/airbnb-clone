
const { check, validationResult } = require('express-validator');
const User = require('../modles/user');
const bcrypt= require('bcryptjs')




exports.getLogin= (req,res,next)=>{
  res.render( 'auth/login',{pageTitle: 'Login', currentPage: 'Login', editing:false,
    isLoggedIn:false,
    errors:[],
    oldInput:{email:''},
    user:{},
  })


}
exports.getSignup= (req,res,next)=>{
  console.log("signup", req.body)

  res.render( 'auth/signUp',{pageTitle: 'SignUp', currentPage: 'SignUp', editing:false,
    isLoggedIn:false,
    errors:[],
    oldInput:{firstName:"", lastName:"", email:"", password:"", userType:""},
    user:{},



  })


}

exports.postLogin= async (req,res,next)=>{
  const {email,password}= req.body;
  const user= await User.findOne({email});
  console.log("i1f", email, req.body)

  if(!user)
  {
  console.log("if", req.body)

    return res.status(422).render("auth/login",{
      pageTitle:'Login',
      currentPage:"login",
       editing:false,
      isLoggedIn: false,
      errors:["Invaled email or password"],
    oldInput:{email},
    user:{},
      })
  }

  const isMatch = await bcrypt.compare(password,user.password);
  if(!isMatch)

    return res.status(422).render("auth/login",{
      pageTitle:'Login',
      currentPage:"login",
       editing:false,
      isLoggedIn: false,
      errors:["Invaled   password"],
    oldInput:{email} ,
    user:{},
     })



  // req.session.isLoggedIn= true;
  req.session.isLoggedIn=true,
  req.session.user=user;
  await req.session.save();


res.redirect("/")


}
exports.postSignup= [
  check("firstname")
  .trim()
  .isLength({min:2})
  .withMessage("First name should atleast 2 char long")
  .matches(/^[A-Za-z\s]+$/)
  .withMessage("First name should only contain alphabet"),

    check("lastname")
 
 
  .matches(/^[A-Za-z\s]+$/)
  .withMessage("Last name should only contain alphabet"),
  check('email')
  .isEmail()
  .withMessage("Please enter valid email")
  .normalizeEmail(),

  check("password")
  .trim()
  .isLength({ min: 8 })
  .withMessage("Password should be at least 8 characters long")
  .matches(/[A-Z]/)
  .withMessage("Password should contain at least one uppercase letter")
  .matches(/[a-z]/)
  .withMessage("Password should contain at least one lowercase letter")
  .matches(/[0-9]/)
  .withMessage("Password should contain at least one number")
  .matches(/[@$!%*?&#]/)
  .withMessage("Password should contain at least one special character"),


  check("confirmPassword")
  .trim()
  .custom((value, {req})=>{
    if(value!==req.body.confirmPassword)
    {
      throw new Error("Password not matched")
    }
    return true;

  }),

  check("usertype")
  .notEmpty()
  .isIn(['guest', 'host'])
  .withMessage("Invalid user type"),

  check("terms")
  .notEmpty()
  .withMessage("Please accept the terms and condition")
  .custom((value, {})=>{
    if(value!=="on")
    {
      throw new Error("Please accept the terms and condition")
    }
    return true

  }),

  
  (req,res,next)=>{
    const {firstname, lastname, email,password, usertype}= req.body;
    const errors= validationResult(req);
    if(!errors.isEmpty())
    {
  console.log("type", usertype, errors.array())

      return res.status(422).render("auth/signup",{
        pageTitle: "SignUp",
        currentPage:"SignUp",
        isLoggedIn: false,
        errors: errors.array().map(err=>err.msg),
        oldInput:{firstname, lastname, email, usertype, password},
    user:{},

        
      })
    }
  console.log("sign successful", req.body)

  bcrypt.hash(password,12).then(hashPassword=>{
    const user= new User({firstname,lastname, email,password:hashPassword, usertype})
    return user.save();

  }).then(()=>{
    res.redirect("/login");
  }).catch(err=>{
      return res.status(422).render("auth/signup",{
        pageTitle: "SignUp",
        currentPage:"SignUp",
        isLoggedIn: false,
        errors: [err.message],
        oldInput:{firstname, lastname, email, usertype, password},
    user:{},

        
  })
 

})


}]



exports.postLogout= (req,res,next)=>{
console.log("in auth controler")
  req.session.destroy(()=>{
 res.redirect("/login");


  })





}





