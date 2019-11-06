

// load modules

//import express from "express";
//import morgan from "morgan";
//import helmet from "helmet";
//import cookieParser from "cookie-parser";
//import bodyParser from "body-parser";
//import { userRouter } from "./router"
 
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
//const videoRouter = require('./routers/videoRouter');
//const globalRouter = require('./routers/globalRouter');
const routes = require('./routes');

if("/users" === routes.users) {

    console.log("same");
} else {

    console.log("diff");
}

const app = express();

// 마지막으로 응답하는 함수이므로 next를 넣지않음
//const handleHome = (req, res) => res.send('Hi from Home, yeah!');
//const handleProfile = (req, res) => res.send("You are on my profile");

// 미들웨어 함수 정의부
//const betweenHome = (req, res, next) => {
//    
//    console.log("i'm between");
//    next();
//}

// 미들웨어 함수 선언부

// cookie, body parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// Helmet
app.use(helmet());

// Morgan options
app.use(morgan("combined"));
//app.use(morgan("common"));
//app.use(morgan("dev"));
//app.use(morgan("short"));
//app.use(morgan("tiny"));

// route 요청 처리부
// 내부 route 요청 처리부
//app.get("/", handleHome);
//app.get("/profile",handleProfile);

console.log("save!!!!!!!!!!!!!!!!!");

// 외부 route 요청 처리부
//app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
//app.use(routes.videos, videoRouter);

// app를 외부에서 접속 가능하게 export
//export default app;
module.exports = app;
