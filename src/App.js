import React from 'react';
import Proptypes from"prop-types";

const foodILike = [
  {
    id:1,
    name:"kimchi",
    pic:"https://pds.joins.com/news/component/htmlphoto_mmdata/201910/01/htm_20191001205346742941.jpg",
    rating:5,
  },{
    id:2,
    name:"ramen",
    pic:"https://pds.joins.com/news/component/htmlphoto_mmdata/201910/01/htm_20191001205346742941.jpg",
    rating:4.8,
  },{
    id:3,
    name:"삼겹살",
    pic:"https://pds.joins.com/news/component/htmlphoto_mmdata/201910/01/htm_20191001205346742941.jpg",
    rating:3.6,
  }]

function renderFood(dish){
  return <Food
           key={dish.id} 
           favorite={dish.name} 
           pic={dish.pic} 
           rating={dish.rating}
          />
}

  // 함수를 따로 짜서 선언해도 상관없고\
  // 람다형식으로 짜도 OK
  // 입력명 => ( 함수 내용 )

// component 호출 함수는 무조건 대문자로 시작해야함
function Food( { favorite, pic, rating } ){ // props.fav 랑 동일
  console.log({rating})
  return (
    <div>
      <h1>i like {favorite} </h1>
      <h4>{rating}/5.0 </h4>
      <img src={pic} alt={favorite}/>
    </div>
  );
}

Food.propTypes = {
  name:Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number
}; // 인자전달 오류찾는 방법
// isRequired 가 없으면 필수는 아님 

function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
