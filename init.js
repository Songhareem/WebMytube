
// app.js 안의 호출

import app from "./app";
//const app = require('./app');

const PORT = 12000;

const handleListening = () => console.log(`Listen on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);

