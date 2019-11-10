
const express = require('express');
const routes = require('../routes');
const videoController = require('../controllers/videoControllers');
const videoRouter = express.Router();

videoRouter.get("/", videoController.handleVideos);
videoRouter.get(routes.upload, videoController.handleUpload);
videoRouter.get(routes.videoDetail, videoController.handleVideoDetail);
videoRouter.get(routes.editVideo, videoController.handleEditVideo);
videoRouter.get(routes.deleteVideo, videoController.handleDeleteVideo);

module.exports = videoRouter;

// video
/*
function HandleVideos(req, res) {

    res.send("videos");
}

function HandleUpload(req, res) {

    res.send("video upload");
}

function HandleVideoDetail(req, res) {

    res.send("video detail");
}

function HandleEditVideo(req, res) {

    res.send("video edit");
}

function HandleDeleteVideo(req, res) {

    res.send("video delete");
}

videoRouter.get("/", HandleVideos);
videoRouter.get(routes.upload, HandleUpload);
videoRouter.get(routes.videoDetail, HandleVideoDetail);
videoRouter.get(routes.editVideo, HandleEditVideo);
videoRouter.get(routes.deleteVideo, HandleDeleteVideo);
*/