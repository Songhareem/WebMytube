
const express = require("express");
const routes = require("../routes");
const userController = require("../controllers/userControllers");
const userRouter = express.Router();

// route 요청 처리부
userRouter.get("/", userController.handleUsers);
userRouter.get(routes.editProfile, userController.handleEditProfile);
userRouter.get(routes.changePassword, userController.handleChangePassword);
userRouter.get(routes.userDetail, userController.handleUserDetail);

// export
module.exports = userRouter;

/*
function handleUsers(req, res) {

    res.send("users");
}

function handleUserDetail(req,res) {

    res.send("user detail");
}

function handleEditProfile(req,res) {

    res.send("user edit profile");
}

function handleChangePassword(req, res) {

    res.send("user change password");
}

userRouter.get("/", handleUsers);
userRouter.get(routes.editProfile, handleEditProfile);
userRouter.get(routes.changePassword, handleChangePassword);
userRouter.get(routes.userDetail, handleUserDetail);
*/
