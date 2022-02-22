import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    const user = {
      username: 'maria',
      password: 1234,
    }
    return (
      <div>
        <BrowserRouter>
        <div>
          <ul>
            <li>{<Link to="/">Home</Link>}</li>
            <li>{<Link to="/about">About</Link>}</li>
            <li>{<Link to="/users">Users</Link>}</li>
            <li>{<Link to="/strictAccess">StrictAccess</Link>}</li>
          </ul>
        </div>
        <Switch>        
        <Route
          path="/users" 
          render={(props) => <Users {...props} greetingsMessage="Good Morning" />}
        />
        <Route path="/about" component={About} />
        <Route
          path="/strictAccess"
          render={(props) => <StrictAccess {...props} user={user} />}
        />
        <Route path="/" component={Home} />
        </Switch>       
        </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
