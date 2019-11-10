
Object.defineProperty(exports, "__esModule", {
    value : true
});

exports.handleHome = handleHome;
exports.handleJoin = handleJoin;
exports.handleUsers = handleUsers;
exports.handleUserDetail = handleUserDetail;
exports.handleEditProfile = handleEditProfile;
exports.handleChangePassword = handleChangePassword;

// Global
function handleHome(req, res) {

    //res.send('home');
    res.render("home.pug", {pageTitle: "Home"});
}

function handleJoin(req, res) {

    res.render('join.pug', {pageTitle: "Join"});
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
