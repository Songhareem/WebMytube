
# Mytube 만들기

## 1) NodeJs
+ NodeJs란?<br/>
  브라우저에 내장되어있는 JS를 유저의 컴퓨터(브라우저 밖)에서 돌아갈 수 있게 한 것

+ 언제 사용하는가?<br/>
  백엔드/서버를 빌드해야하는 경우

+ 왜 Python + Django / PHP + laravel 이 아닌 NodeJs인가?<br/>
  프론트엔드 및 백엔드를 JS로 하고싶은 경우<br/>
  밑바닥부터 시작하는게 좋다면 Node.JS(이미 있는 라이브러리를 하려면 Django/PHP)<br/>
  데이터를 많이 다룰 때(CRUD), 실시간/대용량 데이터 처리시 NodeJS<br/>
  (메모리-인코딩, 디코딩 등- 하드웨어-램, 하드 드라이브- 관련 접근이 필요하다면 Django)
  인터렉티브하지 않은 정적인 사이트를 만들 때

+ 누가 사용하는가?<br/>
  백엔드의 경우, 여러 언어로 만들어질 수 있음.<br/>
  이베이, 페이팔, 우버, 넷플릭스 등이 NodeJS를 메인으로 만들어졌음<br/>

+ 소프트웨어 서버란?<br/>
  인터넷(public private 네트워크)에 연결된 한 덩어리의 코드<br/>
  접속에 요청에 응답하는 소프트웨어

+ async : 동기 함수로 만들려 할때
    await : async funcion내에서만 가능, await 뒤의 작업을 완료할때까지 진행하지 않음

## 2) Express
+ Express란?<br/>
  NodeJs를 위한 서버 프레임워크

+ NPM(Node Package Manager)?<br/>
  nodejs 관련된 모든것을 담아두는 패키지 매니저<br/>
  NPM을 이용해 express를 다운로드 및 인스톨<br/>
  Nodejs를 다운받으면 같이 다운로드 받아짐<br/>
  터미널에서 npm -v를 통해 버전 확인<br/>
  npm init 명령어 : 만들 패키지(해당 프로젝트에서는 웹사이트)에 대한 정보를 요구<br/>
  npm init 명령어를 통해 package.json 생성<br/>
  package.json 있는 폴더에 express 설치<br/>
  npm install express 명령어<br/>
  설치하고 나면 node_modules와 package-lock.json 파일 생성<br/>
  package.json에 express version이 생성됨<br/>
  만들어질 웹사이트는 위의 express version 이상을 가져야함<br/>
    
+ 협업을 하고싶을 때?<br/>
  package.json과 main js파일(package.json에 적힌 것)만 전달해주면<br/>
  npm install 명령어를 통해 동일한 개발환경을 구성할 수 있다<br/>

+ git 업로드를 위해 node_modules를 업로드 하지 못하게 세팅<br/>
  .gitignore 파일 생성<br/>
  gitignore nodejs 표준(https://github.com/github/gitignore/blob/master/Node.gitignore),<br/>
  package-lock.json(package에 대한 security와 연관),<br/>
  위의 것들을 gitignore에 추가

+ 서버 실행?<br/>
  1) 터미널에서 node serverName.js 입력
  2) package.json 내에서 "script" { "start": "node serverName.js }<br/>
  추가 후, 터미널에서 npm start 입력

## 3) Express 명령어

+ require("name") : require명령어를 실행하는 js파일이 있는 폴더에서<br/> 
  'name'을 가진 폴더,파일이 있는지 확인하고 없으면 node_modules 에서 찾음<br/>
    + 같은 디렉토리 접근하려면, ./name
    + 한단계 밖의 디렉토리 접근, ../name

+ require("path")
    + __dirname : 현재 프로젝트의 디렉토리 이름(Nodejs 전역변수)
    + path.resolve(filePath, "folderName","innerFolderName", "inner.js")
    + path.join(folderPath, "whatYouWannaConnectFolderName")

+ app.express() : expressjs 실행

+ app.listen(portNum) : portNum 로부터 listen

+ app.get("html route", midFunc,lastFunc) : 사용자가 'html route' URL로 접속시, midfunc 실행 후, lastFunc 진행
    + midFunction(req, res, next) {<br/>
          do something;<br/>
          next();<br/>
      }
    + lastFunction(req, res) {<br/>
          res.send("~");<br/>
      }
    
    + ~ : css js 를 포함한 full html 파일
    + next : 요청을 계속 처리할 수 있는 권한을 가진 key값
    + midFunc 넣을시, 해당 route요청에만 midFunc 처리

+ app.set("title", 'My Site') : 어플리케이션 설정하는 함수

+ app.use(midFunc) : 범용적인 route의 Midddleware 선언
    + 모든 get function위에 선언되어야 함

+ res.send('보내고 싶은 문장') : 문장 전송

+ res.render("template.pug",{ObjectToTemplate}) : html 전송
    + 첫번째 인자 : 템플릿
    + 두번째 인자 : 템플릿에 추가할 정보가 담긴 객체

+ res.locals.something = "something" : 로컬 변수를 글로벌 변수로 사용가능하게 함
    + locals에 변수를 저장하면, 외부에서 사용가능

+ res.status(status code) = status code(숫자) 전송

+ res.redirect(path) = path로 페이지 이동

+ app.use("/path", express.static("dirName")
    + /path로 접근시,
    + express.static("dirName") dir에 file을 보내주는 middleware
    + controller나 view 가 있는지 확인하지 않음

+ req.file : 받은 file 정보
+ req.body : 받은 body 정보
+ req.params : 받은 

## 4) Babel

+ 최근의 js code를 무난한 예전의 js code로 변환해주는 컴파일러

+ npm 6.12 기준
    + npm install @babel/node
    + npm install @babel/core
    + npm install @babel/preset-evn
    + npm install @babel/polyfill
    + npm install babel-loader(webpack 사용시)

> import/export 에러 상황<br/>
> import -> require("moduleName");
> export -> module.exports = exportDefaultName;
    

## 5) nodemon

+ js파일 새 저장시마다 서버 재시작

## 6) npm

+ dependency : 프로젝트가 실행되기 위해 필요한 것
+ npm install --save : dependency에 모듈 추가
+ npm install --save-dev : devDependency에 모듈
  추가
+ npm install -g : npm install --save-dev와 같다
+ npm install : dependency, devDependency에 모듈
  추가

## 7) Middleware

+ 요청과 응답 사이에서 어떤것을 처리하는 것(로직, 흐름, 함수들)

+ 요청을 중간에 끊을 수 있음 (응답 Function 실행 X)
    + middleware가 next();대신 res.send(); 실행시 일어남

## 8) Morgan

+ logging에 도움을 주는 미들웨어

+ npm install morgan

+ use(morgan("option"));
    + option : combined, common, dev, short, tiny
        + combined : ::1 - - [05/Nov/2019:12:19:27 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36"
        + common : ::1 - - [05/Nov/2019:12:19:27 +0000] "GET / HTTP/1.1" 304 -
        + dev : GET / 304 2.485 ms - -
        + short : ::1 - GET / HTTP/1.1 304 - - 2.485 ms
        + tiny : GET / 304 - - 2.485 ms

## 8) Helmet

+ NodeJS 앱의 보안 헬퍼 미들웨어

+ npm install Helmet

## 9) body-parser

+ body로부터 정보 얻어오는 미들웨어

+ npm install body-parser

+ body-parser options : https://github.com/expressjs/body-parser

## 10) cookie-parser

+ cookie정보 얻어오는 미들웨어

+ session을 다루기 위해 유저 컴퓨터에 저장된 cookie를 얻어올때 사용

+npm install cookie-parser

## 11) Pug

+ View 다루는 것을 돕기위한 미들웨어

+ nodejs의 템플릿 엔진 중 하나, HTML을 다루게 도와준다

+ npm install pug

+ application의 view engine 설정 값을 변경 (undefined -> pug)
    + .set('view-engine', pug);

+ pug와 express에는 view 파일들의 위치에 관한 기본 설정이 존재
    + 이를 바꾸고 싶다면, views 설정을 변경

+ html 파일을 저장해야하는 폴더의 기본값은 프로젝트 작업 디렉토리 + '/views'

+ 사용 예시 ) < p > hello < /p > = p hello

+ form(action="path", method="get") 으로 해당 path의 controller를 호출
    + 정보를 비밀로 유지해야할때는 method="post"

+ | : 이 뒤에 오는 문자를 태그가 아닌 문자열로 인식

+ each element in Array : 배열에서 하나씩 요소 가져옴(iterator) 사용법)
    + h1=element.factor

+ mixins : 자주 반복되는 html 코드 담고 있는 폴더

+ input의 accept옵션 ("audio/", "image/*", "video/*) 를 이용해 수용하는 file 제한

## 12) MVC Patten

+ MVC? 
    + Module View Controler
    + M : 데이터 (DB)
    + V : 데이터가 어떻게 보이는가 (template)
    + C : 데이터를 받고, 로직 처리 후, 알맞는 페이지를 보냄

+ Model
    +

+ View
    + pug 를 이용
    + layout : html 틀
    + partials : 페이지의 일부분

+ Controller
    + router, handler 각자 따로 관리
    + router 모아서 관리
    + handler 모아서 관리

## 13) Routers

+ routes.js : 모든 url 모아놓음
    + :id?
        + 변할 수 있는 값(정수)
        + :id가 들어가는 URL get()은 다른 get 아래에 둘 것

+ router 폴더
    + globalRouter.js : "/"에 해당하는 요청 관리
    + userRouter.js : "/user"에 해당하는 요청관리
    + videoRouter.js : "/video"에 해당하는 요청관리

## 14) dependency VS devDependency

+ dependency : 실제 상품에서 사용할 패키지(기술 스펙으로 사용되어야할 라이브러리)

+ devDependency: 개발용 패키지(개발시 필요한 라이브러리)

+ 컴파일(빌드) 타임에 필요한 라이브러리 : devDependency

+ 런타임에도 계속 쓰이는 것 : dependency

# 15) mongoDB

+ 장점 : document(json파일) 줄여줌

+ js와 연동하기 위해 어댑터 필요 : mongoosejs

+ mongoosejs 설치 : npm install --save mongoose

+ mongoose.connect("mongodb://localhost:27017/dbName", {att1 : true or false, att2: true or false ...});
    + 연결하려는 db명, 연결시도 할 때마다, 해당 attribute에 대해 true/false 로 설정하고 요청

+ db 연결
    <pre>mongoose.connection.once("open", handleOpen);</pre>

+ db 연결 error 처리
    <pre>mongoose.connection.on("error",handleError);</pre>

+ 다른 js에서 open된 mongoose 가 포함된 js파일을 require하면 바로 DB와 연결됨

+ 스키마 생성
    <pre>const newSchema = new mongoose.Schema({
    key: {
        value: Stiring,
        required: "required String input",
        defalut: "default String",
        ...
        },
        ...
    });</pre>

+ 스키마 모델화
    <pre>mongoose.model("Key", newSchema);</pre>

+ 모델화된 스키마 읽기
    <pre>mongoose.Schema.Types.ObjectId, ref : "Key"</pre>

# 16) dotenv

+ 일반적으로 json을 사용하여 보관하는 포트번호, secret code, database주소 등의 환경변수를 .env파일에 숨겨주는 모듈

+ .env 파일 생성후, key=value 방식으로 저장

+ .env 파일은 .gitignore에 포함시켜줄 것

+ 사용시,
    + import dotenv from "dotenv"; 
    + dotenv.config(); // .env 파일 불러오기
    + process.env.key; // return value of key

# 16-1) cross-env

+ process.env 사용시, OS가 Window라서 인식못하는 발생하는 문제 해결
    + package.json의 script에서 webpack 관련 스크립트 설정시, 밖에서 env에 인식이 안됨
    + 문제 : "dev:assets": "WEBPACK_ENV=development webpack"
    + 해결 : "dev:assets": "cross-env WEBPACK_ENV=development webpack"

+ npm install --save-dev cross-env

# 17) multer

+ file을 업로드하고 URL을 반환해주는 middleware

+ npm install --save multer

+ file upload하는 form에 enctype="multipart/form-data" 속성 추가

+ multer({dest: "uploadPath/"}).single("nameOfFile")
    + dest: 경로
    + single("~") : 하나의 파일만 업로드
    + nameOfFile : file 받는 form 안 input 내의 'name'에 해당하는 value값
    + 경로에 관해 : 
        + /path : 내 컴퓨터 root에 upload 만듦
        + 

# 18) mongoDB

+ 터미널로 mongo 실행 후,
    + use dbName : switched to db dbName
    + show collections : 테이블 보기
    + db.collectionName.find() : 테이블 내 데이터 보기
    + db.collectionName.remove({}) : 테이블 지우기 

# 19) ESLint

+ js대상 정적 코드 분석도구

+ install ref : https://steadyzest.tistory.com/20

# 20) regular expression(정규표현식)

+ 특정한 규칙을 가진 문자열의 집합을 표현하는 데 사용하는 형식 언어

# 21) webpack

+ es6, Scss 등의 모던 js css 등을 클래식 js css 로 변환해줌

+ 설치 : npm install webpack webpack-cli

+ 완전히 클라이언트단 코드이므로, babel이 먹지않음

+ entry?
    + 파일들이 어디에서 왔는가

+ output
    + 그것을 어디에 넣을 것인가

+ webpack.config.js 
    + entry files, output folder 설정
    + run mode 설정(develop OR production)
    + js, scss, sass등에 맞는 loader 설정

# 21-1) extract-text-webpack-plugin

+ webpack config에 필요한 텍스트 추출 기능

+ npm install --save-dev extract-text-webpack-plugin

+ extract([{1},{2},{3}]) : 3->2->1 순으로 추출 진행

+ loader 필요하므로 설치
    + npm install css-loader postcss-loader sass-loader

# 22) postcss

+ css의 호환성을 해결해주는 문법

+ Autoprefixer : CSS를 파싱할 때 자동으로 vendor 별 prefix를 붙여주는 플러그인

+ npm install autoprefixer

# 23) sass

+ css의 세련된 문법

+ npm install node-sass

+ _variables.scss
    + css에서 사용할 색
    + 언더바가 붙은 이유: 실제 사용자들은 사용하지 않을것이므로

+ reset.scss
    + 브라우저 기본값들을 초기화, 값들을 0으로 만듦
    + ref: https://gist.github.com/hcatlin/1027867

+ main.scss
    + html body, main(main.pug를 위함) 등 범용적인 틀에서 쓰이는 설정 
        + font-family, bgColor 등

+ styles.scss
    + 실제로 html에서 link로 읽어올 stylesheet

## css 정리

+ display: options;
    + grid
        + grid 레이아웃 사용
        + repeat() ref : https://developer.mozilla.org/en-US/docs/Web/CSS/repeat
        + grid-template-columns : Apx Bpx Cpx ... Npx;
            + N개의 행을 각각 A B C ... N px 넓이로 지정
        + grid-template-rows : Apx Bpx Cpx ... Npx;
            + N개의 열을 각각 A B C ... N px 넓이로 지정
    + flex
        + flex box 모델 사용

+ box 모델
    + margin : 테두리와 외곽의 거리
        + Border : 테두리
            + padding : 테두리와 내용의 거리
                + content : 내용

+ margin: 0 auto
    + 좌우 여백 사이즈 정렬

+ place-content : A B
    + A에서 시작해서 B에서 끝
    + A : 세로 위치 지정
        + start : 위쪽
        + center : 중앙
        + end : 아래쪽
    + B : 가로 위치 지정
        + start : 왼쪽
        + center : 중앙
        + end : 오른쪽 

+ 선택자
    + * : 전체 선택
    + 태그명 : 지정된 태그명을 가지는 요소 선택
    + #id : id값을 가지는 요소 선택
    + .class : class이름을 가지는 요소 선택
    + 셀렉터[속성] : 셀렉터 내의 속성을 갖는 요소 모두 선택
    + 셀렉터[속성=값] : 셀렉터 내에서 속성이 해당 값을 갖는 요소 모두 선택
    + 

+ :nth-child(), :nth-last-child()
    + :nth-child()와 :nth-last-child()는 특정 순서에 있는 요소를 선택할 때 사용하는 선택자입니다.
    + :nth-child()는 앞에서부터 세고, :nth-last-child()는 뒤에서부터 셉니다.

+ flex box
    + container (겉 박스)
    + items (겉 박스 안의 박스들)
    + justify-choice: options / align-items: options
        + 각각 가로 / 세로 중심축을 설정, 축을 중심으로 items 정렬
        + choice
            + content, items : 전체 items 설정
            + self : 지정된 단일 item 설정
        + options
            + flex-start
            + flex-end
            + center
            + space-between
            + space-around

+ font-weigth: N
    + 폰트 굵기

+ text-transform: options
    + 대문자 또는 소문자 변경
        + none : 입력된 그대로 출력합니다.
        + capitalize : 단어의 첫번째 글자를 대문자로 바꿉니다.
        + uppercase : 모든 글자를 대문자로 바꿉니다.
        + lowercase : 모든 글자를 소문자로 바꿉니다.
        + initial : 기본값으로 설정합니다.
        + inherit : 부모 요소의 속성값을 상속받습니다.

+ border
    + 테두리 설정 (width-style-color 순)
    + width: Npx
    + style: options
        + solid
	    + dotted
	    + dashed
	    + double
	    + groove
	    + ridge
	    + inset
	    + outset
    + color: color value


## ref 페이지

+ express ref : https://expressjs.com/
    + API reference 참조

+ 아이콘 : https://fontawesome.com
    + <script src="https://kit.fontawesome.com/ab7da79ab3.js" crossorigin="anonymous"></script> (가입하고 사용가능한 무료 코드)

+ 상태 코드 : https://developer.mozilla.org/ko/docs/Web/HTTP/Status

+ multer ref : https://github.com/expressjs/multer/blob/master/doc/README-ko.md

+ mongoose ref : https://mongoosejs.com/docs/guide.html

+ 정규표현식 ref : https://regex101.com, https://docs.mongodb.com/manual/reference/operator/query/

+ autoprefix options ref: https://github.com/browserslist/browserslist 의 Full List

> ### 겪었던 에러 상황 및 해결
> + 에러 : import / export syntex error <br/>
>   해결 : require / module.export 로 대체 <br/>
>
> + 에러 : npm install 문제 <br/>
>   해결 : 윈도우에서는 powershell이 아닌 cmd 사용할 것
>
> + 에러 : babel 미적용 문제<br/>
>   해결 : https://blog.cometkim.kr/posts/start-modern-javascript-with-babel/ 참고
>          해결 실패, ES6를 포기하고 ES5로 진행하기로 결정
>
> + 에러 : home 화면에서 오래된 비디오가 위로 오는 문제
>   해결 : sort({_id: -1}); => 역정렬


