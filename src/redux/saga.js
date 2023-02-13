import { takeLatest, put, all, call } from "redux-saga/effects";
import { deleteTodoSaga, addTodoSaga, updateTodoSaga } from "./action";
// ADD
export function* onAddTodoSaga({ payload }) {
  yield put(addTodoSaga(payload));
}

export function* onAdd() {
  yield takeLatest("ADD_TODO", onAddTodoSaga);
}

// DELETE
export function* onDeleteTodoSaga({ payload: { id } }) {
  yield put(deleteTodoSaga(id));
}

export function* onDelete() {
  yield takeLatest("DELETE_TODO", onDeleteTodoSaga);
}

// UPDATE
export function* onUpdateTodoSaga({ payload }) {
  yield put(updateTodoSaga(payload));
}

export function* onUpdate() {
  yield takeLatest("UPDATE_TODO", onUpdateTodoSaga);
}

// ALL
export function* todos() {
  yield all([call(onDelete), call(onAdd), call(onUpdate)]);
}
