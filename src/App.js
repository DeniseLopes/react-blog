import React from 'react';
import Principal from './components/screens/principal/index'
import Postagem from './components/screens/postagem/index'
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route path='/' exact component={Principal} />
        <Route path='/postagem' exact component={Postagem} />
      </Router>
    );
  }
}

export default App;
