
const routes = require('../routes');
const User = require('../models/User');
const passport = require('passport');

Object.defineProperty(exports, "__esModule", {
    value : true
});

exports.handleGetJoin = handleGetJoin;
exports.handlePostJoin = handlePostJoin;
exports.handleGetLogin = handleGetLogin;
exports.handlePostLogin = void 0;
exports.handleLogout = handleLogout;

exports.handleUsers = handleUsers;
exports.handleUserDetail = handleUserDetail;
exports.handleEditProfile = handleEditProfile;
exports.handleChangePassword = handleChangePassword;

// Global
async function handleGetJoin(req, res) {

    console.log(await User.findOneAndDelete({name: "송하림"}));
    res.render('join.pug', {pageTitle: "Join"});
}

async function handlePostJoin(req,res,next) {

    const reqBody = req.body;
    // password worng
    if(reqBody.password !== reqBody.password2) {
        res.status(400); // 크롬 비번 자동저장 기능 off 위해
        res.render('join.pug', {pageTitle: "Join"});
    } else {
        // to do : register user, Log user in
        try{
            const user = {
                name: reqBody.name,
                email: reqBody.email, 
            };
            // register({name, email}, password);
            await User.register(user, reqBody.password);
            console.log(await User.find({}));
            next();
        }catch(err) {
            console.log(err);
            res.redirect(routes.home);
        }
    }
}

function handleGetLogin(req, res) {

    res.render('login.pug', {pageTitle: "Login"});
}

const handlePostLogin = passport.authenticate('local',{

    failureRedirect: routes.login,
    successRedirect: routes.home,
})

function handleLogout(req, res) {

    // to do : 로그아웃 진행
    res.redirect(routes.home);
}

//Users
function handleUsers(req, res) {

    res.render("users.pug", {pageTitle: "Users"});
}

function handleUserDetail(req,res) {

    res.render("userDetail.pug", {pageTitle: "User Detail"});
}

function handleEditProfile(req,res) {

    res.render("userEditProfile.pug", {pageTitle: "Edit Profile"});
}

function handleChangePassword(req, res) {

    res.render("userChangePassword.pug", {pageTitle: "Change Password"});
}

exports.handlePostLogin = handlePostLogin;