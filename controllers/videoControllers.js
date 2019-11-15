
// import {videos} from "../db"
const db = require("../db");

Object.defineProperty(exports, "__esModule", {
    value : true
});

exports.handleHome = handleHome;
exports.handleSearch = handleSearch;

exports.handleVideos = handleVideos;
exports.handleVideoDetail = handleVideoDetail;
exports.handleUpload = handleUpload;
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
    res.render('search.pug', {pageTitle: "Search", searchingFor: termIs});
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