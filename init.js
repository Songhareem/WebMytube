
// app.js 안의 호출

// import "./db"
require("./db");            // DB 연동
require("./models/Video");   // 내가 정의한 schema read
require("./models/Comment"); 
require("./models/User");

//import app from "./app";
const app = require('./app');

const PORT = process.env.PORT || 4000; // 만약 못 찾는다면 port 4000으로 진행

//const handleListening = () => console.log(`Listen on : http://localhost:${PORT}`);

function handleListening() {
    
    console.log(`Listen on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);