
// video 형태 정의 js파일

// schema(definition)
const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({

    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        defalut: 0
    },
    createdAt : {
        type: Date,
        defalut: Date.now // 현재 날짜 반환 함수
    },
    commment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
});

// document
const model = mongoose.model("Video", VideoSchema);

module.exports = model;