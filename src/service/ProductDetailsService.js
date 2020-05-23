
import React, {Component} from 'react';
import axios from 'axios'
const PRODUCTDETIALS = 'productdetails'
const PRODUCTDETIAL = 'productdetail'
const PRODUCT_GETALL_URL = 'http://localhost:7000'
const PRODUCTS = `${PRODUCT_GETALL_URL}/product/${PRODUCTDETIALS}`
const PRODUCTURL = `${PRODUCT_GETALL_URL}/product/${PRODUCTDETIAL}`
class ProductDetailsService {
    retrieveAllCourses() {
        return axios.get(`${PRODUCTS}`);
    }
    
    deleteCourse(id) {
    //console.log('executed service')
    return axios.delete(`${PRODUCTURL}/${id}`);
    }
}
export default new ProductDetailsService()