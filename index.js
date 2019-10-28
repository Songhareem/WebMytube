
const express = require('express');
const app = express();

const PORT = 12000;

// callback func
function handleListening() {

    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);