// bucket.js

// Actions
// Action 타입을 정해주는 부분
const CREATE = 'bucket/CREATE';

// 초기값 지정
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// Action Creators
export function createBucket(bucket) {
    // bucket이 새로운 데이터가 된다.
    return { type: CREATE, bucket};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
// 파라미터 = {} 기본값을 준다. 
// 파라미터에 값이 안들어왔을때 발생할 수 있는 오류 방지
switch (action.type) {
    case "bucket/CREATE" : {
        const new_bucket_list = [...state.list, action.bucket]; 
        return {list : new_bucket_list};
    }
// do reducer stuff
default: return state;
}
}


// side effects, only as applicable
// e.g. thunks, epics, etc
// 미들웨어
// 서버에서 데이터 가져오는것은 비동기 통신인데 데이터 받는 시간을 기다려줌
// export function getWidget () {
    // return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
    // }