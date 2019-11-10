
const routes = require("./routes");

Object.defineProperty(exports,"__esModule", {

    value : true
});

exports.localsMiddleware = localsMiddleware;

function localsMiddleware(req, res, next) {

    // 외부에도 변수명처럼 존재
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    
    // 이 다음에 있는 함수로 개행
    next();
}; 