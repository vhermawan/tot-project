import { API } from "../api/api";

export function getProducts(limit,skip) {
  API.get(`/products?limit=${limit}&skip=${skip}`).then(response => {
    return response
  }).catch(error =>{
    return error
  }).finally(response => {
    return response
  })
}

export function getProduct(id) {
  API.get(`/products/${id}`).then(response => {
    return response
  }).catch(error =>{
    return error
  }).finally(response => {
    return response
  })
}

export function addProduct(params) {
  API.post('/products/add',{params}).then(response => {
    return response
  }).catch(error =>{
    return error
  }).finally(response => {
    return response
  })
}

export function editProduct(id,params) {
  API.put(`/products/${id}`,params).then(response => {
    return response
  }).catch(error =>{
    return error
  }).finally(response => {
    return response
  })
}

export function deleteProduct(id) {
  API.delete(`/products/${id}`).then(response => {
    return response
  }).catch(error =>{
    return error
  }).finally(response => {
    return response
  })
}