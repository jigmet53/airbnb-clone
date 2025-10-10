const express= require('express');
const hostRouter= express.Router();

const homeController= require("../controllers/homes")

hostRouter.get("/add-home",homeController.getAddHome)
hostRouter.post("/add-home",homeController.postHome)
exports.hostRouter= hostRouter;
