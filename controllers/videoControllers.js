
Object.defineProperty(exports, "__esModule", {
    value : true
});

exports.handleLogin = handleLogin;
exports.handleLogout = handleLogout;
exports.handleSearch = handleSearch;

exports.handleVideos = handleVideos;
exports.handleVideoDetail = handleVideoDetail;
exports.handleUpload = handleUpload;
exports.handleEditVideo = handleEditVideo;
exports.handleDeleteVideo = handleDeleteVideo;

// Global
function handleLogin(req, res) {

    res.render('login.pug', {pageTitle: "Login"});
}

function handleLogout(req, res) {

    res.render('logout.pug', {pageTitle: "Logout"});
}

function handleSearch(req, res) {

    res.render('search.pug', {pageTitle: "Search"});
}

//Video

function handleVideos(req, res) {

    res.render("videos.pug", {pageTitle: "Videos"});
}

function handleUpload(req, res) {

    res.render("videoUpload.pug", {pageTitle: "Video Upload"});
}

function handleVideoDetail(req, res) {

    res.render("videoDetail.pug", {pageTitle: "Video Detail"});
}

function handleEditVideo(req, res) {

    res.render("videoEdit.pug", {pageTitle: "Video Edit"});
}

function handleDeleteVideo(req, res) {

    res.render("videoDelete.pug", {pageTitle: "Video Delete"});
}