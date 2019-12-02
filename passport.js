
const passport = require("passport");
const User =require("./models/User");

// strategy 사용 (facebook, github 등)
passport.use(User.createStrategy());