
const mongoose = require("mongoose");
//const dotenv = require("dotenv");

function handleOpen() {

    console.log("Connected to DB");
}

mongoose.connect(
    "mongodb://localhost:27017/wetube",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

db.once("open", handleOpen);

/* fake db for test
const videos = [
    {
        id:1,
        title: 'Video test',
        description: 'For test',
        views:24,
        videoFile:"https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        creators: {
            id: 10,
            name: "Sing",
            email: "qjwm5011@naver.com"
        }
    },
    {
        id:2,
        title: 'Video test2',
        description: 'For test2',
        views:20,
        videoFile:"https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        creators: {
            id: 20,
            name: "Sang",
            email: "inhae4744@naver.com"
        }
    },
    {
        id:3,
        title: 'Video test3',
        description: 'For test3',
        views:12,
        videoFile:"https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        creators: {
            id: 30,
            name: "Song",
            email: "elaha00@naver.com"
        }
    },
];

module.exports = videos;
*/