
import React, {Component} from 'react';
import CartService from '../service/CartService';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class ProductComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        cartId:this.props.match.params.cartId,
        productid: this.props.match.params.id,
        name:'',
        description: '',
        mrp:0,
        quantity:0.0
        
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.validate = this.validate.bind(this)
}
componentDidMount() {
    console.log(this.state.id)
    // eslint-disable-next-line
   
    CartService.retrieveProductById(this.state.productid)
       
        .then(
          response => {
              console.log(response);
              
              this.setState({ name: response.data.name})
              this.setState({ description: response.data.description})
               this.setState({ description: response.data.description})
             this.setState({ mrp: response.data.mrp})
              //this.setState({ description: response.data.description})
          }
      )
}
onSubmit(values) {
  console.log(values);
  let cartItemRequest = {
    
    cartId:this.state.cartId,
    productId: this.state.productid,
    quantity: values.quantity,
    
}
console.log(cartItemRequest)



    CartService.retrieveProductById(this.state.id)
        .then(() => this.props.history.push('/productdetails'))


console.log(values);
}

onCancel(values) {
  console.log(values);
  this.props.history.push(`/cart`)
}

onCancel() {
  
  this.props.history.push(`/cart`)
}
validate(values) {
  let errors = {}
  if (!values.quantity) {
      errors.description = 'Enter a Description'
  } else if (values.description.length < 5) {
      errors.description = 'Enter atleast 5 Characters in Description'
  }

  return errors

}
render() {
    let {quantity,mrp,description,name,productid } = this.state
    return (
      <div>
          <h3>Add To Cart</h3>
          <div className="container">
              <Formik
                  initialValues={{ productid, name,description,mrp,quantity }}
                  onSubmit={this.onSubmit}
                  onCancel={this.onCancel}
                  validateOnChange={false}
                  validateOnBlur={false}
                  //validate={this.validate}
                  enableReinitialize={true}
              >
                  {
                      (props) => (
                          <Form>
                              <ErrorMessage name="description" component="div"
                                  className="alert alert-warning" />
                              <fieldset className="form-group">
                                  <label>Id</label>
                                  <Field className="form-control" type="text" name="productid" disabled />
                              </fieldset>
                              <fieldset className="form-group">
                                  <label>Name</label>
                                  <Field className="form-control" type="text" name="name" disabled />
                              </fieldset>
                              
                              <fieldset className="form-group">
                                  <label>Description</label>
                                  <Field className="form-control" type="text" name="description" disabled />
                              </fieldset>
                              <fieldset className="form-group">
                                  <label>MRP</label>
                                  <Field className="form-control" type="text" name="mrp" disabled />
                              </fieldset>
                              <fieldset className="form-group">
                                  <label>QUANTITY</label>
                                  <Field className="form-control" type="number" name="quantity"  />
                              </fieldset>
                              <button className="btn btn-success" type="submit">Add To Cart</button>
                              <button className="btn btn-success" type="cancel" onClick={() => this.onCancel()}>Cancel</button>
                          </Form>
                      )
                  }
              </Formik>

          </div>
      </div>
  )
}
}
export default ProductComponent