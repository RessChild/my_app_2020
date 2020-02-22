import React from "react";

class Detail extends React.Component{

    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state);

        // 얻어온 정보의 상태가 undefined 면 (링크가 아닌 직접 입력)
        // 다시 메인 화면으로 redirect 시킴
        // 자신이 들어온 경로는 history 에 정보로 넘어옴
        if(location.state === undefined){
            history.push("/");
        } // 엄격한 조건 ===
    }

    render() {
        const {location} = this.props;
        if(location.state){
            return (
                <span>{ location.state.title }</span>
            );
        }
        else return null;
    }
}

export default Detail;