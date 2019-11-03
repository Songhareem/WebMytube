

const express = require('express');
//import express from "express";

const app = express();

const PORT = 12000;

// callback func
const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);
//function handleListening() {//
//
//    console.log(`Listening on: http://localhost:${PORT}`);
//}

const handleHome = (req, res) => 
    res.send('Hi from Home');
//function handleHome(req, res) {//
//
//    console.log(req);
//    res.send('Hi form Home!');
//}

const handleProfile = (req, res) =>
    res.send("You are on my profile");
//function handleProfile(req, res) {
//
//    res.send("You are on my profile");
//}

app.get("/", handleHome);

app.get("/profile",handleProfile)

app.listen(PORT, handleListening);