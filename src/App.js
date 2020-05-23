import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RouterComponent from './component/RouterComponent';
 
class App extends Component {
  render() {
    return (
      <div className="container">
        <RouterComponent />
      </div>
    );
  }
    
}
 
export default App;