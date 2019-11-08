
Object.defineProperty(exports, "__esModule", {
    value : true
});

exports.handleHome = handleHome;
exports.handleJoin = handleJoin;
exports.handleUsers = handleUsers;
exports.handleUserDetail = handleUserDetail;
exports.handleEditProfile = handleEditProfile;
exports.handleChangePassword = handleEditProfile;

// Global
function handleHome(req, res) {

    res.send('home');
}

function handleJoin(req, res) {

    res.send('join');
}

//Users
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
