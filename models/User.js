
const mongoose = require("mongoose");
const passport = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number
});

UserSchema.plugin(passport, {usernameField: 'email'});

const model = mongoose.Model("User",UserSchema);

module.exports = model;