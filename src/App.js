import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  // Router 는 기본적으로 모든 놈들과 매칭을 시도
  // 일치하는 경우 전부 호출하므로,
  // exact 로 완벽 일치시에만 작동하도록 변경
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/movie/:id" component={ Detail } />
    </HashRouter>
  );
}
// router 란 사용자의 경로에 따라 보여줄 js 를 판단
// 또한 router 는 기본적으로 넘겨주는 props 가 존재
// :id = 변수 id 값이 들어감을 의미

export default App;
