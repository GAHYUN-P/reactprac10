//리액트 패키지를 불러옵니다.
import React from "react";
import {useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { deleteBucket } from "./redux/modules/bucket";
import { editBucket } from "./redux/modules/bucket";

const Detail = (props) => {
    const params = useParams();
    const bucket_list = useSelector((state) => state.bucket.list);
    const bucket_index = params.index;
    let history = useHistory();
    const dispatch = useDispatch();
    console.log(bucket_list)
    console.log(params);
    console.log(bucket_list[bucket_index]);
    const text2 = React.useRef(null);


return (
            <div>
                <h1>{bucket_list[bucket_index]}</h1>
                <button
                    onClick={() => {
                        // dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠? 
                        console.log("삭제하기 버튼을 눌렀어!");
                        dispatch(deleteBucket(bucket_index));
                        history.goBack();
                    }}>
                    삭제하기
                </button>
                <input type = "text" ref={text2}/>
                <button
                    onClick={() => {
                        // dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠? 
                        console.log("수정하기 버튼을 눌렀어!");
                        dispatch(editBucket(text2.current.value, bucket_index));
                        history.goBack();
                    }}>수정하기</button>
            </div>
    )
};

export default Detail;