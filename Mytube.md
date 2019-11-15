
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

## 4) Babel

+ 최근의 js code를 무난한 예전의 js code로 변환해주는 컴파일러

+ npm 6.12 기준
    + npm install @babel/node
    + npm install @babel/core
    + npm install @babel/preset-evn

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

+ looging에 도움을 주는 미들웨어

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

## 12) MVC Patten

+ MVC? 
    + Module View Controler
    + M : 데이터 (DB)
    + V : 데이터가 어떻게 보이는가 (template)
    + C : 데이터를 보이게 하기위한 기능 ()

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

## ref 페이지

+ express ref : https://expressjs.com/
    + API reference 참조

+ 아이콘 : https://fontawesome.com
    + <script src="https://kit.fontawesome.com/ab7da79ab3.js" crossorigin="anonymous"></script> (가입하고 사용가능한 무료 코드)

+ 비디오 데모 : html video mdn

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


