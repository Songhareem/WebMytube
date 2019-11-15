
const express = require('express');
const routes = require('../routes');
const userController = require('../controllers/userControllers');
const videoController = require('../controllers/videoControllers');

const globalRouter = express.Router();

globalRouter.get("/", videoController.handleHome);
globalRouter.get(routes.join, userController.handleJoin);
globalRouter.get(routes.login, userController.handleLogin);
globalRouter.get(routes.logout, userController.handleLogout);
globalRouter.get(routes.search, videoController.handleSearch);

module.exports = globalRouter;

/*
function handleHome(req, res) {

    res.send('home');
}

function handleJoin(req, res) {

    res.send('join');
}

function handleLogin(req, res) {

    res.send('login');
}

function handleLogout(req, res) {

    res.send('logout');
}

function handleSearch(req, res) {

    res.send('search');
}

globalRouter.get("/", handleHome);
globalRouter.get(routes.join, handleJoin);
globalRouter.get(routes.login, handleLogin);
globalRouter.get(routes.logout, handleLogout);
globalRouter.get(routes.search, handleSearch);
*/
