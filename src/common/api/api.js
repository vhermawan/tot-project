import axios from 'axios';
import { API_URL } from './initProperties';
import Cookies from 'js-cookie';

export const API = {
  post : async function (endPoint, input) {        
    let headers = {};
    let token = Cookies.get("token");
    
    if(token !== null)
      headers.Authorization = `Bearer ${token}`;

    return await axios.post(API_URL + endPoint, input, { headers: headers })
    .then(response => {
      return response;
    }).catch(error => {
      throw error.response;
    });
  },

  get : async function (endPoint) {        
    let headers = {};
    let token = Cookies.get("token");
    
    if(token !== null)
      headers.Authorization = `Bearer ${token}`;

    return await axios.get(API_URL + endPoint, { headers: headers })
    .then(response => {
      return response;
    }).catch(error => {
      throw error.response;
    });
  },

  put : async function (endPoint, input) {        
    let headers = {};
    let token = Cookies.get("token");
    
    if(token !== null)
      headers.Authorization = `Bearer ${token}`;

    return await axios.put(API_URL + endPoint, input, { headers: headers })
    .then(response => {
      return response;
    }).catch(error => {
      throw error.response;
    });
  },

  delete : async function (endPoint) {
    let headers = {};        
    let token = Cookies.get("token");
    
    if(token !== null)
      headers.Authorization = `Bearer ${token}`;

    return await axios.delete(API_URL + endPoint, { headers: headers })
    .then(response => {
      return response;
    }).catch(error => {
      throw error.response;
    });
  },
}