import React from 'react';
import './App.css';
/*import axios from 'axios';*/
import Nav from './components/nav';

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
      </div>
    );
  }
}

export default App;
