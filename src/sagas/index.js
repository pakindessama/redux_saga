import { all, put, takeEvery} from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';

export function* fetchToDoList() { 
  const response = yield fetch('https://dzt2xcr062.execute-api.us-west-1.amazonaws.com/getAllData');
  const responseData = yield response.json();
  const data = responseData.Items;
  console.log(data);
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}