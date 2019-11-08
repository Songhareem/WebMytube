
Object.defineProperty(exports, "__esModule", {
    value : true
});

// Global
function handleHome(req, res) {

    return res.send('home');
}

function handleJoin(req, res) {

    return res.send('join');
}

function handleLogin(req, res) {

    return res.send('login');
}

function handleLogout(req, res) {

    return res.send('logout');
}

function handleSearch(req, res) {

    return res.send('search');
}

exports.handleHome = handleHome;
exports.handleJoin = handleJoin;
exports.handleLogin = handleLogin;
exports.handleLogout = handleLogout;
exports.handleSearch = handleSearch;
