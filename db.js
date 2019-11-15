
// fake db for test
const videos = [
    {
        id:1,
        title: 'Video test',
        description: 'For test',
        views:24,
        videoFile:"http://www.youtube.com/watch?v=UOxkGD8qRB4",
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
        videoFile:"http://www.youtube.com/watch?v=UOxkGD8qRB4",
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
        videoFile:"http://www.youtube.com/watch?v=UOxkGD8qRB4",
        creators: {
            id: 30,
            name: "Song",
            email: "elaha00@naver.com"
        }
    },
];

module.exports = videos;