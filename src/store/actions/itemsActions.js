import * as actionTypes from './actionTypes'
import * as api from '../../api'

export const receiveItems = (payload) => ({
  type: actionTypes.RECEIVE_ITEMS,
  payload,
})

export const fetchItems = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ITEMS })

  return api
    .getItems()
    .then((response) => dispatch(receiveItems(response.data)))
}

export const removeItem = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_ITEM,
    payload: id,
  })

  return api.deleteItem(id)
}

export const addItem = (name) => (dispatch) => {
  const itemProps = {
    name,
  }

  dispatch({
    type: actionTypes.ADD_ITEM,
    payload: itemProps,
  })

  return api.createItem(itemProps).then((response) =>
    dispatch({
      type: actionTypes.ADD_CREATED_ITEM_DATA,
      payload: response.data,
    })
  )
}
