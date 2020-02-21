Movie App 2020

React JS Funtamentals Course

# React 환경설정
- npm, npx 모두 설치
- 원하는 디렉토리로 이동
- npx create-react-app 생성할_폴더명

# 깃 연동 방법
0. git init
1. git remote add origin 연동시킬_URL
2. git add .
3. git commit -m "원하는 내용"
4. git push origin master

# 웹사이트와 깃허브 연동
1. npm i gh-pages
2. package.JSON 의 homepage 추가
    "homepage": "http://resschild.github.io/my_app_2020/"
3. script 에 
    "deploy": "gh-pages -d build" ,
    "predeploy": "npm run build" 추가
4. npm run deploy 실행
