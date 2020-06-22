import React, { Component } from 'react'
import CartService from '../service/CartService';



class CartComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
            username:props.location.state.username,
            token:props.location.state.token,
            cartId: 0,
            totalCartCost: 0.0
        }
        this.createNewCart = this.createNewCart.bind(this)
        //this.updateCourseClicked = this.updateCourseClicked.bind(this)
        //this.addCourseClicked = this.addCourseClicked.bind(this)
       // this.refreshProductDetails = this.refreshProductDetails.bind(this)
    }
     
    componentDidMount() {
       
    }
   

    
    createNewCart() {
        
            console.log(this.state.username)
            console.log(this.state.token)
            CartService.createCart(this.state.username,this.state.token)
                .then(
                    response => {
                        console.log(response.data);
                       
                        this.setState({cartId: response.data.cartId })
                       
                        this.setState({totalCartCost: response.data.totalCost })
                        let locationx={
                            pathname:'/inventory',
                            state:{cartId:(response.data.cartId),token:(this.state.token),totalCartCost:(response.data.totalCost)}
                        }                       
                      this.props.history.push(locationx)
                        
                        // this.props.history.push(`/inventory/${this.state.cartId}/${this.state.totalCartCost}`)
                    }
                )
                //console.log(this.state.cartId)
                //this.props.history.push(`/inventory/${this.state.cartId}`)
    }
    

   

    render() {
       
        return (
            <div className="container">
                <h3>Welcome {this.state.username} To Grocery Store</h3>
                <button className="btn btn-success" onClick={() => this.createNewCart()}>Let's Get Started</button>
            </div>
        )
    }
}

export default CartComponent