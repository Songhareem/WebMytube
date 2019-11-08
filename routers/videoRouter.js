
const express = require('express');
const routes = require("../routes");

const videoRouter = express.Router();

// video
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

module.exports = videoRouter;