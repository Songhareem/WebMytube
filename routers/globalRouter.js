
const express = require('express');
const routes = require('../routes');

const globalRouter = express.Router();

function handleHome(req, res) {

    res.send('home');
}

globalRouter.get(routes.home, handleHome);
/*
globalRouter.get(routes.join, (req,res) => res.send("join"));
globalRouter.get(routes.login, (req,res) => res.send("login"));
globalRouter.get(routes.logout, (req,res) => res.send("logout"));
globalRouter.get(routes.search, (req,res) => res.send("search"));
*/
module.exports = globalRouter;