
const express = require("express");
const routes = require("../routes");

const userRouter = express.Router();

//userRouter.get("/", (req, res) => res.send("user index"));
//userRouter.get("/edit", (req, res) => res.send("user edit"));
//userRouter.get("/password", (req, res) => res.send("user password"));

// route 요청 handles
function HandleUsers(req, res) {

    res.send("users");
}

function HandleUserDetail(req,res) {

    res.send("user detail");
}

function HandleEditProfile(req,res) {

    res.send("user edit profile");
}

function HandleChangePassword(req, res) {

    res.send("user change password");
}

// route 요청 처리부
userRouter.get("/", HandleUsers);
userRouter.get(routes.editProfile, HandleEditProfile);
userRouter.get(routes.changePassword, HandleChangePassword);
userRouter.get(routes.userDetail, HandleUserDetail);

// export
module.exports = userRouter;