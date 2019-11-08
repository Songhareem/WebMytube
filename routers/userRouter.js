
const express = require("express");
const routes = require("../routes");
const userController = require("../controllers/userControllers");
const userRouter = express.Router();

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

// route 요청 처리부
userRouter.get("/", handleUsers);
userRouter.get(routes.editProfile, handleEditProfile);
userRouter.get(routes.changePassword, handleChangePassword);
userRouter.get(routes.userDetail, handleUserDetail);

// export
module.exports = userRouter;