
// app.js 안의 호출

//import app from "./app";
const app = require('./app');
// import "./db"
require("./db");

const PORT = 4000;

//const handleListening = () => console.log(`Listen on : http://localhost:${PORT}`);

function handleListening() {
    
    console.log(`Listen on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);