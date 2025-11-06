const express= require('express');
const userRouter= express.Router();


const homeController= require('../controllers/store')


userRouter.get("/",homeController.getIndex)
userRouter.get("/home",homeController.getHomes)

userRouter.get("/booking",homeController.getBooking)
userRouter.get("/favourite-list",homeController.getFavtouteList)
userRouter.post("/favourites",homeController.postAddToFavourite)
userRouter.post("/favourites/delete/:homeId",homeController.postRemoveFromFavourite)



userRouter.get("/home/:homeId",homeController.getHomeDetails)

userRouter.get("/reserve",homeController.getReserve)


module.exports= userRouter;