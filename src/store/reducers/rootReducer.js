import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { itemsReducer } from './itemsReducer'

export const rootReducer = combineReducers({
  items: itemsReducer,
  form: formReducer,
})
