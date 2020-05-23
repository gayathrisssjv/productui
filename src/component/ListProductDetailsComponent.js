import React, { Component } from 'react'
import ProductDetailsService from '../service/ProductDetailsService';

const INSTRUCTOR = 'in28minutes'

class ListProductDetailsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productDetails: [],
            message: null
        }
        this.deleteProductClicked = this.deleteProductClicked.bind(this)
        //this.updateCourseClicked = this.updateCourseClicked.bind(this)
        //this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshProductDetails = this.refreshProductDetails.bind(this)
    }

    componentDidMount() {
        this.refreshProductDetails();
    }

    refreshProductDetails() {
        ProductDetailsService.retrieveAllCourses()//HARDCODED
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

   

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>Product Details</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>MRP</th>
                               
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
                                            <td>{product.mrp}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteProductClicked(product.id)}>Delete</button></td>

                                            
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                   
                </div>
            </div>
        )
    }
}

export default ListProductDetailsComponent