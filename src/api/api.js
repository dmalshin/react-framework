import HttpClient from '../core/HttpClient'

const basePath = '/api'

// Items
export const getItems = () => HttpClient.get(`${basePath}/item`)
export const createItem = (fields) =>
  HttpClient.post(`${basePath}/item/create`, fields)
export const updateItem = (id, fields) =>
  HttpClient.put(`${basePath}/item/${id}`, fields)
export const deleteItem = (id) => HttpClient.delete(`${basePath}/item/${id}`)
