
// middleware 및 외부에서 접근 가능한 변수 선언

const routes = require("./routes");
const multer = require("multer");

Object.defineProperty(exports,"__esModule", {

    value : true
});

exports.localsMiddleware = localsMiddleware;
exports.uploadVideo = void 0;

// multer file 저장 경로
const multerVideo = multer({dest: "uploads/videos/"});
const uploadVideo = multerVideo.single("videoFile");

exports.uploadVideo = uploadVideo;

function localsMiddleware(req, res, next) {

    // 외부에도 변수명처럼 존재
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    
    //*///// Auth Test ////////
    res.locals.user = {
        isAutenticated: false,
        id:1
    };
    /////////////////////////*/

    // 이 다음에 있는 함수로 개행
    next();
};