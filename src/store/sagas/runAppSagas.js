import { itemsSaga } from './itemsSaga'

export const runAppSagas = (connectedSagaMiddleware) => {
  connectedSagaMiddleware.run(itemsSaga)
}
