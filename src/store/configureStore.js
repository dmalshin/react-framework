import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { rootReducer } from './reducers/rootReducer'
import { runAppSagas } from './sagas'

export const history = createBrowserHistory()

export const configureStore = () => {
  const router = routerMiddleware(history)
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(applyMiddleware(router, thunk, sagaMiddleware))
  )

  runAppSagas(sagaMiddleware)

  return store
}
