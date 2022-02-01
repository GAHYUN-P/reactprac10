// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import {useHistory} from "react-router-dom";
// useDispatch는 데이터를 업데이트할 때,
// useSelector는 데이터를 가져올 때 씁니다.
import {useDispatch, useSelector} from "react-redux";


const BucketList = (props) => {
    let history = useHistory();

    // 여기에서 state는 리덕스 스토어가 가진 전체 데이터예요.
    // 우리는 그 중, bucket 안에 들어있는 list를 가져옵니다.
    const my_lists = useSelector((state) => state.bucket.list);

    return (
        <ListStyle>
            {
                my_lists.map((list, index) => {
                    return (
                        <ItemStyle
                            className="list_item"
                            key={index}
                            onClick={() => {
                                history.push("/detail");
                            }}>
                            {list}
                        </ItemStyle>
                    );
                })
            }
        </ListStyle>
    );
};

const ListStyle = styled.div `
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div `
padding: 16px;
margin: 8px;
background-color: aliceblue;
`;

export default BucketList;