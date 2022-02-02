import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
// useDispatch를 가져와요!
import { useDispatch } from "react-redux";
// 액션생성함수도 가져오고요!
import { createBucket } from "./redux/modules/bucket";

// BucketList 컴포넌트를 import 해옵니다. import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";

// 데이터 베이스 데이터 가져오기
import { db } from "./firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";




function App() {

    const [list, setList] = React.useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
    const text = React.useRef(null);
    const dispatch = useDispatch();

    // async로 기다리게 해줄 수 있다.
    React.useEffect(async() =>{
        console.log(db)
        const query = await getDocs(collection(db, 'bucket'));

        //데이터를 보기 좋게 하려고. Array의 forEach함수 아님
        query.forEach((doc)=> {
            console.log(doc.id, doc.data());
            // {completed: false, text: '잠 잘 자기'}
        });

    }, []);

    const addBucketList = () => {
        // 스프레드 문법! 기억하고 계신가요? :) 원본 배열 list에 새로운 요소를 추가해주었습니다.
        // setList([
        //     ...list,
        //     text.current.value
        // ]);

        // 액션 객채 {type: "", data}
        dispatch(createBucket(text.current.value));
    };

    console.log(list);
    return (
        <div className="App">
            <Container>
                <Title>내 버킷리스트</Title>
                <Line/> {/* 컴포넌트를 넣어줍니다. */}
                {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
                <Switch>
                    <Route path="/" exact render={(props) => (<BucketList list={list}/>)}/>
                    <Route path="/detail/:index" component={Detail}/>
                    <Route component={NotFound}/>
                </Switch>
                {/* 스위치 안에 있는 경로들을 하나씩 하나씩 비교하고 전부 안맞으면 
                패스 지정 안한 마지막 경로가 뜸 */}

            </Container>
            {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
            <Input>
                <input type="text" ref={text}/>
                <button onClick={addBucketList}>추가하기</button>
            </Input>
        </div>
    );
}

const Input = styled.div `
max-width: 350px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Container = styled.div `
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1 `
color: slateblue;
text-align: center;
`;

const Line = styled.hr `
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;
