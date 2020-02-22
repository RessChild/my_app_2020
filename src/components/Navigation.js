import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    // 또한 href 의 경우 페이지를 갱신시키지만,
    // Link 는 이러한 점을 해결 가능
    // 다만, Link 는 기본적으로 Router 내부에 존재해야 함
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}
// to 를 일종의 객체로 만들어 많은 정보를 한번에 넘길 수 있음
// pathname, search, hash, state 


export default Navigation;