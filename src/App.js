import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import EntryForm from './components/EntryForm';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import { AuthProvider } from './components/Auth';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={EntryForm} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/adminpanel" component={AdminPanel} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
