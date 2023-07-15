import { API } from "../api/api";

export async function getProducts (limit,skip)  {
  const data = await API.get(`/products?limit=${limit}&skip=${skip}`)
  return data;
}

export async function getProduct(id) {
  const data = await API.get(`/products/${id}`)
  return data;
}

export async function addProduct(params) {
  const data = await API.post(`/products/add/`, params)
  return data;
}

export async function editProduct(id,params) {
  const data = await API.put(`/products/${id}`, params)
  return data;
}

export async function deleteProduct(id) {
  const data = await API.delete(`/products/${id}`)
  return data;
}