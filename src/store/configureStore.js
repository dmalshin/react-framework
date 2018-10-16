import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { runAppSagas } from './sagas'
import { routerMiddleware, routerEnhancer } from './reducers/routerReducer'
import { rootReducer } from './reducers/rootReducer'

export const history = createBrowserHistory()

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      routerEnhancer,
      applyMiddleware(thunk, routerMiddleware, sagaMiddleware)
    )
  )

  runAppSagas(sagaMiddleware)

  return store
}
