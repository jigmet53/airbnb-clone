const express= require('express');
const hostRouter= express.Router();

const homeController= require("../controllers/host")

hostRouter.get("/add-home",homeController.getAddHome)
hostRouter.post("/add-home",homeController.postAddHome)
hostRouter.get("/host-home-list",homeController.getHostHomes)
hostRouter.get("/edit-home/:homeId",homeController.getEditHome)
hostRouter.post("/edit-home",homeController.postEditHome)
hostRouter.post("/delete-home/:homeID",homeController.postDeleteHome)



exports.hostRouter= hostRouter;
