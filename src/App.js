import React from 'react';
import './App.css';
/*import axios from 'axios';*/
import Nav from './components/nav';
import Carousel from './components/carousel';

class App extends React.Component {
  
 /* constructor(props){
    super(props)
    axios
    .get('/postagens')
    .then(resultado=>{
      console.log(resultado)
    })
  }*/

  render() {
    return (
      <div className="App">
        <Nav />
        <Carousel />
      </div>
     
    );
  }
}

export default App;
