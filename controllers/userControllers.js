
Object.defineProperty(exports, "__esModule", {
    value : true
});

exports.handleJoin = handleJoin;
exports.handleLogin = handleLogin;
exports.handleLogout = handleLogout;

exports.handleUsers = handleUsers;
exports.handleUserDetail = handleUserDetail;
exports.handleEditProfile = handleEditProfile;
exports.handleChangePassword = handleChangePassword;

// Global

function handleJoin(req, res) {

    res.render('join.pug', {pageTitle: "Join"});
}

function handleLogin(req, res) {

    res.render('login.pug', {pageTitle: "Login"});
}

function handleLogout(req, res) {

    res.render('logout.pug', {pageTitle: "Logout"});
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
