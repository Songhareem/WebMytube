

const routes = require("../routes");
const Video = require("../models/Video");

Object.defineProperty(exports, "__esModule", {
    value : true
});

exports.handleHome = handleHome;
exports.handleSearch = handleSearch;

exports.handleVideos = handleVideos;
exports.handleVideoDetail = handleVideoDetail;

exports.handleGetUpload = handleGetUpload;
exports.handlePostUpload = handlePostUpload;

exports.handleEditVideo = handleEditVideo;
exports.handleDeleteVideo = handleDeleteVideo;

// Global
async function handleHome(req, res) {

    try{
        videos = await Video.find({}); // db의 모든 video 가져옴
        console.log(videos);
        res.render("home.pug", {pageTitle: "Home", videos: videos});
    }catch(error) {
        console.log(error);
        res.render("home.pug", {pageTitle: "Home", videos: []});
    }
}

function handleSearch(req, res) {

    /*
    const {
        query : { term: termIs}
    } = req;
    */
    const termIs = req.query.term;
    res.render('search.pug', {pageTitle: "Search", searchingFor: termIs, videos: db});
}

//Video
function handleVideos(req, res) {

    res.render("videos.pug", {pageTitle: "Videos"});
}

function handleGetUpload(req, res) {

    res.render("videoUpload.pug", {pageTitle: "Video Upload"});
}

async function handlePostUpload(req, res) {

    const reqBody = req.body; // title, description
    const reqFile = req.file; // path

    // to do: upload and save videos
    try{
        const newVideo = await Video.create({

            fileUrl: reqFile.path,
            title: reqBody.title,
            description: reqBody.description,
        });
        console.log(newVideo, newVideo.id);
        res.redirect(routes.videoDetail(newVideo.id));
    }catch(error){
        console.log("Video Upload Error, Error Code is ", error);
        // 멈추면 안되지만 일단 그냥 진행
    }
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