import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import omit from 'omit.js'
import * as actionTypes from '../actions/actionTypes'

const itemReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...action.payload,
        id: 'new',
      }

    default:
      return state
  }
}

const itemByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_ITEMS:
      return action.payload.reduce(
        (acc, item) => ({
          ...acc,
          [item.id]: item,
        }),
        {}
      )

    case actionTypes.ADD_ITEM:
      return {
        ...state,
        new: itemReducer(null, action),
      }

    case actionTypes.REMOVE_ITEM:
      return {
        ...omit(state, [action.payload]),
      }

    default:
      return state
  }
}

const itemIdsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_ITEMS:
      return action.payload.map((task) => task.id)

    case actionTypes.ADD_ITEM:
      return ['new', ...state]

    case actionTypes.ADD_CREATED_ITEM_DATA:
      return [...state.map((id) => (id === 'new' ? action.payload.id : id))]

    case actionTypes.REMOVE_ITEM:
      return [...state.filter((id) => id !== action.payload)]

    default:
      return state
  }
}

export const itemsReducer = combineReducers({
  byId: itemByIdReducer,
  allIds: itemIdsReducer,
})

export const getItems = (state) =>
  state.tasks.allIds.map((id) => state.tasks.byId[id])

export const getSingleItem = (state, itemId) => state.items.byId[itemId]

export const getItemsForToday = createSelector(getItems, (items) =>
  items.filter((item) => item.today === true)
)
