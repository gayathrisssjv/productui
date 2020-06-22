
import React, {Component} from 'react';
import axios from 'axios'

const CART_BASEURL = 'http://localhost:9000/cart/cart'
const SHOPPINGCART_BASEURL = 'http://localhost:9000/cart/shoppingcart'
const HELLO_BASEURL = 'http://localhost:9000/hello'
const CARTITEM_BASEURL = 'http://localhost:9000/cart/cartitem'


class CartService {

    
    retrieveAllCourses(token) {
        const opt={
            url: 'http://localhost:9000/cart/cart',
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            }
           
          };
          
         
        
        return axios(opt);
       
    }
    retrieveProductById(id,token) {
       
        const opt={
            url: `${CART_BASEURL}/${id}`,
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            }
           
          };
        return axios(opt);
    }
    createCart(username,token) {
        

          const opt={
            url: `${CART_BASEURL}/${username}`,
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            }
           
          };   
          console.log(opt.url)     
         
        
        return axios(opt);
        //fetch(HELLO_BASEURL, { mode: 'no-cors' });
       //return axios.get(HELLO_BASEURL,options);
       // return axios.post(CART_BASEURL,{a:10},options);
    }
    addCartItem(cartItemRequest,token){
        
        console.log(cartItemRequest)
        const opt={
            url: 'http://localhost:9000/cart/cartitem',
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            data:cartItemRequest
           
          };  

        return axios(opt);
    }
    
    displayCartItems(token,cartId){
      const opt={
        url: `${CARTITEM_BASEURL}/${cartId}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
       
      };
    return axios(opt);
    }

    deleteCartItem(token,cartId,productId){
      const opt={
        url: `${CART_BASEURL}/${cartId}/${productId}`,
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
       
      };
    return axios(opt);
    }

    getShoppingCart(token,cartId){
      const opt={
        url: `${SHOPPINGCART_BASEURL}/${cartId}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
       
      };
    return axios(opt);
    }

  
    
  
}
export default new CartService()