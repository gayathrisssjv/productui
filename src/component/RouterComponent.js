import React, { Component } from 'react';
import ListProductDetailsComponent from './ListProductDetailsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductComponent from './ProductComponent';
import ListCartComponent from './ListCartComponent';
import CartComponent from './CartComponent';



class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Online Grocery Store</h1>
                    <Switch>
                        
                        <Route path="/cart" exact component={CartComponent} />
                        <Route path="/inventory/:cartId" exact component={ListCartComponent} />
                       
                        <Route path="/productDetails/:cartId/:id" component={ProductComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default RouterComponent