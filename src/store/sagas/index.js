import { itemCompletionSaga } from './itemsSagas'

export const runAppSagas = connecteSagaMiddleware => {
  connecteSagaMiddleware.run(itemCompletionSaga)
}
