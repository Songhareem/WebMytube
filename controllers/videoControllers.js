
// import {videos} from "../db"
const db = require("../db");
const routes = require("../routes");

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
function handleHome(req, res) {

    //res.send('home');
    res.render("home.pug", {pageTitle: "Home", videos: db});
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

function handlePostUpload(req, res) {

    const reqBody = req.body;
    // title, file, description
    // to do: upload and save videos
    const fakeID = 1;
    res.redirect(routes.videoDetail(fakeID));
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