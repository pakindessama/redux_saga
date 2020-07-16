import { all, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';

export function* fetchToDoList() {
  const data = [
      {
          _id:1,
          title: "Read every night",
          remarks: "This is a must"
      },
      {
          _id: 2,
          title: "Play piano",
          remarks: "Just for fun"
      }
    ];
  //console.log(data);
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}