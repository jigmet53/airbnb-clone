const express= require('express');
const userRouter= express.Router();


const homeController= require('../controllers/store')


userRouter.get("/",homeController.getIndex)
userRouter.get("/home",homeController.getHomes)

userRouter.get("/store/booking",homeController.getBooking)
userRouter.get("/store/favroute-list",homeController.getFavtouteList)

userRouter.get("/store/home-details",homeController.getHomeDetails)

userRouter.get("/store/reserve",homeController.getReserve)

module.exports= userRouter;