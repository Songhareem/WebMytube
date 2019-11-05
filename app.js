

// load modules

import express from "express";
//const express = require('express');
import morgan from "morgan";
//const morgan = require('morgan');
import helmet from "helmet";
//const helmet = require('helmet');
import cookieParser from "cookie-parser";
//const cookieParser = require('cookie-parser');
import bodyParser from "body-parser";
//const bodyParser = require('body-parser');

const app = express();

// 미들웨어를 거친 함수이므로 next를 넣지않음
const handleHome = (req, res) => res.send('Hi from Home, yeah!');
//function handleHome(req, res) {//
//
//    console.log(req);
//    res.send('Hi form Home!');
//}

//미들웨어를 거친 함수이므로 next를 넣지않음
const handleProfile = (req, res) => res.send("You are on my profile");
//function handleProfile(req, res) {
//
//    res.send("You are on my profile");
//}

// 미들웨어 함수 정의부
const betweenHome = (req, res, next) => {
    
    console.log("i'm between");
    next();
}

// 미들웨어 함수 선언부

// cookie, body parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


// Helmet
app.use(helmet());

// Morgan options
app.use(morgan("combined"));
app.use(morgan("common"));
app.use(morgan("dev"));
app.use(morgan("short"));
app.use(morgan("tiny"));

app.use(betweenHome);

// route 요청 처리부
app.get("/", handleHome);

app.get("/profile",handleProfile);

// app 변수를 외부에서 접속 가능하게 오픈
export default app;
//module.exports app; // 작동안됨;
