// bucket.js

// Actions
// Action 타입을 정해주는 부분
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const EDIT = 'bucket/EDIT';

// 초기값 지정
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"],
};

// Action Creators
export function createBucket(bucket) {
    // bucket이 새로운 데이터가 된다.
    console.log("액션을 생성할거야!");
    console.log(bucket)
    return { type: CREATE, bucket};
};

export function deleteBucket(bucket_index) {
    // bucket이 새로운 데이터가 된다.
    console.log("액션을 생성할거야!");
    console.log(bucket_index);
    return { type: DELETE, bucket_index};
};

export function editBucket(bucket_edit, bucket_index) {
    // bucket이 새로운 데이터가 된다.
    console.log("액션을 생성할거야!");
    console.log(bucket_edit);
    return { type: EDIT, bucket_edit, bucket_index};
};


// Reducer
export default function reducer(state = initialState, action = {}) {
// 파라미터 = {} 기본값을 준다. 
// 파라미터에 값이 안들어왔을때 발생할 수 있는 오류 방지
switch (action.type) {
    case "bucket/CREATE" : {
        console.log("이제 값을 바꿀거야!");
        console.log(...state.list);
        // 책읽기 수영 배우기 코딩 하기
        console.log(state.list);
        // ['영화관 가기', '매일 책읽기', '수영 배우기', '코딩 하기']
        console.log(action);
        const new_bucket_list = [...state.list, action.bucket]; 
        return {list : new_bucket_list};
    }

    case "bucket/DELETE" : {
        console.log(action.bucket_index)
        console.log("이제 값을 바꿀거야!");
        const new_bucket_list = state.list.filter((l, idx) => {
            return parseInt(action.bucket_index) !== idx;
        });
        console.log(new_bucket_list);

        return {list : new_bucket_list};
    }

    case "bucket/EDIT" : {
        console.log(action.bucket_index);
        console.log(action.bucket_edit);
        console.log(state.list[parseInt(action.bucket_index)]);
        console.log(state.list);
        
        // state.list[parseInt(action.bucket_index)] = 'action.bucket_edit';
        // state.list.splice(action.bucket_index, 1, action.bucket_edit);
        
        const new_bucket_list = state.list;
        new_bucket_list.splice(parseInt(action.bucket_index), 1, action.bucket_edit);

        console.log(state.list)

        // state.list[index]
        // 해당 인덱스의 내용을 대체해줘라
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