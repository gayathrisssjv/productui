
import React, {Component} from 'react';
import axios from 'axios'

const CART_BASEURL = 'http://localhost:7001/cart'


class CartService {
    retrieveAllCourses() {
        console.log(CART_BASEURL);
        return axios.get(CART_BASEURL);
    }
    retrieveProductById(id) {
        console.log(CART_BASEURL);
        return axios.get(`${CART_BASEURL}/${id}`);
    }
    createCart() {
        console.log(CART_BASEURL);
        return axios.post(CART_BASEURL);
    }
    
  
}
export default new CartService()