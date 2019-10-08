import ReactDOM from 'react-dom';
import React from 'react';
import Principal from './components/screens/principal/index'
import Postagem from './components/screens/postagem/index'
import Login from './components/screens/login/index'
import Images from './components/screens/galeria/index'


import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Principal} />
          <Route path='/postagem' component={Postagem} />
          <Route path='/login' component={Login} />
          <Route path='/galeria' component={Images} />
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
