import React, { Component } from 'react'
import ProductDetailsService from '../service/ProductDetailsService';
import CartService from '../service/CartService';

const INSTRUCTOR = 'in28minutes'

class ListCartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token:props.location.state.token,
            cartId:props.location.state.cartId,
            totalNumberOfItemsInCart:0.0,
            totalCartCost:props.location.state.totalCartCost,
            productDetails: [],
            message: null
        }
        //this.deleteProductClicked = this.deleteProductClicked.bind(this)
        this.addToCartClicked = this.addToCartClicked.bind(this)
        //this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshProductDetails = this.refreshProductDetails.bind(this)
        this.displayCartItems = this.displayCartItems.bind(this)
    }

    componentDidMount() {
        
        this.refreshProductDetails();
    }
   

    refreshProductDetails() {
        CartService.retrieveAllCourses(this.state.token)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ productDetails: response.data })
                }
            )
    }
    deleteProductClicked(id) {
        ProductDetailsService.deleteCourse(id)
            .then(
                response => {
                    this.setState({ message: `Delete of product ${id} Successful` })
                    this.refreshProductDetails()
                }
            )
    }
    addToCartClicked(id){
        //CartService.retrieveProductById(id)
        console.log('add to cart ' + id)
        let locationx={
            pathname:'/productDetails',
            state:{cartId:(this.state.cartId),token:(this.state.token),productId:(id)}
        }                       
      this.props.history.push(locationx)
        //this.props.history.push(`/productDetails/${this.state.cartId}/${id}`)
    }
    displayCartItems(cartId){
        
        let locationx={
            pathname:'/viewCart',
            state:{cartId:(this.state.cartId),token:(this.state.token),totalCartCost:(this.state.totalCartCost)}
        }                       
      this.props.history.push(locationx)
    }

   

    render() {
      
        return (
            <div className="container">
                <h3>Inventory</h3>
                <div className="row">
                    <button onClick={() => this.displayCartItems(this.state.cartId)}>Cart Cost ({this.state.totalCartCost})</button>
                
                
                
                </div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>MRP</th>
                                <th>Add</th>
                               
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.productDetails.map(
                                    product =>
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>                                            
                                            <td>{product.description}</td>
                                            <td>Rs.{product.mrp}</td>
                                            <td><button className="btn btn-success" onClick={() => this.addToCartClicked(product.id)}>Add To Cart</button></td>
                                           


                                            
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                   
                </div>
                <div className="row">
                <button>Checkout Cart</button>
                
                
                </div>
                
           
            </div>
            
        )
    }
}

export default ListCartComponent