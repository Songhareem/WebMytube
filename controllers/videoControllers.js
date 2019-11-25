

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

exports.handleGetEditVideo = handleGetEditVideo;
exports.handlePostEditVideo = handlePostEditVideo;

exports.handleDeleteVideo = handleDeleteVideo;

// Global
async function handleHome(req, res) {
    
    try{
        //await Video.remove();
        const videos = await Video.find({}).sort({ _id: -1}); // db의 모든 video 가져옴
        console.log(videos);
        res.render("home.pug", {pageTitle: "Home", videos: videos});
    }catch(error) {
        console.log(error);
        res.render("home.pug", {pageTitle: "Home", videos: []});
    }
}

async function handleSearch(req, res) {

    const searchingBy = req.query.term;
    let videos = [];
    try{
        videos = await Video.find({ title: { $regex: searchingBy, $options: "i"}}).sort({_id:-1});
    }catch(err){
        console.log(err);
    }
    res.render('search.pug', {pageTitle: "Search", searchingBy: searchingBy, videos: videos});
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
    console.log(req.body);
    //console.log(req.file);
    // to do: upload and save videos
    try{
        const newVideo = await Video.create({

            fileUrl: reqFile.path,
            title: reqBody.title,
            description: reqBody.description,
        });
        //console.log(newVideo, newVideo.id);
        res.redirect(routes.videoDetail(newVideo.id));
    }catch(error){
        console.log("Video Upload Error, Error Code is ", error);
        // 멈추면 안되지만 일단 그냥 진행
    }
}

async function handleVideoDetail(req, res) {

    /*/
    const {
        params: {id}
    } = req;
    //*/
    const videoID = req.params.id;
    try{
    const video = await Video.findById(videoID);
    console.log(video);
    res.render("videoDetail.pug", {pageTitle: video.title, video: video});    
    }catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

async function handleGetEditVideo(req, res) {

    const videoID = req.params.id;
    try{
        const video = await Video.findById(videoID);
        res.render("videoEdit.pug", {pageTitle: `Edit ${video.title}`, video: video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}

async function handlePostEditVideo(req, res) {

    const videoID = req.params.id;
    const body = req.body;
    try{
        await Video.findOneAndUpdate({_id: videoID}, 
            {
                title: body.title, 
                description: body.description
            });
        res.redirect(routes.videoDetail(videoID));
    }catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

async function handleDeleteVideo(req, res) {

    const videoID = req.params.id;
    try {
        await Video.findByIdAndRemove(videoID);
    }catch(err) {
        console.log(err);
    }
    res.redirect(routes.home);
    res.render("videoDelete.pug", {pageTitle: "Video Delete"});
}