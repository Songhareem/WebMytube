
const routes = require('../routes');

Object.defineProperty(exports, "__esModule", {
    value : true
});

exports.handleGetJoin = handleGetJoin;
exports.handlePostJoin = handlePostJoin;
exports.handleGetLogin = handleGetLogin;
exports.handlePostLogin = handlePostLogin;
exports.handleLogout = handleLogout;

exports.handleUsers = handleUsers;
exports.handleUserDetail = handleUserDetail;
exports.handleEditProfile = handleEditProfile;
exports.handleChangePassword = handleChangePassword;

// Global

function handleGetJoin(req, res) {

    res.render('join.pug', {pageTitle: "Join"});
}

function handlePostJoin(req,res) {

    const reqBody = req.body;
    // password worng
    if(reqBody.password !== reqBody.password2) {
        res.status(400); // 크롬 비번 자동저장 기능 off 위해
        res.render('join.pug', {pageTitle: "Join"});
    } else {
        // to do : register user, Log user in
        res.redirect(routes.home);
    }
}

function handleGetLogin(req, res) {

    res.render('login.pug', {pageTitle: "Login"});
}

function handlePostLogin(req, res) {
    // to do : 입력한 사용자 비번 DB에서 조회
    res.redirect(routes.home);
}

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
