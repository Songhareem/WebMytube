
# Mytube 만들기

## 1) NodeJs
+   NodeJs란?<br/>
    브라우저에 내장되어있는 JS를 유저의 컴퓨터(브라우저 밖)에서 돌아갈 수 있게 한 것

+   언제 사용하는가?<br/>
    백엔드/서버를 빌드해야하는 경우

+   왜 Python + Django / PHP + laravel 이 아닌 NodeJs인가?<br/>
    프론트엔드 및 백엔드를 JS로 하고싶은 경우<br/>
    밑바닥부터 시작하는게 좋다면 Node.JS(이미 있는 라이브러리를 하려면 Django/PHP)<br/>
    데이터를 많이 다룰 때(CRUD), 실시간/대용량 데이터 처리시 NodeJS<br/>
    (메모리-인코딩, 디코딩 등- 하드웨어-램, 하드 드라이브- 관련 접근이 필요하다면 Django)
    인터렉티브하지 않은 정적인 사이트를 만들 때

+   누가 사용하는가?<br/>
    백엔드의 경우, 여러 언어로 만들어질 수 있음.<br/>
    이베이, 페이팔, 우버, 넷플릭스 등이 NodeJS를 메인으로 만들어졌음<br/>

+   소프트웨어 서버란?<br/>
    인터넷(public private 네트워크)에 연결된 한 덩어리의 코드<br/>
    접속에 요청에 응답하는 소프트웨어

## 2) Express
+   Express란?<br/>
    NodeJs를 위한 서버 프레임워크

+   NPM(Node Package Manager)?<br/>
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
    
+   협업을 하고싶을 때?<br/>
    package.json과 main js파일(package.json에 적힌 것)만 전달해주면<br/>
    npm install 명령어를 통해 동일한 개발환경을 구성할 수 있다<br/>

+   git 업로드를 위해 node_modules를 업로드 하지 못하게 세팅<br/>
    .gitignore 파일 생성<br/>
    gitignore nodejs 표준(https://github.com/github/gitignore/blob/master/Node.gitignore),<br/>
    package-lock.json(package에 대한 security와 연관),<br/>
    위의 것들을 gitignore에 추가

+   서버 실행?<br/>
    1) 터미널에서 node serverName.js 입력
    2) package.json 내에서 "script" { "start": "node serverName.js }<br/>
       추가 후, 터미널에서 npm start 입력

## 3) Express 명령어

+   require("name") : require명령어를 실행하는 js파일이 있는 폴더에서<br/> 
    'name'을 가진 폴더,파일이 있는지 확인하고 없으면 node_modules 에서 찾음<br/>

+   express() : expressjs 실행

+   listen(portNum) : portNum 로부터 listen


