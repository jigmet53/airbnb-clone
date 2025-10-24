const express= require('express');
const authRouter= express.Router();

const authController= require("../controllers/authController")

authRouter.get("/login",authController.getLogin)

authRouter.post("/login",authController.postLogin)
console.log("in auth router")

authRouter.post("/logout",authController.postLogout)




module.exports= authRouter;
