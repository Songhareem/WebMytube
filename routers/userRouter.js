
const express = require("express");

const userRouter = express.Router();

//userRouter.get("/", (req, res) => res.send("user index"));
//userRouter.get("/edit", (req, res) => res.send("user edit"));
//userRouter.get("/password", (req, res) => res.send("user password"));

// route 요청 handles
function HandleUsers(req, res) {

    res.send("users");
}

function HandleGetEdit(req,res) {

    res.send("user edit");
}

function HandleGetPassword(req, res) {

    res.send("user password");
}

// route 요청 처리부
userRouter.get("/", HandleUsers);

// export
module.exports = userRouter;