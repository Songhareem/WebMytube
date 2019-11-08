
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

    res.send('login');
}

function handleLogout(req, res) {

    res.send('logout');
}

function handleSearch(req, res) {

    res.send('search');
}

//Video

function handleVideos(req, res) {

    res.send("videos");
}

function handleUpload(req, res) {

    res.send("video upload");
}

function handleVideoDetail(req, res) {

    res.send("video detail");
}

function handleEditVideo(req, res) {

    res.send("video edit");
}

function handleDeleteVideo(req, res) {

    res.send("video delete");
}