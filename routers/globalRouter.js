
const express = require('express');
const routes = require('../routes');

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get(routes.join, handleJoin);
globalRouter.get(routes.login, handleLogin);
globalRouter.get(routes.logout, handleLogout);
globalRouter.get(routes.search, handleSearch);

module.exports = globalRouter;