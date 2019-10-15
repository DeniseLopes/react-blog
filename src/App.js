import ReactDOM from 'react-dom';
import React from 'react';
import Principal from './components/screens/principal/index'
import Postagem from './components/screens/postagem/index'
import LoginComponent from './components/screens/loginComponent/index'
import Galeria from './components/screens/galeria/index'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Principal} />
          <Route path='/postagem' component={Postagem} />
          <Route path='/login' component={LoginComponent} />
          <Route path='/galeria' component={Galeria} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render((
  <Router>
    <App />
  </Router>

), document.getElementById('root'));

export default App;
