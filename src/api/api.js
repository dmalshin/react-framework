import HttpClient from '../core/HttpClient'

// Items
export const getItems = () => HttpClient.get('/item')
export const createItem = (fields) => HttpClient.post(`/item/create`, fields)
export const updateItem = (id, fields) => HttpClient.put(`/item/${id}`, fields)
export const deleteItem = (id) => HttpClient.delete(`/item/${id}`)
