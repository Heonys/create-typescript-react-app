# create-typescript-react-app

#### cra에 너무 의존하지 말고, 직접 react 개발 세팅을 해보자

### 1. npm init

필요한 정보를 입력하고 package.json을 만들기

### 2. 필요한 패키지들 설치

```
npm install typescript react react-dom
npm install @types/react @types/react-dom ts-loader
// React는 type을 제공하지 않기때문에 커뮤니티에서 만든 패키지 설치
```

### 3. 웹팩 설치

리액트는 웹에서 실행할 수 없기떄문에 모듈 번들러 웹팩과 관련 패키지 설치

```
npm install webpack webpack-cli @types/webpack webpack-dev-server -D
npm install html-webpack-plugin clean-webpack-plugin -D
```

### 4. Babel 설치

```
npm install babel-loader @babel/core -D
npm install @babel/preset-env @babel/preset-react @babel/preset-typescript -D
```

#### babel.config.js 파일 생성

```
module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-env",
    "@babel/preset-typescript",
  ],
};
```

### 5. 웹팩 설정

웹팩 설정파일 생성
webpack.config.js 설정파일 참고

### 6. 타입스크립트 설정

tsc --init

```
//주요옵션
{
  "compilerOptions": {
    "target": "es2016", // 어떤 버전의 자바스크립트로 바꿔줄지 정할지
    "module": "commonjs", // 어떤 모듈 방식을 따르게 할지
    "lib": ["es5", "es2015", "dom"], // 컴파일 할 때 포함될 라이브러리의 목록
    "strict": true, // strict 관련 옵션 전부 켜기
    "allowJs": true, // ts에서 js 파일 import 여부
    "jsx": "react", // tsc를 어떻게 jsx로 바꿀지
    "noImplicitAny": true, //any타입 금지
    "strictNullChecks": true // null, undefined 타입에 값 참조할 시 에러
  }
}
```
