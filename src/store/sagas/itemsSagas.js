import { takeEvery } from 'redux-saga/effects'
// import { takeEvery, put, select } from 'redux-saga/effects'
// import { getSingleItem } from '../reducers/itemsReducer'

// const canFindIncompletedTask = task =>
//   task.subtasks.some(subtask => subtask.completed === false)

// const mapSubtasksToCompleted = subtasks =>
//   subtasks.map(subtask => ({
//     ...subtask,
//     completed: true,
//   }))

function* completeAllSubtasks() {
  yield null
}
// function* completeAllSubtasks(action) {
// const { id, completed } = action.payload
// if (!completed) {
//   return
// }

// const task = yield select(getSingleTask, id)
// if (canFindIncompletedTask(task)) {
//   yield put(modifySubtasks(task.id, mapSubtasksToCompleted(task.subtasks)))
// }
// }

export function* itemCompletionSaga() {
  yield takeEvery('SET_ITEM_COMPLETION', completeAllSubtasks)
}
