import React, { Component } from 'react'
import CartService from '../service/CartService';



class CartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartId: 0,
            totalCartCost: 0.0
        }
        this.createNewCart = this.createNewCart.bind(this)
        //this.updateCourseClicked = this.updateCourseClicked.bind(this)
        //this.addCourseClicked = this.addCourseClicked.bind(this)
       // this.refreshProductDetails = this.refreshProductDetails.bind(this)
    }
     
    componentDidMount() {
        console.log('') 
    }
   

    
    createNewCart() {
       
            CartService.createCart()
                .then(
                    response => {
                        console.log(response.data);
                       
                        this.setState({cartId: response.data.cartId })
                       
                        this.setState({totalCartCost: response.data.totalCost })
                        this.props.history.push(`/inventory/${this.state.cartId}`)
                        
                    }
                )
                //console.log(this.state.cartId)
                //this.props.history.push(`/inventory/${this.state.cartId}`)
    }
    

   

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Welcome To Grocery Store</h3>
                <button className="btn btn-success" onClick={() => this.createNewCart()}>Let's Get Started</button>
            </div>
        )
    }
}

export default CartComponent