
const express = require('express');
const routes = require('../routes');

const globalRouter = express.Router();

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

module.exports = globalRouter;