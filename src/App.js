import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import { LoginPage } from './containers/LoginPage';
import { RegisterPage } from './containers/RegisterPage';
import { AddNewRequestPage } from './containers/AddNewRequestPage';
import { MyRequestsPage } from './containers/MyRequestsPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact  path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/addnewrequest' component={AddNewRequestPage} />
          <Route path='/myrequests' component={MyRequestsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
