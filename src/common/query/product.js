import { API } from "../api/api";

export async function getProducts (skip)  {
  const data = await API.get(`/get-products?skip=${skip}`)
  return data;
}

export async function getProduct(id) {
  const data = await API.get(`/products/${id}`)
  return data;
}

export async function addProduct(params) {
  const data = await API.post(`/add-product`, params)
  return data;
}

export async function editProduct(id,params) {
  const data = await API.put(`/edit-product?id=${id}`, params)
  return data;
}

export async function deleteProduct(id) {
  const data = await API.delete(`/delete-product?id=${id}`)
  return data;
}