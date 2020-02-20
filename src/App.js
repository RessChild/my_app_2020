import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import Proptypes from"prop-types";

class App extends React.Component{
  // 객체화 시킨 이상, 일반적인 함수처럼 return이 있는게 아님
  state = {
    isLoading : true,
    movies : [],
  }

  getMovies = async () =>{
     // 해당 주소로부터 json 파일을 받아옴 (fetch 와 동일)
    // 다만, 받아오는 시간이 느릴 수 있으니 대기함을 알려줘야함
    // async 명령을 통해 비동기화 시킴 (기다려야한다)
    // await 는 대기할 함수를 정의시킴
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    console.log(movies);
    // react 의 경우, 전체를 받아와서 내부 원소를 호출하는 형식 외에
    // 데이터 구조를 순차적으로 작성하여 직접 접근하는 방식도 가능

    this.setState({ movies, isLoading: false });
    // state 명과 변수명이 동일한 경우, 알아서 처리해줌
    }
  
  componentDidMount(){
    this.getMovies();
    /*
    setTimeout(()=>{
      this.setState({isLoading : false});
    }, 6000)
    */
  }

  render(){
    const { isLoading, movies } = this.state
    return (
      <div>
          {isLoading ? "Loading..." : movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))}
     </div>
    )}
    // react 는 기본적으로 모든 class 에 있는 render 함수를 실행시키려함
}

export default App;
