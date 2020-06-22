import React, { Component } from 'react';
import ListProductDetailsComponent from './ListProductDetailsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductComponent from './ProductComponent';
import ListCartComponent from './ListCartComponent';
import CartComponent from './CartComponent';
import RegistrationComponent from './RegistrationComponent';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import ViewCartComponent from './ViewCartComponent';



class RouterComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:this.props.username,
            token:this.props.token
            
        }
        this.updateGlobalUsername = this.updateGlobalUsername.bind(this)
        this.updateGlobalToken = this.updateGlobalToken.bind(this)
        //this.addCourseClicked = this.addCourseClicked.bind(this)
       // this.refreshProductDetails = this.refreshProductDetails.bind(this)
    }
    updateGlobalUsername(updatedname){
        this.setState({username: updatedname })
        console.log(this.state.username)
    }
    updateGlobalToken(updatedtoken){
        this.setState({token: updatedtoken })
    }

    render() {
        return (
            <Router>
                <>
                    <h1>Online Grocery Store</h1>
                    <Switch>
                        <Route path="/home" exact component={HomeComponent} />
                        <Route path="/register" exact component={RegistrationComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <Route path="/cart" exact component={CartComponent} />
                        <Route path="/inventory" exact component={ListCartComponent} />
                        <Route path="/viewCart" exact component={ViewCartComponent} />
                        <Route path="/productDetails" component={ProductComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default RouterComponent;
