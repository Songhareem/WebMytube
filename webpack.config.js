
const path= require("path");
const autoprefixer = require("autoprefixer");
const extraCss = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets","js","main.js");
const OUTPUT_DIR = path.join(__dirname, "static"); // "static" dir 생성

const config = {
    
    // file(js, scss etc..) 읽어들이는 dir OR file
    entry: ENTRY_FILE,
    // webpack 모드 설정(develop, product etc..)
    mode: MODE,
    module: {
        rules: [
            /*////////// ES6 사용시 ////////////////
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            /*//////////////////////////////////////
            {
                // entry에서 scss 라는 파일을 찾는다면,
                test: /\.(scss)$/,
                // 아래있는 loader 들을 이용하여 추출
                use: extraCss.extract([
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [autoprefixer({ overrideBrowserslist: "cover 99.5%"})];
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                    }
                ])
            }
        ]
    },
    // webpack을 통해 생성될 files 저장될 dir AND js명
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    // 생성될 css 파일 명
    plugins: [new extraCss("styles.css")]
};

module.exports = config;