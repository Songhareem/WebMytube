
// database config

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

function handleOpen() {

    //console.log(process.env.PORT);
    //console.log(process.env.MONGO_URL);
    console.log("Connected to DB");
}

function handleError(error) {

    console.log(`Error on DB connection ${error}`);
}

// db연결 함수 실행
db.once("open", handleOpen);
db.on("error",handleError);




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